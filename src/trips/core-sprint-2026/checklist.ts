import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'flights',
    title: 'Flights & Transport',
    emoji: '✈️',
    items: [
      { id: 'flights-book', label: 'Book YVR to SFO round-trip flight', dueBy: 'ASAP' },
      { id: 'flights-seat', label: 'Select seat and check in online', dueBy: 'Oct 17' },
      { id: 'flights-airport-transport', label: 'Plan SFO to hotel transport (BART or rideshare)' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    items: [
      { id: 'hotel-book', label: 'Book San Francisco hotel (5 nights, Oct 18–23)', dueBy: 'Aug 2026', note: 'Near Mission District / OpenAI office preferred' },
      { id: 'hotel-confirm', label: 'Confirm hotel reservation 1 week before departure', dueBy: 'Oct 11' },
    ],
  },
  {
    id: 'sprint',
    title: 'Python Core Dev Sprint',
    emoji: '🐍',
    items: [
      { id: 'sprint-confirm', label: 'Confirm sprint attendance and logistics' },
      { id: 'sprint-openai-access', label: 'Arrange OpenAI office access / badge' },
      { id: 'sprint-laptop', label: 'Ensure laptop and dev environment are set up for sprint work' },
      { id: 'sprint-issues', label: 'Review CPython issues to work on during sprint', url: 'https://github.com/python/cpython/issues' },
      { id: 'sprint-social', label: 'Check for sprint dinner or social events' },
      { id: 'sprint-ice-cream', label: 'Scout ice cream selfie spot near venue 🍦', note: 'Bi-Rite, Humphry Slocombe, Smitten, or Salt & Straw' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Travel',
    emoji: '🛂',
    items: [
      { id: 'docs-passport', label: 'Check passport validity', note: 'Must be valid for US entry — Canadian citizens need valid passport' },
      { id: 'docs-insurance', label: 'Arrange travel insurance (medical)', dueBy: 'Sep 2026' },
      { id: 'docs-hotel-pdf', label: 'Save hotel confirmation PDF' },
      { id: 'docs-flight-pdf', label: 'Save flight confirmation PDF' },
      { id: 'docs-bank-notify', label: 'Notify bank and credit card company of US travel dates', dueBy: 'Oct 2026' },
    ],
  },
  {
    id: 'money-tech',
    title: 'Money & Connectivity',
    emoji: '💳',
    items: [
      { id: 'tech-roaming', label: 'Set up US roaming or eSIM for data', dueBy: 'Oct 2026' },
      { id: 'tech-rideshare', label: 'Ensure Uber/Lyft apps are set up with payment', },
      { id: 'money-usd', label: 'Plan US dollars — credit card works everywhere, bring small amount of cash', note: 'Many places are cashless, but bring $50–100 just in case' },
      { id: 'money-clipper', label: 'Get Clipper card for BART/Muni on arrival or use Apple Pay', note: 'Clipper works on BART, Muni, and cable cars', url: 'https://www.clippercard.com/' },
    ],
  },
  {
    id: 'packing',
    title: 'Packing',
    emoji: '🧳',
    items: [
      { id: 'pack-layers', label: 'Layers! SF in October: 12–18°C with fog and wind', note: 'Bring a warm jacket — evenings are chilly, especially near the water' },
      { id: 'pack-laptop', label: 'Laptop + charger + any peripherals for sprint' },
      { id: 'pack-adapter', label: 'No adapter needed — same plugs as Canada (Type A/B, 120V)' },
      { id: 'pack-comfortable-shoes', label: 'Comfortable walking shoes (SF is very hilly!)' },
      { id: 'pack-charger', label: 'Portable charger / power bank' },
      { id: 'pack-daypack', label: 'Day backpack for sprint and sightseeing' },
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
      { id: 'pre-offline-maps', label: 'Download offline maps for San Francisco' },
      { id: 'pre-confirm-48h', label: 'Confirm all bookings 48 hours before departure', dueBy: 'Oct 16' },
    ],
  },
];