# Ideas

A running list of features considered but not yet built. Each entry is a brief — enough context to pick up later without re-deriving the design.

---

## Cross-trip YTD overview (totals only)

**What:** A single top-level page (or a block on the hub) showing four numbers:

- Estimated YTD (sum of `budget` across trips ending this year)
- Spent YTD (sum of logged expenses with dates this year)
- Estimated all-time (sum of `budget` across all trips)
- Spent all-time (sum of logged expenses across all trips)

No category breakdown, no charts, no per-trip table — just totals.

**Why:** Quick "how much am I spending on travel this year" glance without drilling into each trip's Budget page.

**How it works (client-side, static build):**

1. Import `trips` from `src/data/trips.ts`.
2. For each trip, read `travels-budget-<id>` from `localStorage` → actual expenses.
3. For each trip, sum `config.budget[].items[].estimated` → estimated.
4. Convert every amount to CAD using a single editable exchange-rate table stored in `localStorage` (e.g. `travels-overview-rates`).
5. Filter expenses by `date` starting with current year for YTD; filter trips by `endDate` year for estimated YTD.
6. Render four big numbers.

**Design decisions already resolved:**

- Display currency: CAD (user's home currency).
- Single rate table at the top level — don't pull per-trip `travels-rate-<id>` (drift).
- "YTD" = expense date for spent, trip `endDate` year for estimated.

**Effort:** ~1 afternoon, ~100 lines. One new page (`src/pages/overview.astro` or similar), no schema changes, no new shared components required.

**Open questions (defer until building):**

- Top-level page vs. block on the hub — block feels lighter but the hub is already dense.
- Where the rate table is edited — inline on the page, or a small modal.

---

## Private trips: import/export whole trip data

**What:** Extend the Sync model so whole trips (config + cities + budget + checklist + tips) are portable JSON, not just their expense logs. Public trips (work, conferences, family vacations safe to share) stay in the repo and render on `travel.mariatta.ca`. Private trips (personal itineraries with addresses, hotels, private notes) live as local JSON, never committed, never published.

**Why:** Today every trip in `src/trips/*/config.ts` is committed and therefore public. That's fine for conferences and family trips already posted publicly, but limits using the planner for genuinely private travel. The existing `PUBLIC_BUILD` + `inEventBlock` flags hide *items within* a trip; they don't hide a whole trip.

**Two approaches:**

**Option A — Dev-time private folder (recommended):**

- Add `src/trips/_local/` to `.gitignore`.
- `src/data/trips.ts` uses `import.meta.glob('../trips/*/config.ts')` so any folder under `src/trips/` auto-registers without a manual edit.
- On the public build (`PUBLIC_BUILD=true`), the registry filters out anything under `_local/`.
- Export: a small script (`npm run export-trip <slug>`) serializes `config.ts + *.ts` to a single JSON file.
- Import: drop the JSON into `src/trips/_local/<slug>/` (a tiny script re-hydrates it into the TS structure the registry expects), run `npm run dev`, and the trip renders with full component fidelity.
- Pro: zero component rewrites, private trips look identical to public ones in dev.
- Con: requires running the dev server locally to view private trips. Not a "click to import in the browser" flow.

**Option B — Runtime client-side trips:**

- An "Import trip" button on the Sync page accepts a JSON file.
- Private trips stored in `localStorage` under `travels-private-trip-<id>`.
- A `/personal/` route (or toggle on the hub) renders them — but since Astro components are build-time only, these would need a simplified client-side viewer (vanilla JS or a small framework component) rendering a subset of the page: hero, map, hotels list, restaurants list, itinerary.
- Pro: fully in-browser, no dev setup.
- Con: private trips look noticeably worse than public ones. Significant new rendering code to maintain in parallel with the Astro components.

**Recommended: Option A.** Leverages everything already built, keeps one rendering path, and matches the "code is the source of truth, JSON is the transport format" pattern already established by the expense Sync v2 export.

**Effort:** ~1 day. Mostly around the export script (TS → JSON traversal) and the import reverse (JSON → `_local/<slug>/*.ts` scaffolding). Registry change to `import.meta.glob` is small. Public-build filter is a one-liner.

**Open questions (defer until building):**

- Export format: flat single JSON vs. zip of per-file JSONs (cities, budget, etc.). Single JSON is simpler; a zip mirrors the on-disk layout.
- Should `_local/` trips appear in navigation prev/next alongside public ones? Probably yes in dev, definitely no in the public build.
- Migration path if an existing public trip needs to go private (e.g. a past family trip you want to pull down) — export, delete the folder, re-import into `_local/`.

---

## Year-end conference expenses blog post

**What:** A once-a-year write-up (page or post) on what conference travel actually cost across the year — estimate-vs-actual, surprises, and the per-trip totals — pitched as a useful "here's what speaking at N conferences really costs" read for the community.

**Why:** The per-event analysis (see the `/analyze-trip` command + the `project_budget_calibration` / `project_expense_analysis_workflow` memories) already produces the numbers privately. This surfaces a curated, rounded version publicly. The site already has `about.astro` and `changelog.astro`, so a sibling page fits.

**How it works:**

1. Source data is the gitignored `expense-data/<trip-id>.json` exports + each trip's `budget.ts` estimates.
2. Run `/analyze-trip all` to aggregate the year's completed trips.
3. Hand-curate a **rounded, approved** subset into the post — never raw line items.
4. Render as a static page (e.g. `src/pages/expenses-2026.astro` or a `/blog/` route).

**What's safe to publish (decide per post):**

- ✅ Rounded per-trip totals, per-category percentages, normalized unit costs ($/night, $/day), estimate-vs-actual accuracy, narrative lessons.
- ⚠️ Maybe: exact totals (round to nearest \$25–50).
- ❌ Never: raw line items, dated transactions, the medical/personal entries, anything that doubles as a "Mariatta was away on date X" signal, hotel/room specifics.

**Privacy:** raw exports stay gitignored. Only the curated page is committed. Get explicit sign-off on the figures before publishing.

**Open questions (defer until building):**

- Standalone `expenses-2026.astro` vs. a reusable `/blog/` system (this is currently the only post idea — a standalone page is lighter).
- Whether to show absolute CAD or normalize to "cost per conference-day" for comparability across trip lengths.
- Charts (reuse the budget page's accent-aware bars) vs. a clean table.
- Exchange-rate footnote — state the USD→CAD rate used so numbers are reproducible.

**Effort:** ~half a day once a year, mostly curation — the analysis is already done by `/analyze-trip`.