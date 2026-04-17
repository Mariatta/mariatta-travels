import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'transport',
    title: 'Transport',
    emoji: '🚗',
    type: 'pre-trip',
    items: [
      { id: 'transport-ev', label: 'EV charging Vancouver to Bellingham roundtrip', estimated: 20, currency: 'CAD', note: '~150 km each way, ~$0.07/km' },
      { id: 'transport-parking', label: 'Hotel parking (2 nights)', estimated: 40, currency: 'USD', note: 'Approx $20/night' },
      { id: 'transport-nexus', label: 'NEXUS renewal (if needed)', estimated: 0, currency: 'CAD', note: 'Already have NEXUS — $0 if current' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-bellingham', label: 'Bellingham hotel (2 nights, Apr 24–26)', estimated: 400, currency: 'CAD', note: 'Family room or 2 doubles' },
    ],
  },
  {
    id: 'lfnw',
    title: 'LFNW Conference',
    emoji: '🐧',
    type: 'pre-trip',
    items: [
      { id: 'lfnw-registration', label: 'LFNW registration / donations', estimated: 100, currency: 'USD', note: 'Free event but donations welcome' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-dining', label: 'Dining out (3 days, family of 4)', estimated: 240, currency: 'USD', note: '~$80/day for family of 4' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Attractions',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-misc', label: 'Attractions, parks, misc activities', estimated: 100, currency: 'USD', note: 'Most Bellingham attractions are free or low-cost' },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & Souvenirs',
    emoji: '🛍️',
    type: 'during-trip',
    items: [
      { id: 'shop-souvenirs', label: 'Souvenirs and shopping', estimated: 50, currency: 'USD' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 40, currency: 'USD' },
      { id: 'misc-snacks', label: 'Snacks, coffee, drinks', estimated: 30, currency: 'USD' },
      { id: 'misc-unexpected', label: 'Unexpected expenses buffer', estimated: 30, currency: 'USD' },
    ],
  },
];
