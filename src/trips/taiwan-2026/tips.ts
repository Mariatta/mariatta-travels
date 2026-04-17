import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '14', label: 'Nights' },
  { num: '5', label: 'Cities' },
  { num: '~12h', label: 'YVR → TPE' },
  { num: 'Aug', label: 'Peak summer' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💵', title: 'Currency', body: 'Taiwan uses the New Taiwan Dollar (NT$ / TWD). ATMs are everywhere — 7-Eleven and FamilyMart ATMs accept international cards. Withdraw in TWD and decline any conversion offers. 1 CAD ≈ 23 TWD.' },
      { icon: '💳', title: 'Cards vs cash', body: 'Credit cards are accepted at hotels, department stores, and chain restaurants. However, night markets, street food vendors, small shops, and local restaurants are cash-only. Carry NT$2,000–3,000 cash daily.' },
      { icon: '🪙', title: 'Tipping culture', body: 'Tipping is NOT customary in Taiwan. Do not tip at restaurants, taxis, or hotels — it can cause confusion. Some upscale restaurants add a 10% service charge automatically.' },
      { icon: '📊', title: 'Budget estimate', body: 'Taiwan is very affordable. A family of 4 can eat well for NT$1,500–2,000/day. Night market meals are NT$50–150 per person. Budget NT$6,000–8,000/day total including accommodation, food, transport, and activities.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'August–September weather', body: 'Hot and humid — 28–35°C with high humidity (80%+). This is typhoon season. Rain showers are common and can be sudden and heavy. Air conditioning is aggressive indoors — bring a light layer.' },
      { icon: '👕', title: 'What to pack', body: 'Light, breathable, moisture-wicking clothing. Comfortable walking shoes. A compact umbrella and light rain jacket are essential. A light cardigan for air-conditioned spaces (trains, malls, museums).' },
      { icon: '☀️', title: 'Sun & rain protection', body: 'UV index is very high (9–11). Pack sunscreen SPF 50, sunglasses, and hats. Also pack a rain jacket or poncho — afternoon thunderstorms are common. Do NOT drink tap water — buy bottled or use hotel kettles.' },
      { icon: '🎒', title: 'Day bag essentials', body: 'Umbrella, water bottle (buy bottled), portable charger (essential!), hand towel (for sweat), wet wipes, and snacks for kids. A small daypack is ideal for the heat.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'Flights', body: 'Flying Vancouver (YVR) to Taipei (TPE), roughly 11–12 hours direct on EVA Air or China Airlines. Some routes connect via Tokyo or Seoul. Book early for August peak season.' },
      { icon: '🚄', title: 'Inter-city trains', body: 'THSR (High Speed Rail) connects Taipei, Taichung, Tainan, and Kaohsiung in comfort. Taipei to Kaohsiung: ~1.5 hours. TRA trains serve Hualien (east coast). Book THSR at thsrc.com.tw — early bird tickets save 20–35%.' },
      { icon: '🚇', title: 'City public transit', body: 'EasyCard is essential — works on MRT, buses, convenience stores, and some taxis. Buy at any MRT station or convenience store (NT$100 deposit). Taipei and Kaohsiung have excellent MRT systems. Other cities rely on buses.' },
      { icon: '🚕', title: 'Taxis & rideshare', body: 'Taxis are metered, safe, and affordable. Uber works in Taipei and Kaohsiung. Base fare is NT$70–85. Most drivers don\'t speak English — have your destination written in Chinese characters (use Google Maps).' },
      { icon: '🏪', title: 'Convenience stores', body: 'Taiwan\'s 7-Eleven and FamilyMart are lifesavers — ATMs, train tickets, SIM cards, snacks, hot meals, coffee, phone charging, and even package pickup. Open 24/7, on literally every block.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🎫', title: 'Book in advance', body: 'TRA trains to Hualien sell out fast in summer — book 2 weeks ahead. Din Tai Fung has online reservations. Taroko Gorge permits may be needed for certain trails. THSR early bird tickets go fast.' },
      { icon: '🍜', title: 'Night market culture', body: 'Night markets open around 5–6pm and run until midnight. They\'re the heart of Taiwanese food culture. Come hungry, try small portions of many things. Most vendors are cash-only. Shilin, Raohe, Feng Chia, and Liuhe are the big ones.' },
      { icon: '🔌', title: 'Power & connectivity', body: 'Taiwan uses Type A/B plugs at 110V — same as North America! Your Canadian plugs work without any adapter. Get an eSIM or pick up a prepaid SIM at the airport. Data coverage is excellent everywhere.' },
      { icon: '🗣️', title: 'Language', body: 'Mandarin Chinese is the primary language. English signage exists in MRT stations and tourist areas, but conversational English is limited outside Taipei. Google Translate with the camera feature is very helpful for menus and signs.' },
      { icon: '🏥', title: 'Safety & health', body: 'Taiwan is extremely safe — among the safest countries in Asia. Don\'t drink tap water. Pharmacies (藥局) are well-stocked. Travel insurance is recommended. Be aware of typhoon warnings in August — check the Central Weather Bureau.' },
      { icon: '🚻', title: 'Bathrooms', body: 'Public restrooms are clean and available in MRT stations, convenience stores, and department stores. Many use squat toilets — Western-style toilets are available but may require seeking them out. Always carry tissues.' },
    ],
  },
];