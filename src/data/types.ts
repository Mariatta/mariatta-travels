export type TripType = 'family' | 'conference';

export type TripStatus = 'planning' | 'confirmed' | 'cancelled';

export type EffectiveTripStatus = TripStatus | 'completed';

export type SectionId =
  | 'budget'
  | 'checklist'
  | 'log'
  | 'sync'
  | 'about';

export interface Hotel {
  name: string;
  rating: number;
  ratingCount: string;
  price: string;
  priceLabel: string;
  tags: string[];
  description: string;
  tip: string;
  website?: string;
}

export interface Restaurant {
  name: string;
  rating: number;
  ratingCount: string;
  price: string;
  tags: string[];
  description: string;
  mustTry: string;
  hours?: string;
  bookAhead?: boolean;
}

export interface Activity {
  description: string;
  url?: string;
  mapUrl?: string;
}

export interface Day {
  dayNum: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
  dueBy?: string;
  url?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  emoji: string;
  items: ChecklistItem[];
}

export interface MapPoint {
  name: string;
  type: 'attraction' | 'hotel' | 'restaurant' | 'ice-cream';
  lat: number;
  lng: number;
}

export interface IceCreamSpot {
  name: string;
  address: string;
  signatureFlavors: string;
  photoWorthy: string;
  mapUrl?: string;
  website?: string;
  lat?: number;
  lng?: number;
}

export interface BudgetItem {
  id: string;
  label: string;
  estimated: number;
  currency: string;
  note?: string;
}

export interface BudgetCategory {
  id: string;
  title: string;
  emoji: string;
  type: 'pre-trip' | 'during-trip';
  items: BudgetItem[];
}

export interface Expense {
  id: string;
  categoryId: string;
  description: string;
  amount: number;
  date: string;
  city?: string;
}

export interface Venue {
  name: string;
  eventName: string;
  address: string;
  neighbourhood?: string;
  dates: string;
  hours?: string;
  website?: string;
  mapUrl?: string;
  nearestTransit?: string;
  accessNotes?: string;
  contact?: string;
  lat?: number;
  lng?: number;
}

export interface CityData {
  name: string;
  slug: string;
  dates: string;
  nights: number;
  tagline: string;
  accentColor: string;
  transport?: string;
  mapCenter: { lat: number; lng: number };
  mapZoom?: number;
  mapPoints: MapPoint[];
  venue?: Venue;
  iceCreamSpots?: IceCreamSpot[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  days: Day[];
}

export interface TripStat {
  num: string;
  label: string;
}

export interface Tip {
  icon: string;
  title: string;
  body: string;
}

export interface TipCategory {
  label: string;
  tips: Tip[];
}

export interface TripConfig {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  type: TripType;
  status: TripStatus;
  startDate: string;
  endDate: string;
  datesLabel: string;
  tagline: string;
  description: string;
  accentColor: string;
  baseCurrency: string;
  sections: SectionId[];
  cities: CityData[];
  budget: BudgetCategory[];
  checklist: ChecklistCategory[];
  stats?: TripStat[];
  tips?: TipCategory[];
}