import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'keynote',
    title: 'Keynote Prep',
    emoji: '🎤',
    items: [
      { id: 'slides', label: 'Closing keynote slides: "Learnings and reflections from 10 years in Open Source"' },
      { id: 'stories', label: 'Pick anchor stories from the decade to include' },
      { id: 'rehearse', label: 'Rehearse out loud to hit time' },
      { id: 'tech-check', label: 'Laptop + adapters + presenter remote packed' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel',
    emoji: '✈️',
    items: [
      { id: 'flights', label: 'Book YVR to DCA/IAD round-trip (travel Mar 22, return Mar 25)' },
      { id: 'hotel-arc', label: 'Book Arc Hotel Washington DC (3 nights)' },
      { id: 'passport', label: 'Passport valid for US entry' },
      { id: 'insurance', label: 'Travel medical insurance' },
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
    ],
  },
];
