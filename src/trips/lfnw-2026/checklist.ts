import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'transport',
    title: 'Transport',
    emoji: '🚗',
    items: [
      { id: 'transport-insurance', label: 'Verify car insurance covers driving in the US', note: 'Check with ICBC or your provider for cross-border coverage' },
      { id: 'transport-ev', label: 'Fully charge the car before departure' },
      { id: 'transport-nexus', label: 'Ensure NEXUS cards are valid for all family members', note: 'Or bring passports if no NEXUS' },
      { id: 'transport-border-docs', label: 'Prepare border crossing documents (ID, vehicle registration)' },
      { id: 'transport-parking', label: 'Confirm hotel parking availability or reserve a spot', dueBy: 'Apr 2026' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    items: [
      { id: 'hotel-book', label: 'Book Bellingham hotel (2 nights, Apr 24–26)', dueBy: 'Mar 2026', note: 'Family room or 2 doubles' },
      { id: 'hotel-confirm', label: 'Confirm hotel reservation 1 week before', dueBy: 'Apr 17' },
      { id: 'hotel-save-pdf', label: 'Print or save hotel confirmation PDF' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Insurance',
    emoji: '🛂',
    items: [
      { id: 'docs-passports', label: 'Check passport validity for all 4 family members', note: 'Must be valid for duration of stay' },
      { id: 'docs-nexus', label: 'Check NEXUS card expiry dates for all family members', note: 'Speeds up border crossing significantly' },
      { id: 'docs-travel-insurance', label: 'Arrange travel insurance (medical coverage in the US)', dueBy: 'Apr 2026', note: 'Canadian provincial health coverage is limited in the US' },
      { id: 'docs-hotel-pdf', label: 'Save hotel confirmation PDFs to phone' },
      { id: 'docs-entry-reqs', label: 'Confirm US entry requirements for Canadian citizens', note: 'Passport or NEXUS required; no visa needed' },
      { id: 'docs-vehicle-reg', label: 'Bring vehicle registration and insurance documents' },
    ],
  },
  {
    id: 'lfnw',
    title: 'LFNW Conference',
    emoji: '🐧',
    items: [
      { id: 'lfnw-register', label: 'Register for LinuxFest Northwest', url: 'https://linuxfestnorthwest.org/' },
      { id: 'lfnw-schedule', label: 'Check LFNW schedule and plan sessions to attend', url: 'https://linuxfestnorthwest.org/' },
      { id: 'lfnw-talk', label: 'Prepare talk or presentation materials (if presenting)' },
      { id: 'lfnw-venue', label: 'Check venue info, parking, and campus map for Bellingham Technical College', url: 'https://www.btc.edu/' },
      { id: 'lfnw-social', label: 'Check for LFNW social events, BoFs, or after-parties' },
    ],
  },
  {
    id: 'packing',
    title: 'Packing',
    emoji: '🧳',
    items: [
      { id: 'pack-shoes', label: 'Comfortable walking shoes (hiking at Whatcom Falls!)' },
      { id: 'pack-rain', label: 'Rain jacket for everyone (PNW in April — expect rain!)' },
      { id: 'pack-layers', label: 'Layers — April in Bellingham can be 5°C to 15°C' },
      { id: 'pack-chargers', label: 'Phone chargers and portable power bank' },
      { id: 'pack-daypack', label: 'Day backpack for conference and outings' },
      { id: 'pack-kids', label: 'Kids entertainment for car ride and downtime (tablets, books)' },
      { id: 'pack-meds', label: 'Medications and basic first-aid kit' },
      { id: 'pack-umbrella', label: 'Compact umbrella' },
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
      { id: 'pre-itinerary', label: 'Share itinerary and hotel info with an emergency contact' },
      { id: 'pre-offline-maps', label: 'Download offline Google Maps for Bellingham and border area' },
      { id: 'pre-confirm', label: 'Confirm all bookings and reservations', dueBy: 'Apr 21' },
      { id: 'pre-border-wait', label: 'Check Peace Arch border wait times app or website', url: 'https://www.cbp.gov/travel/wait-times' },
    ],
  },
];
