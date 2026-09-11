# expense-data/

Local home for **real** trip expense exports. Everything in this folder
**except this README is gitignored** — raw financial data is never committed
to this public repo.

## Workflow

1. After a trip ends, open the site's **Sync** page, select the completed
   trip, and **Export**. You'll get a file like `pycon-us-2026-data-YYYY-MM-DD.json`.
2. Save (or rename) it here, e.g. `expense-data/pycon-us-2026.json`.
3. Run `/analyze-trip <trip-id>` (or `/analyze-trip all`) in Claude Code to
   compare actuals against the trip's `budget.ts` and refine the calibration.

## Starting from a card statement instead

When the spending was never typed into the Log page, convert the bank or
credit-card CSV instead of exporting from Sync:

```bash
npm run csv-to-expenses -- "~/Downloads/statement.csv" --trip portugal-2026
```

That writes `expense-data/<trip-id>.json` in the same v2 shape Sync exports, so
it feeds `/analyze-trip` directly and can also be loaded back into the browser
via **Sync → Import** (choose *Merge*: ids are derived from the row contents, so
re-running never duplicates anything). Add `--currency EUR` if the statement
isn't in CAD. How a merchant becomes a budget line item is decided by
`scripts/expense-rules/<trip-id>.mjs` — see that folder's README.

See `.claude/commands/analyze-trip.md` for what the analysis produces, and the
"Expense analysis" section of `CLAUDE.md` for the full convention.
