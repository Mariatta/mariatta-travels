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
  status: 'planning',
  startDate: '2026-10-18',
  endDate: '2026-10-23',
  datesLabel: 'October 18 – 23, 2026',
  tagline: 'Python Core Dev Sprint at OpenAI — San Francisco',
  description: 'Python Core Dev Sprint 2026 at OpenAI in San Francisco',
  accentColor: '#002868',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [sanFrancisco],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};