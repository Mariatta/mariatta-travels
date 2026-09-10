/**
 * Default mapping rules — used when a trip has no rules module of its own.
 *
 * These only know about generic merchant patterns and the budget category ids
 * that nearly every trip shares. They can't guess a trip's line-item ids, so
 * most rows land in a category with an empty itemId: good enough to import and
 * finish by hand, but copy this file to <trip-id>.mjs and add itemIds for a
 * clean estimate-vs-actual analysis.
 *
 * A rule is { when, category, itemId?, as?, review? }; first match wins.
 *   when.merchant / .category / .city   string (exact, case-insensitive),
 *                                       RegExp, or an array of either
 *   when.date / .from / .to             ISO dates
 *   when.min / .max                     amount bounds
 *   as                                  description override (string or fn)
 *   review: true | 'why'                list the row in the run summary
 */

/** CSV city value → the city name used in the trip's config. */
export const cityNames = {};

export const rules = [
  { when: { merchant: /airbnb|hotel|expedia|booking\.com|marriott|hilton|hyatt|ibis|novotel/i }, category: 'accommodation' },
  { when: { merchant: /air canada|westjet|united|delta|lufthansa|tap portugal|klm|british airways/i }, category: 'flights' },
  { when: { merchant: /uber\s*\*?\s*eats|doordash|skip ?the ?dishes|just ?eat|glovo|bolt food/i }, category: 'food' },
  { when: { merchant: /uber|lyft|bolt|taxi|cabify|freenow/i }, category: 'local-transport' },
  { when: { category: /metro|transit|bus|tram|subway|rideshare|taxi/i }, category: 'local-transport' },
  { when: { category: /grocery|groceries|supermarket|breakfast|lunch|dinner|restaurant|food|cafe|coffee/i }, category: 'food' },
  { when: { category: /ice ?cream|gelato|snack|nata|pastry|dessert|boba|bubble tea/i }, category: 'misc' },
  { when: { category: /train|rail|coach|ferry/i }, category: 'trains' },
  { when: { category: /museum|tour|ticket|entry|attraction|park|castle|palace|show|escape room/i }, category: 'activities' },
  { when: { category: /souvenir|shopping|gift|merch|tshirt|t-shirt|clothes/i }, category: 'shopping' },
  { when: { category: /sim|esim|roaming|data/i }, category: 'connectivity' },
  { when: { category: /pharmacy|medical|fee|laundry/i }, category: 'misc' },
];

/** Anything no rule claimed. Flagged for review so nothing lands silently. */
export const fallback = () => ({ category: 'misc', review: 'unrecognised — no rule matched' });
