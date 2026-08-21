export type TripType = 'family' | 'conference';

export type TripStatus = 'planning' | 'confirmed' | 'cancelled';

export type EffectiveTripStatus = TripStatus | 'completed';

export type SectionId =
  | 'budget'
  | 'checklist'
  | 'log'
  | 'phrases'
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
  /**
   * True for hotels that are part of the event's official room block.
   * Block hotels stay public (to help promote the event). Untagged
   * (personal-pick) hotels are hidden from public builds but still
   * visible in local planning.
   */
  inEventBlock?: boolean;
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
  /**
   * Explicit Google Maps link for the card's ↗. Omit and the card builds a
   * search from the name plus the city hint, same as the map popups.
   */
  mapUrl?: string;
  /**
   * True for restaurants that are part of the event's official food
   * listing / sponsor guide. Same semantics as Hotel.inEventBlock —
   * untagged entries are personal picks and stay private on public builds.
   */
  inEventBlock?: boolean;
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
  /** Street address, shown in the map popup when present. */
  address?: string;
  /**
   * Explicit Google Maps link for the popup. Omit and the popup builds a
   * search URL from the name plus the city's `name` / `country`, which is
   * enough for anywhere with an unambiguous name.
   */
  mapUrl?: string;
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
  /**
   * Emoji for the event callout on the trip home. Defaults to 🎤, which suits
   * a talk-driven conference. Override it for events that aren't about
   * speaking — a sprint is 💻, a workshop 🛠️.
   */
  icon?: string;
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
  /** Disambiguates map-popup searches, e.g. 'Portugal'. */
  country?: string;
  /** Overrides the `name, country` suffix when the display name is not a clean search term. */
  mapSearchHint?: string;
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

export interface Phrase {
  /** What you want to say, in English. */
  en: string;
  /** How it's written locally, in the local script. */
  native: string;
  /** Phonetic respelling for an English speaker. CAPS marks the stressed syllable. */
  pronunciation: string;
  /** Romanization when the native script isn't Latin (pinyin, romaji, ...). */
  romanized?: string;
  /** Word-for-word meaning, when it explains the phrasing. */
  literal?: string;
  /** Usage note — formality, gender agreement, when not to say it. */
  note?: string;
  /**
   * Text handed to the browser's speech synthesis, when `native` isn't what
   * should be read aloud (e.g. a phrase written with a placeholder).
   */
  speak?: string;
}

export interface PhraseCategory {
  id: string;
  title: string;
  emoji: string;
  intro?: string;
  /** 'grid' packs short entries (numbers, days) into columns. Defaults to 'list'. */
  layout?: 'list' | 'grid';
  phrases: Phrase[];
}

/** One line of the "how the letters sound" key at the top of a phrasebook. */
export interface PronunciationRule {
  /** The letter, cluster, or tone being explained. */
  sound: string;
  /** How to make it, described for an English speaker. */
  as: string;
  example?: string;
}

export interface PhraseBook {
  /** Language as travellers know it — 'European Portuguese', 'Mandarin Chinese'. */
  language: string;
  /** The language's name in itself — 'Português', '中文'. */
  nativeName: string;
  /** BCP-47 tag for browser speech synthesis — 'pt-PT', 'zh-TW'. */
  speechLang: string;
  intro?: string;
  /** How much English gets you, and where it doesn't. */
  englishNote?: string;
  pronunciationKey?: PronunciationRule[];
  categories: PhraseCategory[];
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
  /** Only for trips where the local language isn't English. Drives the Phrases section. */
  phrases?: PhraseBook;
}