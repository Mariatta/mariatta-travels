import type { TripConfig } from '../../data/types';
import { longBeach } from './long-beach';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'pycon-us-2026',
  title: 'PyCon US 2026',
  shortTitle: 'PyCon US 2026',
  emoji: '🐍',
  type: 'conference',
  status: 'confirmed',
  startDate: '2026-05-14',
  endDate: '2026-05-19',
  datesLabel: 'May 14 – 19, 2026',
  tagline: 'PyCon US 2026 — Long Beach, CA · Speaking Saturday',
  description: 'Conference trip for PyCon US 2026 in Long Beach, California. Mariatta is speaking on Saturday.',
  accentColor: '#3776AB',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [longBeach],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
