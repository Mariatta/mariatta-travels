import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '2', label: 'Nights' },
  { num: '1', label: 'City' },
  { num: '~1h', label: 'YVR → BLI' },
  { num: 'Apr', label: 'Spring' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'The US uses the US Dollar (USD). ATMs are widely available. As a Canadian, your debit card may work at some ATMs but watch for foreign transaction fees. Withdraw in USD — always decline the ATM\'s conversion offer.' },
      { icon: '💳', title: 'Cards vs cash', body: 'Credit and debit cards (Visa, Mastercard) are accepted almost everywhere. Contactless payments work at most restaurants and shops. Carry some small bills ($1, $5) for tips. Many places add tax at checkout (WA sales tax is ~8.8%).' },
      { icon: '🪙', title: 'Tipping culture', body: 'Tipping is expected in the US. Restaurants: 18–20% of the pre-tax bill. Coffee shops: $1–2 or 15–20%. Taxi/rideshare: 15–20%. Hotel housekeeping: $2–5/night. Not tipping is considered rude in sit-down restaurants.' },
      { icon: '📊', title: 'Budget estimate', body: 'A short road trip from Vancouver to Bellingham is very affordable. Budget ~$80–100 USD/day for a family of 4 covering food, activities, and incidentals. The hotel is the biggest cost. Gas for the round trip is minimal (~$50 CAD).' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'April weather', body: 'Late April in Bellingham averages 8–15°C (46–59°F). Rain is common — expect overcast skies with occasional showers. Some sunny days are possible. Evenings can be cool (around 5–8°C).' },
      { icon: '👕', title: 'What to pack', body: 'Layers are essential — mornings are cool, afternoons can warm up. A waterproof rain jacket is a must for the Pacific Northwest in spring. Comfortable walking shoes (waterproof preferred). Casual dress is fine everywhere, including LFNW.' },
      { icon: '☔', title: 'Rain prep', body: 'Pack a compact umbrella and a rain jacket for everyone. Bellingham locals embrace the rain — most activities are available rain or shine. Indoor options include the Whatcom Museum, SPARK Museum, and of course the LFNW conference venue.' },
      { icon: '🎒', title: 'Day bag essentials', body: 'A small daypack with water bottles, snacks for kids, portable charger, rain jacket, and a light layer. LFNW is a walking conference — comfortable shoes are a must. Bring a reusable water bottle — tap water is excellent in the PNW.' },
    ],
  },
  {
    label: 'Getting There',
    tips: [
      { icon: '🚗', title: 'Driving from Vancouver', body: 'Bellingham is about 90 km (55 miles) south of Vancouver. The drive takes about 1 hour without border delays. Take Highway 99 south to the Peace Arch or Pacific Highway border crossing, then I-5 south to Bellingham.' },
      { icon: '🛂', title: 'Border crossing', body: 'Bring passports for all family members. NEXUS cards speed up the crossing significantly — use the dedicated NEXUS lane. Border wait times vary: early morning or midweek is usually fastest. Check borderlineups.com for real-time waits.' },
      { icon: '🅿️', title: 'Parking', body: 'Most Bellingham hotels offer free or affordable parking. Downtown has metered street parking and several parking garages. Bellingham Technical College (LFNW venue) has visitor parking lots — check conference info for specifics.' },
      { icon: '🚶', title: 'Getting around', body: 'Bellingham is very walkable downtown. Most attractions, restaurants, and the Fairhaven district are within a short drive. Having a car is recommended for getting between areas. Uber/Lyft are available but less common than in larger cities.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🖥️', title: 'LFNW conference', body: 'LinuxFest Northwest is held at Bellingham Technical College. It\'s a free/low-cost community conference focused on Linux and open source. Family-friendly atmosphere. Check the schedule at linuxfestnorthwest.org for session times and keynotes.' },
      { icon: '🍺', title: 'Craft beer scene', body: 'Bellingham has an incredible craft beer scene — Boundary Bay, Aslan, Wander, Structures, and more. Many breweries are kid-friendly during daytime hours with outdoor seating and non-alcoholic options.' },
      { icon: '🔌', title: 'Power & connectivity', body: 'The US uses Type A/B plugs (120V, same as Canada). No adapter needed! Cell coverage is excellent. Most Canadian plans include US roaming — check your carrier. Free Wi-Fi is available at hotels, cafés, and the conference venue.' },
      { icon: '🏥', title: 'Safety & health', body: 'Bellingham is a very safe, family-friendly city. US healthcare can be expensive — make sure your Canadian travel insurance covers the US. Pharmacies (Walgreens, CVS, Rite Aid) are available for minor needs. Dial 911 for emergencies.' },
      { icon: '🛒', title: 'Shopping', body: 'Washington has no income tax but has sales tax (~8.8%). Popular cross-border shopping: Trader Joe\'s (unique snacks), Target, Costco (if you have a membership), and outlet malls. Bring a cooler for perishables on the drive home.' },
      { icon: '🗣️', title: 'Quick facts', body: 'English is spoken everywhere. Bellingham is in the Pacific Time Zone (same as Vancouver). Legal drinking age is 21 (not 19 like BC). Speed limits are in miles per hour. Gas is sold in gallons (1 US gallon ≈ 3.785 litres).' },
    ],
  },
];