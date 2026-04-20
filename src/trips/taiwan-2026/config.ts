import type { TripConfig } from '../../data/types';
import { taipeiData } from './taipei';
import { hualienData } from './hualien';
import { taichungData } from './taichung';
import { tainanData } from './tainan';
import { kaohsiungData } from './kaohsiung';
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: 'taiwan-2026',
  title: 'Taiwan 2026',
  shortTitle: 'Taiwan',
  emoji: '🇹🇼',
  type: 'family',
  status: 'planning',
  startDate: '2026-08-22',
  endDate: '2026-09-10',
  datesLabel: 'August – September 2026',
  tagline: 'Taipei, Hualien, Taichung, Tainan & Kaohsiung',
  description: 'A family travel guide to Taipei, Hualien, Taichung, Tainan & Kaohsiung',
  accentColor: '#C62828',
  baseCurrency: 'TWD',
  sections: ['budget', 'checklist', 'log'],
  cities: [taipeiData, hualienData, taichungData, tainanData, kaohsiungData],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};