import type { TripConfig } from '../../data/types';
import { sanFrancisco } from './san-francisco';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'core-sprint-2026',
  title: 'Python Core Dev Sprint 2026',
  shortTitle: 'Core Sprint 2026',
  emoji: '🐍',
  type: 'conference',
  status: 'cancelled',
  startDate: '2026-10-18',
  endDate: '2026-10-23',
  datesLabel: 'October 18 – 23, 2026',
  tagline: 'Shelved — replaced by the combined Core Sprint + SeaGL trip',
  description: 'The original standalone plan: Python Core Dev Sprint 2026 at OpenAI in San Francisco, Oct 18 – 23. First shelved after being waitlisted (1 of 17), then superseded once the sprint came through — the sprint now runs Mon – Wed as the first half of the combined Core Sprint + SeaGL 2026 trip.',
  accentColor: '#002868',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [sanFrancisco],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};