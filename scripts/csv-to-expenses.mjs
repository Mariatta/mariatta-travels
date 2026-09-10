#!/usr/bin/env node
/**
 * csv-to-expenses — turn a bank/credit-card CSV into a Sync-page import file.
 *
 *   node scripts/csv-to-expenses.mjs <csv> --trip <trip-id> [options]
 *
 * Output is the same v2 shape the Sync page exports, so the result imports
 * straight back in via Sync → Import (use "Merge" to keep anything already
 * logged in the browser).
 *
 * Options
 *   --trip <id>        Trip id, e.g. portugal-2026            (required)
 *   --currency <CUR>   Currency the CSV amounts are in        (default CAD)
 *   --out <path>       Output file      (default expense-data/<trip>.json)
 *   --rules <path>     Rules module     (default scripts/expense-rules/<trip>.mjs,
 *                                        falling back to .../default.mjs)
 *   --stdout           Print the JSON instead of writing a file
 *   --quiet            Summary only, no per-row review list
 *
 * The CSV needs a header row. Recognised column names (case-insensitive):
 *   date · detail|description|merchant|payee · category · city · amount|debit
 *
 * Mapping from a CSV row to a budget category + line item lives in the rules
 * module, not here. See scripts/expense-rules/README.md.
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

/* ------------------------------------------------------------------ args -- */

function parseArgs(argv) {
  const opts = { currency: 'CAD', quiet: false, stdout: false };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--quiet') opts.quiet = true;
    else if (a === '--stdout') opts.stdout = true;
    else if (a.startsWith('--')) {
      const [flag, inline] = a.split('=');
      const key = flag.slice(2);
      opts[key] = inline !== undefined ? inline : argv[++i];
    } else positional.push(a);
  }
  opts.csv = positional[0];
  return opts;
}

function die(msg) {
  console.error(`error: ${msg}`);
  process.exit(1);
}

/* ------------------------------------------------------------------- csv -- */

/** RFC 4180-ish: handles quoted fields, embedded commas/newlines, "" escapes. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  const src = text.replace(/^﻿/, '');

  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(v => v !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some(v => v !== '')) rows.push(row);
  return rows;
}

const COLUMNS = {
  date: ['date', 'transaction date', 'posted date', 'posting date'],
  detail: ['detail', 'description', 'merchant', 'payee', 'name', 'details'],
  category: ['category', 'type', 'tag'],
  city: ['city', 'location', 'place'],
  amount: ['amount', 'debit', 'charge', 'value', 'cad$'],
};

function mapHeader(header) {
  const norm = header.map(h => h.trim().toLowerCase());
  const idx = {};
  for (const [field, names] of Object.entries(COLUMNS)) {
    for (const n of names) {
      const at = norm.indexOf(n);
      if (at !== -1) { idx[field] = at; break; }
    }
  }
  if (idx.date === undefined) die(`no date column found in header: ${header.join(', ')}`);
  if (idx.amount === undefined) die(`no amount column found in header: ${header.join(', ')}`);
  if (idx.detail === undefined) die(`no description column found in header: ${header.join(', ')}`);
  return idx;
}

/** MM/DD/YYYY, M/D/YY, YYYY-MM-DD, DD-MM-YYYY (when unambiguous) → ISO. */
function isoDate(raw) {
  const s = raw.trim();
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (m) {
    let [, a, b, y] = m;
    if (y.length === 2) y = `20${y}`;
    // A value over 12 in the first slot can only be a day.
    const [mo, d] = Number(a) > 12 ? [b, a] : [a, b];
    return `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  const parsed = new Date(s);
  if (!Number.isNaN(parsed.valueOf())) return parsed.toISOString().slice(0, 10);
  die(`could not read the date ${JSON.stringify(raw)}`);
}

function parseAmount(raw) {
  const cleaned = raw.replace(/[$€£¥\s,]/g, '').replace(/^\((.*)\)$/, '-$1');
  const n = Number(cleaned);
  if (Number.isNaN(n)) die(`could not read the amount ${JSON.stringify(raw)}`);
  return Math.round(n * 100) / 100;
}

/* ---------------------------------------------------------------- budget -- */

/**
 * Import the trip's budget.ts for its real category and item ids. Node 22 needs
 * --experimental-strip-types to import TypeScript, so re-exec once with it.
 */
async function loadBudget(tripId) {
  const path = join(ROOT, 'src', 'trips', tripId, 'budget.ts');
  if (!existsSync(path)) die(`no budget file at ${path} — is ${tripId} the right trip id?`);
  try {
    const mod = await import(pathToFileURL(path).href);
    return mod.budgetData;
  } catch (err) {
    if (process.env.CSV_TO_EXPENSES_RESPAWNED === '1') throw err;
    const res = spawnSync(
      process.execPath,
      ['--experimental-strip-types', '--no-warnings', fileURLToPath(import.meta.url), ...process.argv.slice(2)],
      { stdio: 'inherit', env: { ...process.env, CSV_TO_EXPENSES_RESPAWNED: '1' } },
    );
    process.exit(res.status ?? 1);
  }
}

function indexBudget(budgetData) {
  const categories = new Map();
  const items = new Map();
  for (const cat of budgetData) {
    categories.set(cat.id, cat.title);
    for (const item of cat.items) items.set(item.id, { label: item.label, categoryId: cat.id });
  }
  return { categories, items };
}

/* ----------------------------------------------------------------- rules -- */

async function loadRules(tripId, override) {
  const candidates = override
    ? [resolve(process.cwd(), override)]
    : [join(HERE, 'expense-rules', `${tripId}.mjs`), join(HERE, 'expense-rules', 'default.mjs')];
  for (const path of candidates) {
    if (existsSync(path)) {
      const mod = await import(pathToFileURL(path).href);
      return { path, rules: mod.rules ?? [], fallback: mod.fallback, cityNames: mod.cityNames ?? {} };
    }
  }
  die(`no rules module found (looked for ${candidates.join(', ')})`);
}

function matches(when, row) {
  if (!when) return true;
  const test = (pattern, value) => {
    if (pattern === undefined) return true;
    if (pattern instanceof RegExp) return pattern.test(value);
    if (Array.isArray(pattern)) return pattern.some(p => test(p, value));
    return String(pattern).toLowerCase() === value.toLowerCase();
  };
  if (!test(when.merchant, row.detail)) return false;
  if (!test(when.category, row.category)) return false;
  if (!test(when.city, row.city)) return false;
  if (when.date && !test(when.date, row.date)) return false;
  if (when.from && row.date < when.from) return false;
  if (when.to && row.date > when.to) return false;
  if (when.min !== undefined && row.amount < when.min) return false;
  if (when.max !== undefined && row.amount > when.max) return false;
  return true;
}

/* ------------------------------------------------------------------ misc -- */

const SMALL_WORDS = new Set(['de', 'do', 'da', 'dos', 'das', 'e', 'a', 'o', 'of', 'the', 'and']);

/** "CONTINENTE BOM DIA" → "Continente Bom Dia"; leaves mixed-case names alone. */
function titleCase(s) {
  if (/[a-z]/.test(s)) return s;
  return s
    .toLowerCase()
    .split(/(\s+|[/*])/)
    .map((w, i) => (i > 0 && SMALL_WORDS.has(w) ? w : w.replace(/^([a-z])/, c => c.toUpperCase())))
    .join('')
    .trim();
}

/** Stable across runs, so re-importing in Merge mode never duplicates a row. */
function rowId(tripId, row, seq) {
  const hash = createHash('sha1')
    .update([tripId, row.date, row.detail, row.amount, row.category, row.city, seq].join('|'))
    .digest('hex');
  return `csv${hash.slice(0, 12)}`;
}

const money = n => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/* ------------------------------------------------------------------ main -- */

const opts = parseArgs(process.argv.slice(2));
if (!opts.csv || !opts.trip) {
  const doc = readFileSync(fileURLToPath(import.meta.url), 'utf8');
  console.error(doc.split('*/')[0].replace(/^#!.*\n/, '').replace(/^\/\*\*?\n?|^ ?\* ?/gm, '').trim());
  process.exit(opts.csv || opts.trip ? 1 : 0);
}

const csvPath = resolve(process.cwd(), opts.csv);
if (!existsSync(csvPath)) die(`no such file: ${csvPath}`);

const budgetData = await loadBudget(opts.trip);
const budget = indexBudget(budgetData);
const { path: rulesPath, rules, fallback, cityNames } = await loadRules(opts.trip, opts.rules);

const table = parseCsv(readFileSync(csvPath, 'utf8'));
if (table.length < 2) die('the CSV has no data rows');
const idx = mapHeader(table[0]);

const expenses = [];
const review = [];
const problems = [];

table.slice(1).forEach((cells, i) => {
  const at = field => (idx[field] === undefined ? '' : (cells[idx[field]] ?? '').trim());
  const row = {
    date: isoDate(at('date')),
    detail: at('detail'),
    category: at('category'),
    city: at('city'),
    amount: parseAmount(at('amount')),
  };
  if (row.amount === 0) return;

  const rule = rules.find(r => matches(r.when, row));
  const hit = rule ?? (fallback ? fallback(row) : null);
  if (!hit) {
    problems.push({ row, why: 'no rule matched and the rules module has no fallback' });
    return;
  }

  const itemId = hit.itemId ?? '';
  if (!budget.categories.has(hit.category)) {
    problems.push({ row, why: `rule points at unknown budget category "${hit.category}"` });
    return;
  }
  if (itemId && !budget.items.has(itemId)) {
    problems.push({ row, why: `rule points at unknown budget item "${itemId}"` });
    return;
  }
  if (itemId && budget.items.get(itemId).categoryId !== hit.category) {
    problems.push({ row, why: `item "${itemId}" is not in category "${hit.category}"` });
    return;
  }

  const label = typeof hit.as === 'function' ? hit.as(row) : hit.as;
  const description = label ?? [titleCase(row.detail), row.category && `(${row.category})`].filter(Boolean).join(' ');

  expenses.push({
    id: rowId(opts.trip, row, i),
    description,
    amount: row.amount,
    currency: opts.currency,
    category: hit.category,
    itemId,
    itemLabel: itemId ? budget.items.get(itemId).label : '',
    city: cityNames[row.city.toLowerCase()] ?? titleCase(row.city),
    date: row.date,
  });

  if (hit.review) review.push({ row, hit, note: typeof hit.review === 'string' ? hit.review : '' });
});

expenses.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

/* Keep whatever checklist state a previous export left in the output file, so a
   Replace-mode import doesn't wipe the trip's ticked-off checklist. */
const outPath = resolve(process.cwd(), opts.out ?? join(ROOT, 'expense-data', `${opts.trip}.json`));
let checklist = {};
if (existsSync(outPath)) {
  try {
    const prior = JSON.parse(readFileSync(outPath, 'utf8'));
    checklist = prior?.trips?.[opts.trip]?.checklist ?? {};
  } catch { /* unreadable prior export — start from an empty checklist */ }
}

const payload = {
  version: 2,
  exportedAt: new Date().toISOString(),
  trips: { [opts.trip]: { expenses, checklist } },
};
const json = JSON.stringify(payload, null, 2);

if (opts.stdout) {
  console.log(json);
} else {
  writeFileSync(outPath, `${json}\n`);
}

/* --------------------------------------------------------------- summary -- */

const log = opts.stdout ? console.error : console.log;
const total = expenses.reduce((s, e) => s + e.amount, 0);

const byCategory = new Map();
for (const e of expenses) byCategory.set(e.category, (byCategory.get(e.category) ?? 0) + e.amount);

log('');
log(`${opts.trip} · ${expenses.length} expenses · ${opts.currency} ${money(total)}`);
log(`rules: ${rulesPath.replace(`${ROOT}/`, '')}`);
if (!opts.stdout) log(`wrote: ${outPath.replace(`${ROOT}/`, '')}`);
log('');
for (const [id, sum] of [...byCategory].sort((a, b) => b[1] - a[1])) {
  log(`  ${budget.categories.get(id).padEnd(26)} ${opts.currency} ${money(sum).padStart(10)}`);
}

const unassigned = expenses.filter(e => !e.itemId);
if (unassigned.length) {
  log('');
  log(`${unassigned.length} row(s) landed in a category but no line item.`);
}

if (review.length && !opts.quiet) {
  log('');
  log(`Worth a look — ${review.length} row(s) the rules flagged as a judgment call:`);
  for (const { row, hit, note } of review) {
    log(`  ${row.date}  ${money(row.amount).padStart(9)}  ${row.detail.padEnd(24)} → ${hit.itemId || hit.category}${note ? `  (${note})` : ''}`);
  }
}

if (problems.length) {
  log('');
  log(`Skipped ${problems.length} row(s):`);
  for (const { row, why } of problems) log(`  ${row.date}  ${money(row.amount).padStart(9)}  ${row.detail} — ${why}`);
  process.exitCode = 1;
}
