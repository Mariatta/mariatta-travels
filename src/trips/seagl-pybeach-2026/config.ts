import type { TripConfig } from '../../data/types';
import { seattle } from './seattle';
import { santaMonica } from './santa-monica';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'seagl-pybeach-2026',
  title: 'SeaGL + PyBeach 2026',
  shortTitle: 'SeaGL + PyBeach',
  emoji: '🐧🏖️',
  type: 'family',
  status: 'planning',
  startDate: '2026-10-22',
  endDate: '2026-10-25',
  datesLabel: 'October 22 – 25, 2026',
  tagline: 'Two-conference weekend — SeaGL in Seattle, then PyBeach by the Pacific',
  description: 'A back-to-back conference weekend: SeaGL 2026 in Seattle on Friday, then a hop to Santa Monica for PyBeach 2026 on Saturday, with tacos, ice cream, and beach time in between. CFPs submitted to both — awaiting decisions.',
  accentColor: '#0E7C66',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [seattle, santaMonica],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
