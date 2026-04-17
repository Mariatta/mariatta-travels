import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '5', label: 'Nights' },
  { num: '1', label: 'City' },
  { num: '~3h', label: 'YVR → LAX' },
  { num: 'May', label: 'Early summer' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'The US uses the US Dollar ($). Credit and debit cards are accepted virtually everywhere in Long Beach — contactless is the norm. Bring $50–100 USD in small bills for tips and the rare cash-only spot.' },
      { icon: '💳', title: 'Cards & tipping', body: 'Tipping is expected in the US: 18–20% at sit-down restaurants, $1–2 for coffee, 15–20% for rideshares, $2–5/night for hotel housekeeping. Visa and Mastercard from Canada work universally. Apple Pay / Google Pay are widely accepted — including on the Metro A Line.' },
      { icon: '📊', title: 'Budget estimate', body: 'A solo PyCon trip runs roughly $350–450 CAD/day covering hotel, meals, transit, and incidentals. Conference-day lunches are typically covered, which trims food costs noticeably. Speaker registration is usually complimentary.' },
      { icon: '💰', title: 'California taxes', body: 'California sales tax in Long Beach is ~10.25%. It\'s added at checkout, not included in shelf prices. Restaurants also add tax to the pre-tip total, so budget accordingly.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'May weather', body: 'Mid-May in Long Beach averages 15–22°C (60–72°F). Expect sunshine with a classic "May gray" morning marine layer that burns off by noon. Evenings by the water are cool — layers are a must.' },
      { icon: '👕', title: 'What to pack', body: 'Business casual for the talk, casual layers the rest of the week. A light jacket or hoodie for conference-room AC and cool evening walks along the waterfront. Comfortable walking shoes — convention floors plus Long Beach\'s walkable downtown add up.' },
      { icon: '☀️', title: 'Sun prep', body: 'The SoCal sun is strong even in May. Pack sunglasses, SPF, and a light hat if you plan to spend time at the Aquarium, Shoreline Village, or the Queen Mary. Reapply sunscreen at midday.' },
      { icon: '🎒', title: 'Conference essentials', body: 'Day backpack for swag and laptop, refillable water bottle (convention centre has fountains), HDMI + USB-C adapters for presenting, portable charger. Bring a second phone charger for the hotel so the good one lives in your bag.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'Flights', body: 'Direct YVR to LAX takes about 3 hours with many daily options (Air Canada, WestJet, Alaska, American). Long Beach Airport (LGB) is closer to the venue but has very limited direct service from YVR. US Customs pre-clearance at YVR means you clear in Vancouver.' },
      { icon: '🚕', title: 'LAX ↔ Long Beach', body: 'It\'s ~30 km from LAX to Long Beach. Uber/Lyft runs $45–60 one-way (45–75 min depending on traffic). The FlyAway bus to Union Station + Metro A Line is cheaper (~$20 total) but slower. A shared SuperShuttle / Karmel shuttle is in between.' },
      { icon: '🚇', title: 'Metro A Line & Passport shuttle', body: 'The free Passport shuttle loops around downtown Long Beach and the convention centre. The Metro A Line (Blue) connects downtown Long Beach to LA — handy if you want to sightsee beyond Long Beach. Use Apple Pay / Google Pay to tap on.' },
      { icon: '🚶', title: 'Walking Long Beach', body: 'Downtown Long Beach is very walkable and flat — the convention centre, Pine Avenue dining, Shoreline Village, and the Aquarium are all within a 15-minute walk. Belmont Shore (2nd Street) is a short rideshare or Metro ride east.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🎤', title: 'Speaker logistics', body: 'Mariatta speaks Saturday May 16. Speaker check-in is usually the day before — find the speaker lounge on Friday. AV tests are offered in the room before sessions. Bring HDMI + USB-C adapters. Back up slides to laptop + USB + cloud.' },
      { icon: '🐍', title: 'PyCon flow', body: 'PyCon is Thu tutorials, Fri–Sun main conference, Mon–Tue sprints. Keynotes are mornings; talks fill the day. Hallway track is as valuable as the talks. PyLadies auction (Fri or Sat evening) is the social highlight. Lunch is usually provided on main-conference days.' },
      { icon: '🍽️', title: 'Dining solo in Long Beach', body: 'Long Beach is very solo-friendly. Pine Avenue has casual to upscale options walkable from the venue. Belmont Shore (2nd Street) is a food-packed strip a short rideshare away. Bar seating is welcoming at most upscale spots — L\'Opera and Roe Seafood especially.' },
      { icon: '🔌', title: 'Power & connectivity', body: 'Same plugs as Canada (Type A/B, 120V) — no adapter needed. Conference Wi-Fi will be provided. Canadian carriers typically offer US day-passes ($8–14/day); an eSIM (Airalo, Ubigi) can be cheaper for 5+ days.' },
      { icon: '🏥', title: 'Safety & health', body: 'Downtown Long Beach is safe during the day and evenings around the convention centre. Standard city awareness elsewhere. US healthcare is expensive — travel medical insurance is essential. Pharmacies (CVS, Walgreens, Rite Aid) are common for minor needs.' },
      { icon: '🌊', title: 'Long Beach beyond PyCon', body: 'Aquarium of the Pacific is walkable from the venue and top-notch. The Queen Mary is a Long Beach icon worth visiting. Naples Island has picturesque canals (gondola rides if you\'re feeling fancy). Belmont Shore\'s 2nd Street is the go-to for dining + shopping.' },
    ],
  },
];