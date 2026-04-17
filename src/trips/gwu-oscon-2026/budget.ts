import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-roundtrip', label: 'YVR to IAD (Dulles) round-trip', estimated: 900, currency: 'CAD', note: 'Cross-country flight' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-arc', label: 'Arc Hotel Washington DC (3 nights, Mar 22–25)', estimated: 900, currency: 'USD', note: 'Foggy Bottom — walkable to GWU' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-meals', label: 'Meals (4 days)', estimated: 200, currency: 'USD', note: 'Conference meals partially covered' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'airport-transfer', label: 'IAD (Dulles) airport transfers', estimated: 100, currency: 'USD', note: 'Rideshare — Dulles is ~45 min from Foggy Bottom' },
      { id: 'metro', label: 'Metro / rideshare around DC', estimated: 40, currency: 'USD' },
    ],
  },
];
