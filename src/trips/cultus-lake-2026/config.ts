import type { TripConfig } from '../../data/types';
import { cultusLake } from './cultus-lake';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'cultus-lake-2026',
  title: 'Cultus Lake 2026',
  shortTitle: 'Cultus Lake',
  emoji: '🏕️',
  type: 'family',
  status: 'confirmed',
  startDate: '2026-07-10',
  endDate: '2026-07-12',
  datesLabel: 'July 10 – 12, 2026',
  tagline: 'Fraser Valley camping weekend — family of four, two nights by the lake',
  description: 'A weekend camping trip to Cultus Lake Provincial Park — swimming, hiking, and Adventure Park fun for a family of four.',
  accentColor: '#2A7B6C',
  baseCurrency: 'CAD',
  sections: ['budget', 'checklist', 'log'],
  cities: [cultusLake],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
