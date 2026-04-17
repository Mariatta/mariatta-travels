import type { TripConfig } from '../../data/types';
import { porto } from './porto';
import { lisbon } from './lisbon';
import { aveiro } from './aveiro';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'portugal-2026',
  title: 'Portugal 2026',
  shortTitle: 'Portugal',
  emoji: '🇵🇹',
  type: 'family',
  status: 'planning',
  startDate: '2026-08-22',
  endDate: '2026-09-05',
  datesLabel: 'August – September 2026',
  tagline: 'Porto, Lisbon & Aveiro — a family journey',
  description: 'A family travel guide to Porto, Lisbon & Aveiro — August 2026',
  accentColor: '#006B3F',
  baseCurrency: 'EUR',
  sections: ['budget', 'checklist', 'log', 'sync'],
  cities: [porto, lisbon, aveiro],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};