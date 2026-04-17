import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '5', label: 'Nights' },
  { num: '1', label: 'City' },
  { num: '~2.5h', label: 'YVR → SFO' },
  { num: 'Oct', label: 'Indian summer' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'The US uses the US Dollar ($). Credit and debit cards are accepted virtually everywhere — many places in SF are cashless. Bring a small amount of cash ($50–100) for tips or the rare cash-only spot like La Taqueria.' },
      { icon: '💳', title: 'Cards & tipping', body: 'Tipping is expected in the US: 18–20% at sit-down restaurants, $1–2 for coffee, 15–20% for rideshares. Your Canadian credit card will work fine — Visa and Mastercard are universal. Contactless/Apple Pay widely accepted.' },
      { icon: '📊', title: 'Budget estimate', body: 'A solo work trip to SF runs roughly $350–500 CAD/day covering hotel, meals, transport, and incidentals. Most sprint days will have lunch provided, reducing food costs.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'October weather', body: 'October is actually one of SF\'s warmest months ("Indian summer"). Expect 15–22°C during the day, dropping to 10–13°C at night. The famous fog is less common in October but can roll in suddenly, especially near the coast.' },
      { icon: '👕', title: 'What to pack', body: 'Layers are essential — SF microclimates mean it can be warm in the Mission and cold at the waterfront on the same day. Bring a medium-weight jacket, comfortable walking shoes (hills!), and clothes suitable for sitting at a computer all day.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'Flights', body: 'Direct flights from Vancouver (YVR) to San Francisco (SFO) take about 2.5 hours. Multiple airlines offer this route — Air Canada, WestJet, United, Alaska. SFO is connected to the city via BART ($10, ~30 min to downtown).' },
      { icon: '🚇', title: 'BART & Muni', body: 'BART (Bay Area Rapid Transit) connects SFO to the city and runs through key corridors. Muni runs buses, metro, and the famous cable cars within SF. Use a Clipper card or Apple Pay for both. The 16th St Mission BART station is closest to OpenAI.' },
      { icon: '🚕', title: 'Rideshare', body: 'Uber and Lyft are everywhere in SF. Short rides cost $8–15. The city is also very walkable and bikeable — Bay Wheels (Lyft bikes) are scattered throughout. SF is compact: most things are within a 20-minute drive.' },
      { icon: '🚶', title: 'Walking', body: 'SF is a walking city but the hills are real. The Mission District (where OpenAI is) is relatively flat. Wear comfortable shoes. The walk from the Mission to downtown takes about 30 minutes on flat streets via Market Street.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🐍', title: 'Sprint logistics', body: 'The Python Core Dev Sprint is hosted at OpenAI\'s office. Lunch is typically provided during sprint days. Confirm access arrangements, badge pickup, and daily schedule ahead of time. Bring your laptop fully set up with your dev environment.' },
      { icon: '🍽️', title: 'Dining solo', body: 'SF is one of the best food cities in the US and very solo-friendly. Counter service, food halls, and casual restaurants are the norm. The Mission District has incredible taquerias, bakeries, and coffee shops steps from OpenAI.' },
      { icon: '🔌', title: 'Power & connectivity', body: 'Same plugs as Canada (Type A/B, 120V) — no adapter needed. Wi-Fi at the sprint venue will be provided. Your Canadian carrier likely offers US day-passes ($8–12/day) or consider an eSIM for better rates.' },
      { icon: '🏥', title: 'Safety & health', body: 'SF is generally safe for tourists. Be aware of your surroundings in the Tenderloin and some parts of SoMa. Keep valuables secured. If you need a pharmacy, Walgreens and CVS are everywhere. Travel medical insurance is recommended — US healthcare is expensive.' },
    ],
  },
];