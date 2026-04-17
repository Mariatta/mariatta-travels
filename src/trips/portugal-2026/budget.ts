import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-outbound', label: 'YVR to OPO (4 passengers)', estimated: 8000, currency: 'CAD', note: 'Round-trip economy — book early' },
      { id: 'flights-return', label: 'OPO to YVR (4 passengers)', estimated: 0, currency: 'CAD', note: 'Included in round-trip above' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-porto', label: 'Porto hotel (5 nights, Aug 22–27)', estimated: 1150, currency: 'CAD', note: 'Family room or 2 doubles' },
      { id: 'hotel-lisbon', label: 'Lisbon hotel (5 nights, Aug 27 – Sep 1)', estimated: 1750, currency: 'CAD', note: 'Family room or 2 doubles — peak summer' },
      { id: 'hotel-aveiro', label: 'Aveiro hotel (4 nights, Sep 1–5)', estimated: 765, currency: 'CAD', note: 'Family room or 2 doubles' },
    ],
  },
  {
    id: 'pycon',
    title: 'PyCon Portugal',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'pycon-tickets', label: 'PyCon Portugal tickets', estimated: 200, currency: 'EUR', note: 'Sep 3–4, Aveiro' },
    ],
  },
  {
    id: 'trains',
    title: 'Inter-city Transport',
    emoji: '🚆',
    type: 'pre-trip',
    items: [
      { id: 'train-porto-lisbon', label: 'Alfa Pendular: Porto to Lisbon (4 pax)', estimated: 120, currency: 'EUR', note: 'Aug 27' },
      { id: 'train-lisbon-aveiro', label: 'IC train: Lisbon to Aveiro (4 pax)', estimated: 80, currency: 'EUR', note: 'Sep 1' },
      { id: 'train-aveiro-porto', label: 'Train: Aveiro to Porto (4 pax)', estimated: 40, currency: 'EUR', note: 'Sep 5, for return flight' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-porto', label: 'Porto dining (5 days)', estimated: 500, currency: 'EUR', note: '~€100/day for family of 4' },
      { id: 'food-lisbon', label: 'Lisbon dining (5 days)', estimated: 550, currency: 'EUR', note: '~€110/day — slightly pricier' },
      { id: 'food-aveiro', label: 'Aveiro dining (4 days)', estimated: 400, currency: 'EUR', note: '~€100/day for family of 4' },
      { id: 'food-special', label: 'Special dinners (Salpoente, DAMA)', estimated: 300, currency: 'EUR', note: 'Anniversary + splurge meals for family' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-porto', label: 'Porto metro, buses, taxis (5 days)', estimated: 100, currency: 'EUR', note: 'Andante card + occasional Bolt' },
      { id: 'transport-lisbon', label: 'Lisbon metro, trams, taxis (5 days)', estimated: 120, currency: 'EUR', note: 'Viva Viagem card + Tram 28 + Bolt' },
      { id: 'transport-aveiro', label: 'Aveiro buses, taxis (4 days)', estimated: 60, currency: 'EUR', note: 'Compact city, mostly walkable' },
      { id: 'transport-airport', label: 'Airport transfers (arrival + departure)', estimated: 50, currency: 'EUR', note: 'Metro or Bolt to/from OPO' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Attractions',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-wine-tour', label: 'Port wine cellar tour (Vila Nova de Gaia)', estimated: 60, currency: 'EUR' },
      { id: 'act-douro-cruise', label: 'Douro River cruise', estimated: 60, currency: 'EUR', note: 'Family of 4' },
      { id: 'act-oceanario', label: 'Oceanário de Lisboa tickets', estimated: 90, currency: 'EUR', note: 'Family of 4 — ~€25 adult, ~€17 child' },
      { id: 'act-castelo', label: 'Castelo de São Jorge tickets', estimated: 40, currency: 'EUR' },
      { id: 'act-sintra', label: 'Sintra day trip (Pena Palace, transport)', estimated: 150, currency: 'EUR', note: 'Train + palace entries + lunch' },
      { id: 'act-moliceiro', label: 'Moliceiro boat ride (Aveiro)', estimated: 50, currency: 'EUR', note: 'Family of 4' },
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
      { id: 'shop-other', label: 'Other shopping', estimated: 70, currency: 'EUR' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-esim', label: 'eSIM or local SIM card (data plan)', estimated: 30, currency: 'CAD', note: '14 days of data' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 50, currency: 'EUR' },
      { id: 'misc-snacks', label: 'Snacks, drinks, coffee', estimated: 100, currency: 'EUR' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 150, currency: 'EUR' },
    ],
  },
];