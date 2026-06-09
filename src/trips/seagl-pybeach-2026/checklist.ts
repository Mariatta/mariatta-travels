import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'flights',
    title: 'Flights & Transport',
    emoji: '✈️',
    items: [
      { id: 'flights-yvr-sea', label: 'Book YVR → SEA for Thu Oct 22 (or plan drive / Amtrak Cascades)', dueBy: 'ASAP' },
      { id: 'flights-sea-lax', label: 'Book SEA → LAX evening flight for Fri Oct 23', dueBy: 'ASAP', note: 'Leave buffer after SeaGL — aim for a later-evening departure' },
      { id: 'flights-lax-yvr', label: 'Book LAX → YVR for Sun Oct 25', dueBy: 'ASAP' },
      { id: 'flights-checkin', label: 'Check in online for each leg' },
      { id: 'flights-transfers', label: 'Plan airport transfers (SEA, LAX ↔ Santa Monica)' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    items: [
      { id: 'hotel-sea', label: 'Book Seattle hotel (1 night, Oct 22)', dueBy: 'Sep 2026', note: 'U District near the SeaGL venue' },
      { id: 'hotel-sm', label: 'Book Santa Monica hotel (2 nights, Oct 23–25)', dueBy: 'Aug 2026', note: 'Downtown SM near the PyBeach venue / Promenade' },
      { id: 'hotel-confirm', label: 'Confirm both reservations 1 week before departure', dueBy: 'Oct 15' },
    ],
  },
  {
    id: 'seagl',
    title: 'SeaGL 2026 (Seattle)',
    emoji: '🐧',
    items: [
      { id: 'seagl-cfp', label: 'CFP submitted — watch for the acceptance decision', url: 'https://seagl.org/', note: 'Dates confirmed Oct 23–24 per SeaGL news (Jun 1); CFP extended to Jun 30' },
      { id: 'seagl-talk-prep', label: 'If accepted: confirm room/time slot, then finalize & rehearse the talk' },
      { id: 'seagl-register', label: 'Register (optional, free) and review the schedule', url: 'https://seagl.org/attend' },
      { id: 'seagl-ice-cream', label: 'Scout ice cream selfie spot near venue 🍦', note: "Molly Moon's on The Ave, minutes from the HUB" },
    ],
  },
  {
    id: 'pybeach',
    title: 'PyBeach 2026 (Santa Monica)',
    emoji: '🐍',
    items: [
      { id: 'pybeach-cfp', label: 'CFP submitted — watch for the acceptance decision', url: 'https://2026.pybeach.org/' },
      { id: 'pybeach-talk-prep', label: 'If accepted: confirm slot, then finalize & rehearse the talk' },
      { id: 'pybeach-ticket', label: 'Buy PyBeach 2026 ticket (early bird)', url: 'https://2026.pybeach.org/', note: 'Community conference — ti.to/pybeach' },
      { id: 'pybeach-schedule', label: 'Review the talk schedule once published', url: 'https://2026.pybeach.org/' },
      { id: 'pybeach-social', label: 'Check for an attendee social or after-party' },
      { id: 'pybeach-ice-cream', label: 'Scout ice cream selfie spot near venue 🍦', note: "McConnell's on the Promenade, 4 blocks from the venue" },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Travel',
    emoji: '🛂',
    items: [
      { id: 'docs-passport', label: 'Check passport validity', note: 'Must be valid for US entry — Canadian citizens need a valid passport' },
      { id: 'docs-insurance', label: 'Arrange travel insurance (medical)', dueBy: 'Sep 2026' },
      { id: 'docs-hotel-pdf', label: 'Save both hotel confirmation PDFs' },
      { id: 'docs-flight-pdf', label: 'Save all three flight confirmation PDFs' },
      { id: 'docs-bank-notify', label: 'Notify bank and credit card company of US travel dates', dueBy: 'Oct 2026' },
    ],
  },
  {
    id: 'money-tech',
    title: 'Money & Connectivity',
    emoji: '💳',
    items: [
      { id: 'tech-roaming', label: 'Set up US roaming or eSIM for data', dueBy: 'Oct 2026' },
      { id: 'tech-rideshare', label: 'Ensure Uber/Lyft apps are set up with payment' },
      { id: 'tech-transit', label: 'Set up transit payment (ORCA / Apple Pay in Seattle, TAP in LA)', url: 'https://www.soundtransit.org/ride-with-us/how-to-pay/orca-card' },
      { id: 'money-usd', label: 'Cards work everywhere — bring $50–100 cash for taco stands & tips', note: 'A few birria/taco spots are cash-friendly' },
    ],
  },
  {
    id: 'packing',
    title: 'Packing',
    emoji: '🧳',
    items: [
      { id: 'pack-layers', label: 'Layers for two climates — cool/rainy Seattle, warm sunny SoCal', note: 'A warm layer + light rain shell for Seattle; lighter clothes for Santa Monica' },
      { id: 'pack-beach', label: 'Swimsuit + sunscreen + sunglasses for Santa Monica' },
      { id: 'pack-talk', label: 'Laptop + charger + adapters/clicker (for talks, if either CFP is accepted)' },
      { id: 'pack-adapter', label: 'No plug adapter needed — same as Canada (Type A/B, 120V)' },
      { id: 'pack-shoes', label: 'Comfortable walking shoes (both cities are walkable)' },
      { id: 'pack-carryon', label: 'Pack carry-on only — tight connections, no checked-bag waits', note: 'Avoids bag risk on the multi-leg routing' },
      { id: 'pack-meds', label: 'Medications and any essentials' },
    ],
  },
  {
    id: 'before-departure',
    title: 'Before Departure',
    emoji: '🏠',
    items: [
      { id: 'pre-fish-fill', label: 'Fill both fish feeders 🐟' },
      { id: 'pre-fish-charge', label: 'Charge both fish feeders (or fresh batteries)' },
      { id: 'pre-fish-test', label: 'Test-fire both fish feeders before leaving' },
      { id: 'pre-fish-water', label: 'Top up tank water / run a water change' },
      { id: 'pre-itinerary', label: 'Share itinerary with an emergency contact' },
      { id: 'pre-offline-maps', label: 'Download offline maps for Seattle and Santa Monica / LA' },
      { id: 'pre-confirm-48h', label: 'Confirm all bookings 48 hours before departure', dueBy: 'Oct 20' },
    ],
  },
];
