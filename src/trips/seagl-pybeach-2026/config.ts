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
  status: 'cancelled',
  startDate: '2026-10-22',
  endDate: '2026-10-25',
  datesLabel: 'October 22 – 25, 2026',
  tagline: 'Shelved — PyBeach dropped, SeaGL folded into the combined trip',
  description: 'The original two-conference weekend: SeaGL 2026 in Seattle on Friday, then a hop to Santa Monica for PyBeach 2026 on Saturday. PyBeach is off, and SeaGL now runs as the second half of the combined Core Sprint + SeaGL 2026 trip, with both conference days attended. Kept here for the Santa Monica and PyBeach research — worth revisiting in a future year.',
  accentColor: '#0E7C66',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [seattle, santaMonica],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
