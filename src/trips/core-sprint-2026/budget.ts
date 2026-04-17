import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-roundtrip', label: 'YVR to SFO round-trip (1 passenger)', estimated: 800, currency: 'CAD', note: 'Direct flights ~2.5 hrs — book early for best rates' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-sf', label: 'San Francisco hotel (5 nights, Oct 18–23)', estimated: 1200, currency: 'USD', note: 'Solo room — Mission/SoMa area near OpenAI' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-dinner', label: 'Dinners (6 evenings)', estimated: 240, currency: 'USD', note: '~$40/evening solo — restaurants and takeout' },
      { id: 'food-coffee', label: 'Coffee and snacks', estimated: 50, currency: 'USD', note: 'SF has excellent coffee shops' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-bart-sfo', label: 'BART airport transfers (round-trip)', estimated: 20, currency: 'USD', note: 'SFO to city centre ~$10 each way' },
      { id: 'transport-muni', label: 'Muni transit passes', estimated: 30, currency: 'USD', note: 'Buses, metro, cable cars' },
      { id: 'transport-rideshare', label: 'Uber/Lyft rides', estimated: 50, currency: 'USD', note: 'For evening trips or when running late' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Sightseeing',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-ice-cream', label: 'Ice cream selfie supplies', estimated: 15, currency: 'USD', note: 'Bi-Rite Creamery — conference tradition!' },
      { id: 'act-sightseeing', label: 'General sightseeing', estimated: 30, currency: 'USD', note: 'Most SF attractions are free or low-cost' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-roaming', label: 'US roaming or eSIM (6 days)', estimated: 25, currency: 'CAD', note: 'Check Canadian carrier US day-pass options' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 60, currency: 'USD', note: 'US tipping: 18–20% at restaurants' },
      { id: 'misc-snacks', label: 'Snacks, drinks, treats', estimated: 40, currency: 'USD', note: 'Sourdough bread to bring home?' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 75, currency: 'USD', note: 'Just in case' },
    ],
  },
];