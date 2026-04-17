import type { ChecklistCategory } from '../../data/types';

export const checklistData: ChecklistCategory[] = [
  {
    id: 'talk',
    title: 'Talk Prep',
    emoji: '🎤',
    items: [
      { id: 'slides', label: '"No More Spreadsheets!" slides finalized' },
      { id: 'demo', label: 'Demo rehearsed and backup recording ready' },
      { id: 'tech-check', label: 'Laptop + adapters + presenter remote packed' },
    ],
  },
  {
    id: 'day-of',
    title: 'Day Of',
    emoji: '📅',
    items: [
      { id: 'transit', label: 'Load Compass Card / SkyTrain fare' },
      { id: 'arrive-early', label: 'Arrive early at venue for AV check' },
      { id: 'business-cards', label: 'Bring business cards / QR links' },
    ],
  },
];
