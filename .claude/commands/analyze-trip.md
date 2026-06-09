# Analyze real trip expenses against budget

Analyze the real, logged expenses for one or more completed trips and feed the
findings back into future planning, based on: $ARGUMENTS

`$ARGUMENTS` is a trip id (e.g. `pycon-us-2026`), several ids, or `all`. If no
argument is given, analyze every export present in `expense-data/`.

This command assumes the `mariatta-travels` monorepo at the current working
directory. It reads **private** expense data and **never commits it**.

## Inputs

- **Actuals**: the Sync export JSON for each trip, in `expense-data/<trip-id>.json`
  (gitignored). If it's missing, ask the user to export it from the site's Sync
  page and save it there. The export shape is:
  ```json
  { "version": 2, "exportedAt": "…", "trips": { "<id>": { "expenses": [
    { "id", "description", "amount", "currency", "category", "itemId", "itemLabel", "city", "date" } ], "checklist": {} } } }
  ```
  Each expense carries its own `currency` ("USD" or "CAD"); `category` maps to the
  trip's `budget.ts` category ids.
- **Estimates**: the trip's `src/trips/<trip-id>/budget.ts` — sum each
  `BudgetCategory`'s items (each has `estimated` + `currency`).
- **Trip metadata**: `src/trips/<trip-id>/config.ts` for `type` (conference vs
  family), `startDate`/`endDate` (→ nights), and traveler count (infer from item
  labels like "family of 4" / "1 passenger" / "solo").

## Normalization

- Convert everything to **CAD**. Use USD→CAD ≈ **1.37** unless the user gives a
  rate. State the rate used; note that totals scale with it (intra-trip % variances
  on single-currency categories are rate-robust).

## Produce

1. **Estimate vs actual**, per category and total: estimated, actual, Δ, Δ%.
   Flag categories with **\$0 actual** as *not logged* vs genuinely unspent — a
   trip with many zero-actual categories is under-logged; say so and don't call it
   "under budget".
2. **Normalized unit costs**: lodging /night, food /day and /person/day, flights
   by haul. Segment by trip type (conference vs family) and solo vs group.
3. **Data-quality notes**: currency mix, blank `itemId`s, sparse logging,
   one-off anomalies (e.g. unplanned medical) that distort a category.
4. **Planning takeaways**: which categories are systematically over/under, and
   the concrete unit costs to reuse.

A small Python script over the JSON is the easiest way to aggregate accurately —
read the `budget.ts` estimates yourself (don't try to parse TS in the script;
pass the summed estimates in).

## Then update memory

- Refine `project_budget_calibration` memory with any shifted factors (include the
  new sample). Keep it directional and note `n`.
- If the workflow itself changed, update `project_expense_analysis_workflow`.

## Important

- **Never commit raw expense data or per-expense figures.** Only distilled,
  rounded, user-approved numbers may become public (e.g. the year-end blog post).
- Conference meal policy matters for food sizing: some conferences provide lunch
  (PyCon), lowering food/day; others don't (SeaGL, PyBeach) — full self-paid.
  Check before reusing a food/day figure.
- Do not edit trip data as a side effect. If recalibrating a specific upcoming
  trip's `budget.ts`, do it only when asked, and report the diff.