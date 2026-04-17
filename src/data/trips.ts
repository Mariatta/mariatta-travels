import type { TripConfig, EffectiveTripStatus } from './types';
import { config as lfnw2026 } from '../trips/lfnw-2026/config';
import { config as portugal2026 } from '../trips/portugal-2026/config';
import { config as taiwan2026 } from '../trips/taiwan-2026/config';
import { config as coreSprint2026 } from '../trips/core-sprint-2026/config';
import { config as pyconUs2026 } from '../trips/pycon-us-2026/config';
import { config as pycascades2026 } from '../trips/pycascades-2026/config';
import { config as gwuOscon2026 } from '../trips/gwu-oscon-2026/config';

export const trips: TripConfig[] = [
  lfnw2026,
  portugal2026,
  taiwan2026,
  coreSprint2026,
  pyconUs2026,
  pycascades2026,
  gwuOscon2026,
].sort((a, b) => a.startDate.localeCompare(b.startDate));

const todayIso = new Date().toISOString().slice(0, 10);

export function getEffectiveStatus(trip: TripConfig): EffectiveTripStatus {
  if (trip.status === 'cancelled') return 'cancelled';
  if (trip.endDate < todayIso) return 'completed';
  return trip.status;
}

export function getTrip(id: string): TripConfig | undefined {
  return trips.find(t => t.id === id);
}

export function getTripNeighbours(id: string): { prev: TripConfig | null; next: TripConfig | null } {
  const i = trips.findIndex(t => t.id === id);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? trips[i - 1] : null,
    next: i < trips.length - 1 ? trips[i + 1] : null,
  };
}

export const upcomingTrips = trips.filter(t => {
  const s = getEffectiveStatus(t);
  return s === 'planning' || s === 'confirmed';
});
export const completedTrips = trips.filter(t => getEffectiveStatus(t) === 'completed');
export const shelvedTrips = trips.filter(t => getEffectiveStatus(t) === 'cancelled');