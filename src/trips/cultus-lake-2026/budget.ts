import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'campsite',
    title: 'Campsite',
    emoji: '🏕️',
    type: 'pre-trip',
    items: [
      { id: 'campsite-2-nights', label: 'BC Parks campsite (2 nights, Jul 10–12)', estimated: 70, currency: 'CAD', note: '~$35/night for a standard site — book on Discover Camping' },
      { id: 'reservation-fee', label: 'Discover Camping reservation fee', estimated: 6, currency: 'CAD', note: 'One-time booking fee' },
    ],
  },
  {
    id: 'transport',
    title: 'Driving & Charging',
    emoji: '🚗',
    type: 'during-trip',
    items: [
      { id: 'ev-charging', label: 'EV charging (round-trip ~200 km)', estimated: 15, currency: 'CAD', note: 'Charge at home; top up at a BC Hydro DC fast charger if needed' },
      { id: 'parking', label: 'Day-use / beach parking (if not at campsite)', estimated: 10, currency: 'CAD' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Groceries',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'groceries', label: 'Groceries for 3 days (family of 4)', estimated: 150, currency: 'CAD', note: 'Chilliwack grocery run on the way in — Save-On-Foods or Superstore' },
      { id: 'ice-firewood', label: 'Ice + firewood', estimated: 30, currency: 'CAD', note: 'Buy firewood locally; bag ice for the cooler' },
      { id: 'restaurant-meal', label: 'One restaurant meal (Giggles or Bozzini\'s)', estimated: 80, currency: 'CAD', note: 'Break from camp cooking' },
      { id: 'gelato', label: 'Stella Luna gelato', estimated: 25, currency: 'CAD', note: 'Family of 4' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities',
    emoji: '🎢',
    type: 'during-trip',
    items: [
      { id: 'adventure-park', label: 'Cultus Lake Adventure Park wristbands (family of 4)', estimated: 200, currency: 'CAD', note: 'Waterpark + mini-golf + go-karts — buy online for small discount' },
      { id: 'paddle-rental', label: 'Paddleboard / kayak rental (2 hrs)', estimated: 80, currency: 'CAD', note: 'Optional — available at Main Beach rental stand' },
    ],
  },
  {
    id: 'gear',
    title: 'Gear & Supplies',
    emoji: '🎒',
    type: 'pre-trip',
    items: [
      { id: 'bug-spray', label: 'Bug spray + sunscreen top-up', estimated: 25, currency: 'CAD', note: 'Mosquitoes at dusk in July' },
      { id: 'camping-misc', label: 'Camping consumables (propane, matches, batteries)', estimated: 25, currency: 'CAD' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-buffer', label: 'Unexpected expenses buffer', estimated: 40, currency: 'CAD', note: 'Just in case' },
    ],
  },
];
