import type { TipCategory, TripStat } from '../../data/types';

export const stats: TripStat[] = [
  { num: '14', label: 'Nights' },
  { num: '3', label: 'Cities' },
  { num: '~14h', label: 'YVR → OPO' },
  { num: 'Aug', label: 'Peak summer' },
];

export const tips: TipCategory[] = [
  {
    label: 'Money & Payments',
    tips: [
      { icon: '💶', title: 'Currency', body: 'Portugal uses the Euro (€). ATMs (called "Multibanco") are everywhere and offer the best exchange rates. Withdraw in Euros — always decline the ATM\'s conversion offer to avoid poor rates.' },
      { icon: '💳', title: 'Cards vs cash', body: 'Credit and debit cards (Visa, Mastercard) are widely accepted at restaurants, hotels, shops, and supermarkets. Contactless payments work almost everywhere. Carry a small amount of cash (€30–50) for markets, street vendors, small cafés, and tipping.' },
      { icon: '🪙', title: 'Tipping culture', body: 'Tipping is appreciated but not expected. In restaurants, rounding up or leaving 5–10% is generous. For cafés, leave loose change. Taxi drivers appreciate rounding up to the nearest Euro. Hotel housekeeping: €1–2/day is a kind gesture.' },
      { icon: '📊', title: 'Budget estimate', body: 'Mid-range families should budget roughly €250–350/day covering accommodation, dining out, entry fees, and local transport. Lisbon is the most expensive; Aveiro is the most affordable.' },
    ],
  },
  {
    label: 'Weather & Packing',
    tips: [
      { icon: '🌡️', title: 'August–September weather', body: 'Late August averages 25–33°C in Porto and Lisbon, dropping slightly in September. Aveiro is a few degrees cooler thanks to the Atlantic breeze. Rain is very rare but not impossible — maybe one brief shower across two weeks.' },
      { icon: '👕', title: 'What to pack', body: 'Light, breathable clothing (cotton/linen). Comfortable walking shoes — Porto and Lisbon are hilly with cobblestones. A light layer for air-conditioned museums and cooler evenings. Swimwear for Matosinhos and Costa Nova beaches.' },
      { icon: '☀️', title: 'Sun protection', body: 'The UV index is high (8–10) in August. Pack sunscreen SPF 50, sunglasses, and hats for the whole family. Reapply after every swim. Carry refillable water bottles — tap water is safe to drink throughout Portugal.' },
      { icon: '🎒', title: 'Day bag essentials', body: 'A small daypack with water, sunscreen, snacks for kids, a portable charger, and a light rain jacket. Porto and Lisbon involve a lot of walking uphill — pack light each day.' },
    ],
  },
  {
    label: 'Getting Around',
    tips: [
      { icon: '✈️', title: 'Flights', body: 'Flying Vancouver (YVR) to Porto (OPO), roughly 14 hours with one connection. Direct flights are not available — common layovers include London, Paris, or Lisbon. Book early for August; families should aim for seats together.' },
      { icon: '🚆', title: 'Inter-city trains', body: 'Alfa Pendular (fast) and Intercidades (IC) trains connect Porto, Lisbon, and Aveiro comfortably. Porto to Lisbon: ~3 hrs on Alfa Pendular. Lisbon to Aveiro: ~2 hrs 20 min on IC. Aveiro to Porto: ~1 hr. Book at cp.pt — tickets go on sale 60 days ahead.' },
      { icon: '🚇', title: 'City public transit', body: 'Porto: use the Andante card for metro, buses, and some trains. Lisbon: use the Viva Viagem card for metro, buses, trams, and ferries. Both cards cost €0.50 and can be loaded with trips or day passes. Aveiro is walkable — no transit card needed.' },
      { icon: '🚕', title: 'Taxis & rideshare', body: 'Bolt and Uber are widely available in Porto and Lisbon and are often cheaper than taxis. Short rides in the city centre cost €4–8. Taxis use meters — ensure the meter is running. From Porto airport to the city centre: ~€25 by taxi, ~€15 by Uber/Bolt.' },
      { icon: '🚶', title: 'Walking', body: 'Porto and Lisbon are best explored on foot, but both are very hilly. Wear sturdy shoes on the cobblestones. In Lisbon, the Glória and Bica funiculars save steep climbs. Aveiro is flat and compact — everything is within a 15-minute walk.' },
    ],
  },
  {
    label: 'Practical Tips',
    tips: [
      { icon: '🎫', title: 'Book in advance', body: 'Oceanário, Castelo de São Jorge, Sintra palaces, and top restaurants all fill fast in August. Reserve as soon as possible. Salpoente and DAMA pé de cabra in particular book out weeks ahead.' },
      { icon: '🏠', title: 'Where to stay', body: 'Porto: Ribeira or Bonfim. Lisbon: Chiado, Alfama, or Mouraria. Aveiro: city centre near the canals. All are walkable bases with family-friendly options at every budget level.' },
      { icon: '🍽️', title: 'Dining culture', body: 'Lunch is 1–3pm, dinner rarely before 7:30pm. "Menu do dia" (set lunch) is excellent value at €8–12. Couvert (bread, olives, and starters brought to your table) is charged extra — you can decline it. Kids\' menus are uncommon but portions are large enough to share.' },
      { icon: '🔌', title: 'Power & connectivity', body: 'Portugal uses Type F plugs (European two-pin round, 230V). Bring a universal adapter. Free Wi-Fi is widely available at hotels, cafés, and restaurants. Consider an eSIM or local SIM for data — coverage is excellent nationwide.' },
      { icon: '🗣️', title: 'Language', body: 'Portuguese is the official language. English is widely spoken in tourist areas, hotels, and restaurants — especially by younger staff. Learning a few words (obrigado/obrigada, por favor, bom dia) is always appreciated and goes a long way.' },
      { icon: '🏥', title: 'Safety & health', body: 'Portugal is very safe for families. Tap water is safe to drink. EU health cards (EHIC/GHIC) are accepted; Canadians should have travel insurance. Pharmacies (farmácias) are well-stocked and pharmacists can advise on minor ailments without a doctor visit.' },
    ],
  },
];