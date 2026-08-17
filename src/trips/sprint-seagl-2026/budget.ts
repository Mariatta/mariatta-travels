import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-yvr-sfo', label: 'YVR → SFO one-way (Sun Oct 18)', estimated: 400, currency: 'CAD', note: 'Direct ~2.5h. One-way, since the trip continues north — one-ways run higher than half a round-trip' },
      { id: 'flights-sfo-sea', label: 'SFO → SEA one-way (Thu Oct 22)', estimated: 220, currency: 'USD', note: '~2h15m. Take a morning departure to land with the afternoon free' },
      { id: 'flights-home', label: 'Return flight home', estimated: 0, currency: 'CAD', note: 'None — driving back from Seattle on Sun Oct 25 with a pickup' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-sf', label: 'San Francisco hotel (4 nights, Oct 18–22)', estimated: 960, currency: 'USD', note: 'Solo room ~$240/night — Mission/SoMa near OpenAI' },
      { id: 'hotel-sea', label: 'Seattle hotel (3 nights, Oct 22–25)', estimated: 660, currency: 'USD', note: 'Solo room ~$220/night — U District near the SeaGL venue' },
    ],
  },
  {
    id: 'conference',
    title: 'Conferences',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'conf-sprint', label: 'Python Core Dev Sprint', estimated: 0, currency: 'USD', note: 'No registration fee — invite-based, hosted at OpenAI' },
      { id: 'conf-seagl', label: 'SeaGL 2026 registration', estimated: 0, currency: 'USD', note: 'Free to attend — consider a donation to support the conference' },
      { id: 'conf-social', label: 'Conference socials & sprint dinner', estimated: 60, currency: 'USD', note: 'Sprint dinner plus a SeaGL social over two events' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-sf-dinner', label: 'San Francisco dinners (4 evenings)', estimated: 160, currency: 'USD', note: '~$40/evening solo, tip included — La Taqueria, Burma Superstar, Zazie' },
      { id: 'food-sf-lunch', label: 'San Francisco lunches & breakfasts', estimated: 90, currency: 'USD', note: 'Tip included. Sprint provides lunch Mon–Wed — Sunday and Thursday are on you, plus Tartine mornings' },
      { id: 'food-sea-dinner', label: 'Seattle dinners (Thu, Fri, Sat)', estimated: 115, currency: 'USD', note: '~$38/evening, tip included — Kizuki ramen, SeaGL social, Din Tai Fung' },
      { id: 'food-sea-lunch', label: 'Seattle brunches & lunches', estimated: 80, currency: 'USD', note: 'Tip included. Portage Bay brunch, birria tacos, pho — SeaGL does not provide meals' },
      { id: 'food-coffee', label: 'Coffee & snacks (both cities)', estimated: 60, currency: 'USD', note: 'Eight days of pre-session caffeine' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-bart', label: 'BART: SFO → city and back out to SFO', estimated: 25, currency: 'USD', note: '~$10–12 each way' },
      { id: 'transport-muni', label: 'SF Muni & BART during the sprint', estimated: 40, currency: 'USD', note: 'Clipper card or Apple Pay' },
      { id: 'transport-sf-rideshare', label: 'SF rideshare (evenings, running late)', estimated: 50, currency: 'USD', note: 'Short rides $8–15, tip included' },
      { id: 'transport-sea-link', label: 'Link light rail: SEA airport → U District', estimated: 10, currency: 'USD', note: 'One-seat ride, ~45 min — no rideshare needed' },
      { id: 'transport-sea-local', label: 'Seattle Link & rideshare (campus, Capitol Hill, U Village)', estimated: 50, currency: 'USD', note: 'Tap with ORCA or a contactless card' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Sightseeing',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-ice-cream', label: 'Ice cream selfie scoops (both cities)', estimated: 30, currency: 'USD', note: "Bi-Rite in SF, Molly Moon's in Seattle — conference tradition!" },
      { id: 'act-sightseeing', label: 'General sightseeing', estimated: 40, currency: 'USD', note: 'Most sights in both cities are free or low-cost' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-roaming', label: 'US roaming or eSIM (8 days)', estimated: 60, currency: 'CAD', note: 'Carrier day-passes run $8–12/day — an eSIM is cheaper over eight days' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-ride-home', label: 'Gas & thank-you for the drive home', estimated: 80, currency: 'CAD', note: 'Seattle → Vancouver round-trip fuel for whoever picks you up' },
      { id: 'misc-treats', label: 'Snacks & souvenirs', estimated: 50, currency: 'USD', note: 'Sourdough from SF, treats to bring home' },
      { id: 'misc-buffer', label: 'Unexpected expenses buffer', estimated: 150, currency: 'USD', note: 'Eight days, two cities, one-way flights that tend to come in over estimate' },
    ],
  },
];
