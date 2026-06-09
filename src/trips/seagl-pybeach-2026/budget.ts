import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-yvr-sea', label: 'YVR → SEA (Thu Oct 22)', estimated: 180, currency: 'CAD', note: 'Short ~1h hop — or drive / Amtrak Cascades instead' },
      { id: 'flights-sea-lax', label: 'SEA → LAX (Fri Oct 23, evening)', estimated: 200, currency: 'USD', note: '~2h45m after SeaGL' },
      { id: 'flights-lax-yvr', label: 'LAX → YVR (Sun Oct 25)', estimated: 320, currency: 'CAD', note: 'Direct ~2h50m home — one-ways run higher than round-trips' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-sea', label: 'Seattle hotel (1 night, Oct 22)', estimated: 220, currency: 'USD', note: 'Solo room — U District near the SeaGL venue' },
      { id: 'hotel-sm', label: 'Santa Monica hotel (2 nights, Oct 23–25)', estimated: 500, currency: 'USD', note: 'Solo room — downtown SM, walkable to PyBeach' },
    ],
  },
  {
    id: 'conference',
    title: 'Conferences',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'conf-seagl', label: 'SeaGL 2026 registration', estimated: 0, currency: 'USD', note: 'Free to attend — consider a donation to support the conference' },
      { id: 'conf-pybeach', label: 'PyBeach 2026 ticket (early bird)', estimated: 75, currency: 'USD', note: 'Community conference — ti.to/pybeach; lock in early-bird pricing' },
      { id: 'conf-social', label: 'Conference socials or after-parties', estimated: 30, currency: 'USD', note: 'In case of a paid dinner or social at either event' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-sea', label: 'Seattle meals (Thu dinner + Fri brunch/lunch)', estimated: 70, currency: 'USD', note: 'Ramen, Portage Bay brunch, birria tacos — SeaGL does not provide meals' },
      { id: 'food-sm-dinner', label: 'Santa Monica dinners (2 evenings)', estimated: 75, currency: 'USD', note: '~$35/evening solo — Cassia, tacos' },
      { id: 'food-sm-lunch', label: 'Santa Monica lunches & PyBeach day', estimated: 45, currency: 'USD', note: 'Ramen, Tacos Por Favor — PyBeach does not provide lunch (unlike PyCon)' },
      { id: 'food-coffee', label: 'Coffee & snacks (both cities)', estimated: 40, currency: 'USD', note: 'Pre-talk caffeine' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-sea', label: 'Seattle: SEA airport + campus rides / Link', estimated: 60, currency: 'USD', note: 'Light rail or rideshare around the U District + to SEA' },
      { id: 'transport-lax', label: 'LAX ↔ Santa Monica transfers', estimated: 90, currency: 'USD', note: 'Rideshare ~$35–50 each way, or Metro for far less' },
      { id: 'transport-sm-local', label: 'Santa Monica local rideshare / Big Blue Bus', estimated: 40, currency: 'USD', note: 'Venice taco run + getting around' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Sightseeing',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-ice-cream', label: 'Ice cream selfie scoops (both cities)', estimated: 25, currency: 'USD', note: "Molly Moon's in Seattle + McConnell's in SM — conference tradition!" },
      { id: 'act-misc', label: 'Pier / beach / campus walk extras', estimated: 25, currency: 'USD', note: 'Santa Monica Pier rides optional' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-roaming', label: 'US roaming or eSIM (4 days)', estimated: 20, currency: 'CAD', note: 'Check Canadian carrier US day-pass options' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips & gratuities', estimated: 50, currency: 'USD', note: 'US tipping: 18–20% at restaurants' },
      { id: 'misc-treats', label: 'Snacks & souvenirs', estimated: 30, currency: 'USD', note: 'Treats to bring home' },
      { id: 'misc-buffer', label: 'Unexpected expenses buffer', estimated: 75, currency: 'USD', note: 'Two cities, tight connections — keep a cushion' },
    ],
  },
];
