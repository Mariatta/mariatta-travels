import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '2', label: 'Nights' },
  { num: '~90m', label: 'Drive from Vancouver' },
  { num: 'Jul', label: 'Peak summer' },
  { num: '4', label: 'Family of four' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Cash & cards', body: 'Most vendors at Cultus Lake accept cards, but bring some cash — firewood is sometimes cash-only, and the Adventure Park\'s small food carts prefer it. The BC Parks campsite is prepaid online, so no on-site fees.' },
      { icon: '📊', title: 'Budget estimate', body: 'A weekend camping trip for a family of four typically runs $600–800 CAD all-in (campsite, groceries, Adventure Park, one restaurant meal, EV charging). Skipping the Adventure Park saves ~$200.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'July weather', body: 'Cultus Lake in July is hot: daytime 26–32°C, sometimes hotter. Lake water is pleasantly warm by mid-July. Nights drop to 12–15°C — you still want a hoodie and a proper sleeping bag. Occasional afternoon thunderstorms.' },
      { icon: '🎒', title: 'Campsite essentials', body: 'Headlamps (one per person), bug spray, sunscreen, quick-dry towels, warm layers for evenings, water shoes for the rocky beach at Entrance Bay. Don\'t forget the can opener and matches — the classic forgotten items.' },
      { icon: '🪵', title: 'Firewood', body: 'Buy firewood locally at the campground or Chilliwack — BC Parks bans bringing firewood from outside the region to prevent spreading invasive insects. Campsite bundles are ~$8–10.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '🚗', title: 'Driving from Vancouver', body: 'About 90 min via Hwy 1 East (TransCanada). Friday afternoon traffic leaves Vancouver by 1–2 PM to beat the crush; Sunday returns hit worst traffic 3–6 PM. The last stretch from the Sardis exit to Cultus Lake is a quick 15 min.' },
      { icon: '⚡', title: 'EV charging', body: 'Plenty of range with a full charge from home (round-trip is ~200 km). BC Hydro DC fast chargers are available in Chilliwack (Eagle Landing, Yale Rd) if you need a top-up before heading home. Cultus Lake itself has no chargers.' },
      { icon: '🅿️', title: 'Parking', body: 'Campsite includes 2 vehicle passes. Day-use beach parking fills by 10–11 AM on hot summer weekends. Park once at your campsite and walk or bike to the beach / village when possible.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🌊', title: 'Lake safety', body: 'Cultus Lake is shallow near the beaches but drops off quickly — use life jackets for kids beyond their depth. Summer weekends get busy with boats; swim near marked areas and keep kids visible. Water quality is monitored — check BC Parks for any algal bloom advisories before swimming.' },
      { icon: '🏕️', title: 'Campground rhythms', body: 'Quiet hours are typically 10 PM – 7 AM and strictly enforced. Check-in is 1 PM, check-out 11 AM. No generators allowed in BC Parks. Book the Discover Camping reservation 4 months ahead — summer weekends sell out within an hour.' },
      { icon: '🧸', title: 'Kids at camp', body: 'Give each kid a job (firewood carrier, dish-dryer) and they stay engaged. Bring a card game or glow sticks for after-dinner. The Adventure Park and mini-golf are the classic "trade a beach day for a park day" bribes if moods turn.' },
      { icon: '🥾', title: 'Teapot Hill hike', body: 'Easy 5 km loop with ~300 m elevation gain — doable for ages 6+. Lake views from the top. Parking is tiny and fills by 9 AM on weekends. Bring water and sunscreen; the summit is exposed.' },
    ],
  },
];
