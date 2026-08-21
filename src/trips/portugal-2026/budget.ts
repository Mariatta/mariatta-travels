import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-outbound', label: 'YVR ↔ OPO round trip (4 passengers)', estimated: 8000, currency: 'CAD', note: 'Round-trip economy — book early; one connection' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-porto', label: 'Porto hotel (5 nights, Aug 23–28)', estimated: 1150, currency: 'CAD', note: 'Arranged ✓' },
      { id: 'hotel-lisbon', label: 'Lisbon hotel (5 nights, Aug 28 – Sep 2)', estimated: 1750, currency: 'CAD', note: 'Re-book — added Sep 1 night (~$350/night, peak summer)' },
      { id: 'hotel-aveiro', label: 'Aveiro hotel (3 nights, Sep 2–5)', estimated: 575, currency: 'CAD', note: 'Re-book — dropped one night (~$191/night)' },
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
      { id: 'train-porto-lisbon', label: 'Alfa Pendular: Porto → Lisbon (4 pax)', estimated: 120, currency: 'EUR', note: 'Aug 28 morning, pre-9 AM' },
      { id: 'train-lisbon-aveiro', label: 'Alfa Pendular: Lisbon → Aveiro (4 pax)', estimated: 80, currency: 'EUR', note: 'Sep 2 morning' },
      { id: 'van-aveiro-opo', label: 'Private van: Aveiro → Porto Airport (4 pax + bags)', estimated: 180, currency: 'EUR', note: 'Sep 5, 8:30 AM pickup → 9:45 AM at OPO for 12 PM flight (flat per-vehicle rate)' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-porto', label: 'Porto dining (5 days)', estimated: 500, currency: 'EUR', note: '~€100/day for family of 4' },
      { id: 'food-lisbon', label: 'Lisbon dining (5 days)', estimated: 560, currency: 'EUR', note: '~€112/day — slightly pricier' },
      { id: 'food-aveiro', label: 'Aveiro dining (3 days)', estimated: 300, currency: 'EUR', note: '~€100/day for family of 4' },
      { id: 'food-anniversary', label: 'Anniversary dinner: Salpoente (2 pax)', estimated: 220, currency: 'EUR', note: 'Tasting menu ~€70 pp + wine' },
      { id: 'food-anniversary-family', label: 'Tasquinha do Lagar dinner for the rest (2 pax, Sep 3)', estimated: 60, currency: 'EUR' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-porto', label: 'Porto metro, buses, taxis (5 days)', estimated: 100, currency: 'EUR', note: 'Andante card + Matosinhos metro + occasional Bolt' },
      { id: 'transport-lisbon', label: 'Lisbon metro, trams, taxis (5 days)', estimated: 100, currency: 'EUR', note: 'Viva Viagem card + Tram 28 + Bolt (Cascais train budgeted under Activities)' },
      { id: 'transport-aveiro', label: 'Aveiro buses, taxis, Costa Nova trips (3 days)', estimated: 50, currency: 'EUR', note: 'Mostly walkable; Bolt to DETI and Costa Nova' },
      { id: 'transport-airport', label: 'Porto airport → hotel on arrival', estimated: 30, currency: 'EUR', note: 'Metro or Bolt to/from OPO (return is via private van — see above)' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Attractions',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-douro', label: 'Douro Valley day trip (Aug 25)', estimated: 600, currency: 'EUR', note: 'Private guided tour ~€150 pp × 4 (or ~€60 pp train+boat × 4 = €240)' },
      { id: 'act-wine-tour', label: 'Port wine cellar tour, Vila Nova de Gaia', estimated: 65, currency: 'EUR' },
      { id: 'act-livraria-lello', label: 'Livraria Lello timed entry', estimated: 48, currency: 'EUR', note: '€12 pp × 4 — refunded against book purchase' },
      { id: 'act-geres', label: 'Peneda-Gerês day trip (Aug 26) — 1-day car rental + fuel + tolls + lunch', estimated: 240, currency: 'EUR', note: '1-day rental ~€70 + fuel ~€35 + A3/A11 tolls ~€25 + Mata da Albergaria gate fee + lunch in Vila do Gerês' },
      { id: 'act-sintra', label: 'Sintra day trip (Aug 31 Mon) — Pena Palace + Quinta da Regaleira + driver', estimated: 400, currency: 'EUR', note: 'Palace entries (~€48 + €32) + private driver ~€200 + lunch' },
      { id: 'act-cascais', label: 'Cascais coast day (Sep 1) — coastal train + cliffside lunch', estimated: 160, currency: 'EUR', note: 'Cais do Sodré train ~€2.30 pp each way × 4 + Mar do Inferno lunch; optional Cabo da Roca taxi' },
      { id: 'act-fado', label: 'Fado night in Alfama (Aug 30 evening)', estimated: 80, currency: 'EUR', note: 'Tasca do Chico or Mesa de Frades' },
      { id: 'act-lisbon-morning', label: 'Estrela + Arte Antiga + Pilar 7 morning (Aug 30 Sun)', estimated: 45, currency: 'EUR', note: 'Museu Nacional de Arte Antiga ~€6 pp + Pilar 7 Bridge Experience ~€5 pp; basílica dome and Jardim da Estrela are free/near-free' },
      { id: 'act-charter', label: 'Fishing charter on the Tagus (Aug 30 Sun afternoon) — half-day private boat', estimated: 550, currency: 'EUR', note: 'Private ~4 hr charter for 4 incl. skipper, rods, bait, tackle & licence; shared/group trips run ~€90 pp instead' },
      { id: 'act-castelo', label: 'Castelo de São Jorge tickets (Aug 29 Sat)', estimated: 48, currency: 'EUR' },
      { id: 'act-matosinhos', label: 'Matosinhos beach day — lunch on the grilling streets (Aug 27)', estimated: 120, currency: 'EUR', note: 'Charcoal-grilled fish/octopus for the family of 4' },
      { id: 'act-coimbra', label: 'Coimbra day trip (Sep 3, family while Mariatta at PyCon)', estimated: 75, currency: 'EUR', note: 'Train ~€5 pp × 3 + Joanina Library + lunch' },
      { id: 'act-moliceiro', label: 'Moliceiro boat ride (Aveiro)', estimated: 40, currency: 'EUR', note: '€13 adult × 2 + €6 kids × 2' },
      { id: 'act-misc', label: 'Other museums and attractions', estimated: 100, currency: 'EUR' },
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
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 55, currency: 'EUR' },
      { id: 'misc-snacks', label: 'Snacks, drinks, coffee', estimated: 100, currency: 'EUR' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 200, currency: 'EUR' },
    ],
  },
];