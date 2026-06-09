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

See `.claude/commands/analyze-trip.md` for what the analysis produces, and the
"Expense analysis" section of `CLAUDE.md` for the full convention.
