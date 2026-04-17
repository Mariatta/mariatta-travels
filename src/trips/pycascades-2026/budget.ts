import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'registration',
    title: 'Conference',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'pycascades-reg', label: 'PyCascades 2026 registration', estimated: 0, currency: 'CAD', note: 'Speaker — complimentary' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'skytrain', label: 'SkyTrain / transit day pass', estimated: 12, currency: 'CAD', note: 'Commute downtown and back' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-lunch', label: 'Lunch + coffee', estimated: 30, currency: 'CAD', note: 'Conference lunch provided; snacks around downtown' },
    ],
  },
];
