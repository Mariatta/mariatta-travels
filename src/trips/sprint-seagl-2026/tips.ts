import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '7', label: 'Nights' },
  { num: '2', label: 'Cities' },
  { num: '2', label: 'Events' },
  { num: 'Oct', label: 'Fall sprint' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'The US uses the US Dollar ($). Cards are accepted virtually everywhere in both San Francisco and Seattle, and much of SF is outright cashless. Bring $50–100 cash anyway for tips and the cash-only spots — La Taqueria in the Mission is the classic example.' },
      { icon: '💳', title: 'Cards & tipping', body: 'Tipping is expected in the US: 18–20% at sit-down restaurants, $1–2 for coffee or taco counters, 15–20% for rideshares. Your Canadian Visa/Mastercard and Apple Pay work fine in both cities. The food and transport estimates on the Budget page are already tip-inclusive, so log each expense at the total you actually paid.' },
      { icon: '📊', title: 'Budget estimate', body: 'Eight days across two cities runs roughly $330–430 CAD/day covering hotels, meals, transport, and incidentals. Both events are free to attend and the sprint provides lunch Mon–Wed, which takes real pressure off the food line. Keep a healthy buffer: one-way flights tend to price above what you first estimate.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'San Francisco in October', body: 'October is one of SF\'s warmest months ("Indian summer"): 15–22°C by day, 10–13°C at night. The fog is less common now but can roll in suddenly near the coast. Microclimates are real — warm in the Mission, cold at the waterfront on the same afternoon.' },
      { icon: '🌧️', title: 'Seattle in late October', body: 'Cool and likely damp — typically 8–14°C with a good chance of rain. Pack a warm layer and a packable rain shell for two full days on the UW campus, plus the walk to and from the HUB.' },
      { icon: '🧳', title: 'One bag, eight days', body: 'You go from mild SF to damp Seattle in one hop, then drive home. Layers cover both. Only one flight has a bag transfer, so a checked bag is workable this time, but a single carry-on still makes the Thursday morning SFO run easier.' },
      { icon: '👟', title: 'Shoes', body: 'SF hills then a sprawling university campus. Comfortable walking shoes matter more than anything else you pack, and something water-resistant helps on the Seattle days.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'The routing', body: 'YVR → SFO (Sun Oct 18, ~2.5h direct) opens the trip. SFO → SEA (Thu Oct 22, ~2h15m) moves you north between events. There is no flight home — you are getting picked up in Seattle on Sunday Oct 25 and driving back. Book both legs as one-ways.' },
      { icon: '🚇', title: 'SF: BART & Muni', body: 'BART connects SFO to the city (~$10, ~30 min) and 16th St Mission is the closest station to the OpenAI office. Muni covers buses, metro, and the cable cars. Clipper card or Apple Pay works on both.' },
      { icon: '🚆', title: 'Seattle: one-seat Link ride', body: 'Link light rail runs from SEA airport straight to the U District with no transfer, roughly 45 minutes. It is cheaper and more predictable than a rideshare in Thursday afternoon traffic. Tap with ORCA or a contactless card.' },
      { icon: '🚗', title: 'The drive home', body: 'Seattle → Vancouver is about 2.5 hours on I-5 plus whatever the border adds. Check Peace Arch and Pacific Highway wait times before you leave — Sunday afternoons northbound can be slow. Have your passport out and ready, and NEXUS if your driver has a lane for it.' },
      { icon: '🚶', title: 'Walk everywhere else', body: 'The Mission is one of SF\'s flatter neighbourhoods, and in Seattle the HUB, The Ave, and the U District hotels are all within a few blocks of each other.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🐍', title: 'Sprint logistics', body: 'The Python Core Dev Sprint runs Mon–Fri at OpenAI\'s office, but you are there Mon–Wed only. Tell the organizers early so nothing lands on you for Thursday or Friday, and plan a Wednesday wrap-up to hand off open work. Bring photo ID for building check-in and a laptop with your dev environment ready to go.' },
      { icon: '🐧', title: 'SeaGL logistics', body: 'SeaGL is a free, community-run free-software conference at the UW Husky Union Building, Oct 23–24 (moved from November due to a venue conflict). With PyBeach off the calendar you can now attend both full days instead of ducking out Friday evening. CFP submitted — if the talk is accepted, confirm your room, slot, and AV ahead of time.' },
      { icon: '🎤', title: 'Rehearse before you fly', body: 'You land in Seattle the day before SeaGL, straight out of three sprint days. If your talk is accepted, get the rehearsals done during the SF week rather than counting on Thursday evening.' },
      { icon: '🌮', title: 'Tacos & birria', body: "Both cities deliver. In SF it's the Mission burrito at La Taqueria, order it no-rice. In Seattle, Carmelo's on The Ave does birria and quesabirria — dip the cheesy tacos in the consomé." },
      { icon: '🍦', title: 'Ice cream selfies', body: "Keep the tradition going at both stops: Bi-Rite Creamery by Dolores Park during sprint week, then Molly Moon's on The Ave near the HUB during SeaGL." },
      { icon: '🔌', title: 'Power & connectivity', body: 'Same plugs as Canada (Type A/B, 120V) — no adapter needed. Wi-Fi is provided at both venues. Over eight days an eSIM usually beats your carrier\'s $8–12/day US pass.' },
      { icon: '🏥', title: 'Safety & health', body: 'Both cities are generally safe. In SF, be aware of your surroundings in the Tenderloin and parts of SoMa, and never leave anything visible in a car. Walgreens and CVS are everywhere. Travel medical insurance is worth it — US healthcare is expensive.' },
    ],
  },
];
