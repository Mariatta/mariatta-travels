import type { TripConfig } from '../../data/types';
import { bellingham } from './bellingham';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'lfnw-2026',
  title: 'LinuxFest Northwest 2026',
  shortTitle: 'LFNW 2026',
  emoji: '🐧',
  type: 'conference',
  status: 'confirmed',
  startDate: '2026-04-24',
  endDate: '2026-04-26',
  datesLabel: 'April 24 – 26, 2026',
  tagline: 'LinuxFest Northwest — Bellingham, WA',
  description: 'Conference trip for LinuxFest Northwest 2026 in Bellingham, WA',
  accentColor: '#3C3B6E',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [bellingham],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};