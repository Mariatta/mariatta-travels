import type { TripConfig } from '../../data/types';
import { sanFrancisco } from './san-francisco';
import { seattle } from './seattle';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'sprint-seagl-2026',
  title: 'Core Sprint + SeaGL 2026',
  shortTitle: 'Sprint + SeaGL',
  emoji: '🐍🐧',
  type: 'family',
  status: 'confirmed',
  startDate: '2026-10-18',
  endDate: '2026-10-25',
  datesLabel: 'October 18 – 25, 2026',
  tagline: 'One trip, two events — YVR → SFO → SEA, then the drive home',
  description: 'The Python Core Dev Sprint at OpenAI in San Francisco Monday to Wednesday, a Thursday hop north to Seattle, then both days of SeaGL 2026 on the UW campus. Flying one-way into SFO and one-way to SEA, and getting picked up for the drive back to Vancouver on Sunday.',
  accentColor: '#155E75',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log'],
  cities: [sanFrancisco, seattle],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
