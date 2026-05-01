import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-outbound', label: 'YVR ↔ OPO round trip (5 passengers)', estimated: 10000, currency: 'CAD', note: 'Round-trip economy — book early; one connection' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-porto', label: 'Porto hotel (5 nights, Aug 23–28)', estimated: 1150, currency: 'CAD', note: 'Arranged ✓' },
      { id: 'hotel-lisbon', label: 'Lisbon hotel (4 nights, Aug 28 – Sep 1)', estimated: 1400, currency: 'CAD', note: 'Arranged ✓ — peak summer' },
      { id: 'hotel-aveiro', label: 'Aveiro hotel (4 nights, Sep 1–5)', estimated: 765, currency: 'CAD', note: 'Arranged ✓' },
    ],
  },
  {
    id: 'pycon',
    title: 'PyCon Portugal',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'pycon-tickets', label: 'PyCon Portugal tickets', estimated: 200, currency: 'EUR', note: 'Sep 3–4, DETI Aveiro' },
    ],
  },
  {
    id: 'trains',
    title: 'Inter-city Transport',
    emoji: '🚆',
    type: 'pre-trip',
    items: [
      { id: 'train-porto-lisbon', label: 'Alfa Pendular: Porto → Lisbon (5 pax)', estimated: 150, currency: 'EUR', note: 'Aug 28 morning, pre-9 AM' },
      { id: 'train-lisbon-aveiro', label: 'Alfa Pendular: Lisbon → Aveiro (5 pax)', estimated: 100, currency: 'EUR', note: 'Sep 1 morning' },
      { id: 'van-aveiro-opo', label: 'Private van: Aveiro → Porto Airport (5 pax + bags)', estimated: 180, currency: 'EUR', note: 'Sep 5, 8:30 AM pickup → 9:45 AM at OPO for 12 PM flight' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-porto', label: 'Porto dining (5 days)', estimated: 625, currency: 'EUR', note: '~€125/day for family of 5' },
      { id: 'food-lisbon', label: 'Lisbon dining (4 days)', estimated: 560, currency: 'EUR', note: '~€140/day — slightly pricier' },
      { id: 'food-aveiro', label: 'Aveiro dining (4 days)', estimated: 500, currency: 'EUR', note: '~€125/day for family of 5' },
      { id: 'food-anniversary', label: 'Anniversary dinner: Salpoente (2 pax)', estimated: 220, currency: 'EUR', note: 'Tasting menu ~€70 pp + wine' },
      { id: 'food-anniversary-family', label: 'Tasquinha do Lagar dinner for the rest (3 pax, Sep 3)', estimated: 90, currency: 'EUR' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-porto', label: 'Porto metro, buses, taxis (5 days)', estimated: 125, currency: 'EUR', note: 'Andante card + Matosinhos metro + occasional Bolt' },
      { id: 'transport-lisbon', label: 'Lisbon metro, trams, taxis (4 days)', estimated: 110, currency: 'EUR', note: 'Viva Viagem card + Tram 28 + Bolt' },
      { id: 'transport-aveiro', label: 'Aveiro buses, taxis, Costa Nova trips (4 days)', estimated: 80, currency: 'EUR', note: 'Mostly walkable; Bolt to DETI and Costa Nova' },
      { id: 'transport-airport', label: 'Porto airport → hotel on arrival', estimated: 30, currency: 'EUR', note: 'Metro or Bolt to/from OPO (return is via private van — see above)' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Attractions',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-douro', label: 'Douro Valley day trip (Aug 25)', estimated: 750, currency: 'EUR', note: 'Private guided tour ~€150 pp × 5 (or ~€60 pp train+boat × 5 = €300)' },
      { id: 'act-wine-tour', label: 'Port wine cellar tour, Vila Nova de Gaia', estimated: 80, currency: 'EUR' },
      { id: 'act-livraria-lello', label: 'Livraria Lello timed entry', estimated: 60, currency: 'EUR', note: '€12 pp × 5 — refunded against book purchase' },
      { id: 'act-guimaraes', label: 'Guimarães day trip — train + castle/palace + lunch', estimated: 200, currency: 'EUR', note: 'Train ~€8 pp × 5 + combo entry ~€8 pp + lunch in old town' },
      { id: 'act-sintra', label: 'Sintra day trip (Aug 31 Mon) — Pena Palace + Quinta da Regaleira + driver', estimated: 450, currency: 'EUR', note: 'Palace entries (~€60 + €40) + private driver ~€200 + lunch' },
      { id: 'act-fado', label: 'Fado night in Alfama (Aug 30 evening)', estimated: 100, currency: 'EUR', note: 'Tasca do Chico or Mesa de Frades' },
      { id: 'act-jeronimos', label: 'Jerónimos Monastery + Belém Tower (Aug 30 Sun)', estimated: 60, currency: 'EUR' },
      { id: 'act-castelo', label: 'Castelo de São Jorge tickets (Aug 29 Sat)', estimated: 60, currency: 'EUR' },
      { id: 'act-matosinhos', label: 'Matosinhos beach day — lunch on the grilling streets (Aug 27)', estimated: 150, currency: 'EUR', note: 'Charcoal-grilled fish/octopus for the family of 5' },
      { id: 'act-coimbra', label: 'Coimbra day trip (Sep 3, family while Mariatta at PyCon)', estimated: 100, currency: 'EUR', note: 'Train ~€5 pp × 4 + Joanina Library + lunch' },
      { id: 'act-moliceiro', label: 'Moliceiro boat ride (Aveiro)', estimated: 55, currency: 'EUR', note: '€13 adult × 3 + €6 kids × 2' },
      { id: 'act-misc', label: 'Other museums and attractions', estimated: 120, currency: 'EUR' },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & Souvenirs',
    emoji: '🛍️',
    type: 'during-trip',
    items: [
      { id: 'shop-tiles', label: 'Azulejo tiles and ceramics', estimated: 80, currency: 'EUR' },
      { id: 'shop-other', label: 'Other shopping', estimated: 100, currency: 'EUR' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-esim', label: 'eSIM or local SIM card (data plan)', estimated: 30, currency: 'CAD', note: '13 days of data' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 70, currency: 'EUR' },
      { id: 'misc-snacks', label: 'Snacks, drinks, coffee', estimated: 130, currency: 'EUR' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 200, currency: 'EUR' },
    ],
  },
];