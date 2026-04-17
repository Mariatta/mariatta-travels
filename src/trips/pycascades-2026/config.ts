import type { TripConfig } from '../../data/types';
import { vancouver } from './vancouver';
import { budgetData } from './budget';
import { checklistData } from './checklist';

export const config: TripConfig = {
  id: 'pycascades-2026',
  title: 'PyCascades 2026',
  shortTitle: 'PyCascades',
  emoji: '🐍',
  type: 'conference',
  status: 'confirmed',
  startDate: '2026-03-21',
  endDate: '2026-03-21',
  datesLabel: 'March 21, 2026',
  tagline: 'Local day trip — delivered the "No More Spreadsheets!" talk',
  description: 'PyCascades 2026 — a day trip to downtown Vancouver to give the No More Spreadsheets! talk on PyLadiesCon infrastructure.',
  accentColor: '#0E7C66',
  baseCurrency: 'CAD',
  sections: ['budget', 'checklist', 'log', 'sync'],
  cities: [vancouver],
  budget: budgetData,
  checklist: checklistData,
};
