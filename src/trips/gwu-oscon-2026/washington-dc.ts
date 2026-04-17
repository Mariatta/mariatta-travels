import type { CityData } from '../../data/types';

export const washingtonDc: CityData = {
  name: 'Washington DC',
  slug: 'washington-dc',
  dates: 'March 22 – 25, 2026',
  nights: 3,
  tagline: 'GWU OSCON — closing keynote on 10 years in Open Source',
  accentColor: '#033C5A',
  mapCenter: { lat: 38.8997, lng: -77.0489 },
  mapZoom: 14,

  venue: {
    name: 'George Washington University',
    eventName: 'GWU OSCON 2026',
    address: 'George Washington University, 2121 I St NW, Washington, DC 20052',
    neighbourhood: 'Foggy Bottom',
    dates: 'March 23 – 24, 2026 (Mon – Tue)',
    hours: 'Full conference days both days',
    website: 'https://www.gwu.edu',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=George+Washington+University+Foggy+Bottom',
    nearestTransit: 'Foggy Bottom–GWU Metro (Blue/Orange/Silver lines) — on campus',
    accessNotes: 'Venue on GWU\'s Foggy Bottom campus; Arc Hotel is a short walk away.',
    lat: 38.8997,
    lng: -77.0489,
  },

  mapPoints: [
    { name: 'George Washington University (Foggy Bottom)', type: 'attraction', lat: 38.8997, lng: -77.0489 },
    { name: 'Arc Hotel Washington DC', type: 'hotel', lat: 38.9012, lng: -77.0497 },
    { name: 'Lincoln Memorial', type: 'attraction', lat: 38.8893, lng: -77.0502 },
    { name: 'National Mall', type: 'attraction', lat: 38.8895, lng: -77.0353 },
    { name: 'Kennedy Center', type: 'attraction', lat: 38.8955, lng: -77.0555 },
    { name: 'Georgetown', type: 'attraction', lat: 38.9076, lng: -77.0723 },
  ],

  days: [
    {
      dayNum: 1, date: 'March 22 (Sun)', title: 'Travel Day — YVR to DCA',
      activities: [
        { description: 'Fly YVR → DCA (or IAD) — travel day', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Reagan+National+Airport' },
        { description: 'Check in to Arc Hotel, Foggy Bottom', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arc+Hotel+Washington+DC' },
        { description: 'Light dinner near campus; rest before conference days' },
      ],
    },
    {
      dayNum: 2, date: 'March 23 (Mon)', title: 'GWU OSCON — Day 1',
      activities: [
        { description: 'GWU OSCON Day 1 — sessions and hallway track at GWU Foggy Bottom campus', mapUrl: 'https://www.google.com/maps/search/?api=1&query=George+Washington+University' },
        { description: 'Network with the open-source community' },
      ],
    },
    {
      dayNum: 3, date: 'March 24 (Tue)', title: 'GWU OSCON — Closing Keynote 🎤',
      activities: [
        { description: 'GWU OSCON Day 2 — talks and final networking' },
        { description: '🎤 Delivered the closing keynote: "Learnings and reflections from 10 years in Open Source"' },
        { description: 'Post-keynote Q&A and dinner with conference folks' },
      ],
    },
    {
      dayNum: 4, date: 'March 25 (Wed)', title: 'Departure',
      activities: [
        { description: 'Check out of Arc Hotel; head to DCA/IAD' },
        { description: 'Flight home to YVR' },
      ],
    },
  ],

  hotels: [
    {
      name: 'Arc Hotel Washington DC, Foggy Bottom',
      rating: 4.3,
      ratingCount: '1.2k',
      price: '$$$',
      priceLabel: 'Splurge',
      tags: ['Foggy Bottom', 'Walk to GWU', 'Curio Collection by Hilton'],
      description: 'Boutique Curio Collection hotel in Foggy Bottom, a short walk from the GWU campus and the conference venue. Quiet rooms, on-site dining, and easy Metro access for sightseeing on either side of the conference.',
      tip: 'Best for: Walking distance to GWU OSCON',
      website: 'https://www.hilton.com/en/hotels/dcaaqqq-arc-hotel-washington-dc-georgetown/',
    },
  ],

  restaurants: [],
};
