import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '3', label: 'Nights' },
  { num: '2', label: 'Cities' },
  { num: '2', label: 'Conferences' },
  { num: 'Oct', label: 'Fall sprint' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'The US uses the US Dollar ($). Cards are accepted virtually everywhere in both Seattle and Santa Monica. Bring $50–100 cash for the rare cash-friendly taco stand and for tips.' },
      { icon: '💳', title: 'Cards & tipping', body: 'Tipping is expected in the US: 18–20% at sit-down restaurants, $1–2 for coffee or taco counters, 15–20% for rideshares. Your Canadian Visa/Mastercard and Apple Pay work fine everywhere.' },
      { icon: '📊', title: 'Budget estimate', body: 'A two-conference weekend across Seattle and Santa Monica runs roughly $350–500 CAD/day with three flights and two hotels. SeaGL is free; walking everywhere in both cities keeps costs down.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌧️', title: 'Seattle in late October', body: 'Cool and likely damp — typically 8–14°C with a good chance of rain. Pack a warm layer and a packable rain shell for the SeaGL day on the UW campus.' },
      { icon: '🏖️', title: 'Santa Monica in late October', body: 'Warm and sunny — around 20–24°C by day, cooler by the water at night. Bring a swimsuit, sunglasses, and sunscreen; the UV is strong even in fall.' },
      { icon: '🧳', title: 'Two climates, one carry-on', body: 'You jump from rainy Pacific NW to sunny SoCal in a day. Pack versatile layers and keep it to a carry-on — the multi-leg routing leaves no time to wait on checked bags.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'The routing', body: 'YVR → SEA (Thu) is a short ~1h hop (or drive / Amtrak Cascades ~4h). SEA → LAX (Fri evening, ~2h45m) after SeaGL. LAX → YVR (Sun, ~2h50m) home. Leave a comfortable buffer after your SeaGL talk before the flight south.' },
      { icon: '🚆', title: 'Transit', body: 'Seattle: Link light rail reaches the U District and SEA airport; tap with ORCA or a card. LA: the Metro reaches Santa Monica, but rideshare is simplest for the LAX transfer and the Venice taco run.' },
      { icon: '🚶', title: 'Walk everywhere', body: 'Both bases are walkable. In Seattle the HUB, The Ave, and U District hotels are all close together. In Santa Monica the venue, Promenade, pier, and restaurants are within a few blocks.' },
      { icon: '🚕', title: 'Rideshare', body: 'Uber and Lyft are everywhere in both cities. LAX uses the LAX-it lot for pickups — allow extra time. Short in-town rides are $10–20.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🐧', title: 'SeaGL logistics', body: 'SeaGL is a free, community-run free-software conference at the UW Husky Union Building, held Oct 23–24 (moved from November due to a venue conflict). CFP submitted — if the talk is accepted, confirm your room, time slot, and AV ahead of time.' },
      { icon: '🐍', title: 'PyBeach logistics', body: 'PyBeach is a single-day, volunteer-run Python conference at the intimate Illusion Magic Lounge. Buy your ticket early (seating is limited) and lean into the small, friendly hallway track.' },
      { icon: '🌮', title: 'Tacos & birria', body: "You're in taco country in both cities. In Seattle hit Carmelo's on The Ave for birria/quesabirria; in LA, Teddy's Red Tacos (Venice) is the birria icon — dip the quesatacos in the consomé." },
      { icon: '🍦', title: 'Ice cream selfies', body: "Keep the tradition going at both stops: Molly Moon's on The Ave near the HUB, then McConnell's on the Third Street Promenade by the PyBeach venue." },
    ],
  },
];
