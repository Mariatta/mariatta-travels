import type { TripConfig } from '../../data/types';
import { washingtonDc } from './washington-dc';
import { budgetData } from './budget';
import { checklistData } from './checklist';

export const config: TripConfig = {
  id: 'gwu-oscon-2026',
  title: 'GWU OSCON 2026',
  shortTitle: 'GWU OSCON',
  emoji: '🏛️',
  type: 'conference',
  status: 'confirmed',
  startDate: '2026-03-22',
  endDate: '2026-03-25',
  datesLabel: 'March 22 – 25, 2026',
  tagline: 'Closing keynote at GWU OSCON — 10 years in Open Source',
  description: 'GWU OSCON 2026 in Washington DC — delivered the closing keynote reflecting on 10 years in Open Source.',
  accentColor: '#033C5A',
  baseCurrency: 'USD',
  sections: ['budget', 'checklist', 'log', 'sync'],
  cities: [washingtonDc],
  budget: budgetData,
  checklist: checklistData,
};
