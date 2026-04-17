import type { BudgetCategory } from '../../data/types';

export const budgetData: BudgetCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    emoji: '✈️',
    type: 'pre-trip',
    items: [
      { id: 'flights-roundtrip', label: 'YVR to LAX round-trip (1 passenger)', estimated: 550, currency: 'CAD', note: 'Direct ~3 hrs — book early for best rates. LGB direct is limited but possible.' },
      { id: 'flights-seat', label: 'Seat selection / checked bag', estimated: 80, currency: 'CAD' },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    emoji: '🏨',
    type: 'pre-trip',
    items: [
      { id: 'hotel-long-beach', label: 'Long Beach hotel (4 nights, May 14–18)', estimated: 1200, currency: 'USD', note: 'PyCon room block — Hyatt, Westin, Marriott, or Courtyard' },
      { id: 'hotel-lax', label: 'LAX airport hotel (1 night, May 18–19)', estimated: 220, currency: 'USD', note: 'Work-from-hotel Tue before evening flight' },
    ],
  },
  {
    id: 'pycon',
    title: 'PyCon US 2026',
    emoji: '🐍',
    type: 'pre-trip',
    items: [
      { id: 'pycon-registration', label: 'PyCon US conference registration', estimated: 0, currency: 'USD', note: 'Speakers typically receive comp registration — confirm with PyCon team' },
      { id: 'pycon-tutorials', label: 'Tutorial day (if attending, May 14)', estimated: 150, currency: 'USD', note: 'Skip if arriving evening of May 14' },
      { id: 'pycon-social', label: 'Conference social events (PyLadies auction, dinners)', estimated: 120, currency: 'USD' },
    ],
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfers',
    emoji: '🚕',
    type: 'during-trip',
    items: [
      { id: 'transfer-lax-in', label: 'LAX → Long Beach arrival transfer', estimated: 60, currency: 'USD', note: 'Uber/Lyft ~$45–60, or FlyAway bus + Metro' },
      { id: 'transfer-lb-lax', label: 'Long Beach → LAX hotel transfer (Mon)', estimated: 60, currency: 'USD', note: 'Uber/Lyft ~$45–60 with sprint-day luggage' },
      { id: 'transfer-lax-out', label: 'LAX hotel → airport (Tue evening)', estimated: 15, currency: 'USD', note: 'Free hotel shuttle or short Uber' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Dining',
    emoji: '🍽️',
    type: 'during-trip',
    items: [
      { id: 'food-breakfast', label: 'Breakfast & coffee (6 mornings)', estimated: 75, currency: 'USD', note: '~$12/morning' },
      { id: 'food-lunch', label: 'Lunch on non-conference days (2 lunches)', estimated: 45, currency: 'USD', note: '~$22/lunch solo — PyCon typically covers conference-day lunches' },
      { id: 'food-dinner', label: 'Dinners (6 evenings)', estimated: 210, currency: 'USD', note: '~$35/evening solo — mix of casual and nicer spots' },
    ],
  },
  {
    id: 'local-transport',
    title: 'Local Transport',
    emoji: '🚇',
    type: 'during-trip',
    items: [
      { id: 'transport-metro', label: 'Metro A Line / Long Beach Transit', estimated: 20, currency: 'USD', note: 'Short rides and trips to Belmont Shore' },
      { id: 'transport-rideshare', label: 'Uber/Lyft in-city', estimated: 60, currency: 'USD', note: 'Belmont Shore, Bixby Knolls runs' },
    ],
  },
  {
    id: 'activities',
    title: 'Activities & Sightseeing',
    emoji: '🎫',
    type: 'during-trip',
    items: [
      { id: 'act-aquarium', label: 'Aquarium of the Pacific ticket', estimated: 45, currency: 'USD', note: 'Book online for best price' },
      { id: 'act-queen-mary', label: 'Queen Mary tour (optional)', estimated: 30, currency: 'USD' },
      { id: 'act-ice-cream', label: 'Ice cream selfie tour 🍦', estimated: 40, currency: 'USD', note: 'Long Beach Creamery, Handel\'s, Romeo, Afters — the tradition!' },
    ],
  },
  {
    id: 'connectivity',
    title: 'SIM & Connectivity',
    emoji: '📱',
    type: 'pre-trip',
    items: [
      { id: 'sim-roaming', label: 'US roaming or eSIM (6 days)', estimated: 25, currency: 'CAD', note: 'Check Canadian carrier US day-pass — Rogers/Bell/Telus typically $8–14/day' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    emoji: '📦',
    type: 'during-trip',
    items: [
      { id: 'misc-tips', label: 'Tips and gratuities', estimated: 70, currency: 'USD', note: 'US tipping: 18–20% at restaurants' },
      { id: 'misc-souvenirs', label: 'Souvenirs & PyCon swag', estimated: 40, currency: 'USD' },
      { id: 'misc-buffer', label: 'Unexpected expenses buffer', estimated: 75, currency: 'USD' },
    ],
  },
];