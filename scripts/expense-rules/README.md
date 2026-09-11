# expense-rules/

Mapping rules for `scripts/csv-to-expenses.mjs`. One module per trip, named
`<trip-id>.mjs`; `default.mjs` is used for any trip that doesn't have its own.

A card statement names the merchant, never the reason, so these rules are where
"O VALENTIM, 233.32, Aug 27" becomes the Matosinhos beach-day line item rather
than another Porto dinner. The engine handles CSV parsing, dates, ids, and
validation against the trip's `budget.ts`; only the judgment lives here.

## Writing rules

```js
export const rules = [
  { when: { merchant: /avis|rent-?a-?car/i }, category: 'activities', itemId: 'act-geres', as: 'Avis 1-day rental' },
];
```

Rules are tried top to bottom and the **first match wins**, so put specific
rules (a single day trip, one merchant) above the per-city catch-alls.

| Field | Meaning |
| --- | --- |
| `when.merchant` | matched against the CSV description/detail column |
| `when.category` | matched against the CSV category column |
| `when.city` | matched against the CSV city column |
| `when.date` | ISO date, exact string or RegExp |
| `when.from` / `when.to` | inclusive ISO date bounds |
| `when.min` / `when.max` | amount bounds |
| `category` | a category id from the trip's `budget.ts` (**required**) |
| `itemId` | a line-item id from that category; omit to leave it unassigned |
| `as` | description override, a string or `row => string` |
| `review` | `true` or a note: lists the row in the run summary |

`when.merchant`, `.category`, `.city` and `.date` each accept a plain string
(exact, case-insensitive), a RegExp, or an array of either. An omitted `when`
key matches anything, and an omitted `when` matches every row.

Two extras a module can export:

- `cityNames` — CSV city value → the city name in the trip's config, so day
  trips fold into their base (`sintra: 'Lisbon'`). The `city` field has to match
  a `trip.cities[].name` for the Log page's city filter to work.
- `fallback(row)` — the rule for rows nothing matched. Return a rule object;
  give it `review` so nothing lands somewhere silently.

## Keeping the analysis honest

`category` and `itemId` are validated against the trip's real `budget.ts`, and
a rule pointing at an id that doesn't exist skips the row and fails the run
rather than inventing a bucket. Anything flagged `review` prints after each run:
that list is the set of calls worth a second opinion before the numbers feed
`/analyze-trip`.

Per `../../CLAUDE.md`, tips are never a separate line: a rideshare tip belongs
on the same item as the ride it tipped.
