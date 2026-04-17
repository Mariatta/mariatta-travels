import type { CityData } from '../../data/types';

export const vancouver: CityData = {
  name: 'Vancouver',
  slug: 'vancouver',
  dates: 'March 21, 2026',
  nights: 0,
  tagline: 'Local day trip — PyCascades 2026, Vancouver BC',
  accentColor: '#0E7C66',
  mapCenter: { lat: 49.2827, lng: -123.1207 },
  mapZoom: 13,

  venue: {
    name: 'PyCascades 2026',
    eventName: 'PyCascades 2026',
    address: 'Downtown Vancouver, BC',
    neighbourhood: 'Downtown Vancouver',
    dates: 'March 20 – 22, 2026 (Fri – Sun)',
    hours: 'Full conference weekend; Mariatta attended Sat March 21',
    website: 'https://2026.pycascades.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Downtown+Vancouver+BC',
    nearestTransit: 'SkyTrain to downtown Vancouver',
    accessNotes: 'Day trip — commuted from home, no hotel stay.',
    lat: 49.2827,
    lng: -123.1207,
  },

  mapPoints: [
    { name: 'Downtown Vancouver', type: 'attraction', lat: 49.2827, lng: -123.1207 },
  ],

  days: [
    {
      dayNum: 1, date: 'March 21 (Sat)', title: 'PyCascades 2026 — No Spreadsheets!',
      activities: [
        { description: 'Commute into downtown Vancouver — day trip, no hotel stay' },
        { description: '🎤 Delivered the "No More Spreadsheets!" talk — PyLadiesCon infrastructure in Python and Django', url: 'https://2026.pycascades.com' },
        { description: 'Conference talks + hallway track' },
        { description: 'Commute home in the evening' },
      ],
    },
  ],

  hotels: [],
  restaurants: [],
};
