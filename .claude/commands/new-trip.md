# Add a new trip to the mariatta-travels monorepo

Add a new trip to the `mariatta-travels` monorepo based on: $ARGUMENTS

This skill assumes the monorepo already exists at the current working directory (or the path the user specifies) — typically `~/github/mariatta/mariatta-travels/`. It does NOT create a new repo or copy an existing one. A trip is a folder of data files plus a two-line change in the registry.

## Parse the arguments

Extract the following from `$ARGUMENTS`. Use the defaults shown if not specified:

- **Country / destination** (required): The destination country, city, or event location
- **Cities** (optional): Specific cities to visit. If not provided, suggest 3–5 popular cities for the country and duration. For a **conference trip**, default to the single host city.
- **Dates** (required): Trip start and end dates. Convert to ISO `YYYY-MM-DD` for `startDate` and `endDate`.
- **Travelers** (optional): "family of 4", "couple", "solo", etc. Default: solo
- **Departing from** (optional): Home airport. Default: ask the user
- **Vehicle type** (optional): "EV" or "gas". Default: EV. When driving, calculate fuel/charging costs using EV rates unless the user specifies a gas car.
- **Events** (optional): Conferences, weddings, festivals, sprints, etc. If specified, the trip type defaults to `conference`; populate the `venue` field on the host city.
- **Purpose/theme** (optional): e.g. "food tour", "adventure", "relaxation", "conference + sightseeing". Influences itinerary and tips.
- **Home currency** (optional): The traveler's home currency. Default: CAD (matches the existing trips).
- **Status** (optional): `planning`, `confirmed`, or `cancelled`. Default: `planning`.

## What this skill does NOT touch

The monorepo provides all of these centrally — do not re-create them per trip:

- `src/layouts/` (Layout, TripLayout)
- `src/components/` (Nav, TripSections, TripNav, CityNav, Footer, HotelCard, RestaurantCard, DayCard, MapSection, and all `sections/*` — CitiesGrid, CityView, VenueBlock, EventCallout, IceCreamSpots, TripHero, TripStats, TripTips)
- `src/pages/` (index, about, `[trip]/*` dynamic routes)
- `public/` (favicon, icons, manifest)
- `astro.config.mjs`, `package.json`, `tsconfig.json`, `.github/workflows/deploy.yml`
- `src/data/types.ts` (unified type definitions — only edit if a genuinely new type is needed)

Adding a trip = creating its data folder + one edit to `src/data/trips.ts`.

## Determine the trip shape

Decide these first:

- **Trip slug**: `{country-or-theme}-{year}` — lowercase, hyphenated, ends with the year. Examples: `portugal-2026`, `taiwan-2026`, `lfnw-2026`, `core-sprint-2026`. This becomes the URL path (`travel.mariatta.ca/{slug}/`) and the registry key.
- **Trip type**:
  - `family` — multi-city vacation. Home page renders a cities grid linking to per-city pages.
  - `conference` — single city anchored to an event. Home page embeds the city view directly with a `venue` block. Default when the user mentions a conference, sprint, summit, or event.
- **Base currency**: the destination's local currency code (EUR, USD, JPY, TWD, GBP, etc.). Used by the budget page for display conversion.
- **Accent color**: pick a single flag or city color. Stored as a hex string (e.g. `#006B3F`).
- **Emoji**: destination flag or theme (🇵🇹 🇹🇼 🐍 🐧 ✈️).

## Files to create

Create one directory: `src/trips/<slug>/`

Inside it, create these files:

### `config.ts` — the trip's `TripConfig`

```ts
import type { TripConfig } from '../../data/types';
import { cityOne } from './city-one'; // import each city data file
import { budgetData } from './budget';
import { checklistData } from './checklist';
import { stats, tips } from './tips';

export const config: TripConfig = {
  id: '<slug>',
  title: '<Long Title, e.g. "Portugal 2026">',
  shortTitle: '<Short form, e.g. "Portugal">',
  emoji: '🇵🇹',
  type: 'family', // or 'conference'
  status: 'planning', // or 'confirmed' | 'cancelled'
  startDate: '2026-08-22', // ISO
  endDate: '2026-09-05',
  datesLabel: 'August – September 2026',
  tagline: 'Short one-line pitch',
  description: 'Longer description used as meta description',
  accentColor: '#006B3F',
  baseCurrency: 'EUR',
  sections: ['budget', 'checklist', 'log', 'sync'], // always include these
  cities: [cityOne /*, cityTwo, ... */],
  budget: budgetData,
  checklist: checklistData,
  stats,
  tips,
};
```

### City data files (one per city, e.g. `porto.ts`)

Use the `CityData` interface from `../../data/types`. Required fields:

- `name`, `slug`, `dates` (human-readable), `nights`, `tagline`, `accentColor` (per-city accent)
- `mapCenter: { lat, lng }`, `mapZoom` (default 13), `mapPoints: MapPoint[]`
- `hotels: Hotel[]` (3–4 per city), `restaurants: Restaurant[]` (3–5), `days: Day[]` (day-by-day itinerary)
- Optional: `transport` (note for moving to the next city), `venue` (required for conference host city), `iceCreamSpots` (for conference cities)

MapPoint types: `'attraction' | 'hotel' | 'restaurant' | 'ice-cream'`. Use real coordinates.

### `budget.ts`

Export `budgetData: BudgetCategory[]` with ~10 categories covering flights, accommodation, inter-city transport, food, local transport, activities, shopping, connectivity, events (if applicable), miscellaneous. Mix `pre-trip` and `during-trip` types. Items use the trip's `baseCurrency` for on-the-ground costs and the home currency (usually CAD) for pre-trip bookings.

### `checklist.ts`

Export `checklistData: ChecklistCategory[]` with categories covering flights & transport, accommodation, documents & insurance, event-specific items (if applicable), activities & bookings, money & connectivity, packing, pre-departure. For conference trips, include a `Scout ice cream selfie spot near venue 🍦` item in the event category.

### `tips.ts`

Export:
- `stats: TripStat[]` — 4 items for the hero stats strip: nights, cities, flight time (`~Xh YVR → XXX`), season (e.g. "Peak summer").
- `tips: TipCategory[]` — 4 categories: **Money & Payments**, **Weather & Packing**, **Getting Around**, **Practical Tips**. 4–6 tips each with `icon` (emoji), `title`, `body`. Cover currency, cards/cash, tipping, weather, packing, flights, transit, rideshare, power adapters, language, safety.

## Register the trip

Edit `src/data/trips.ts`:

1. Add `import { config as <slugCamelCase> } from '../trips/<slug>/config';` near the top.
2. Add `<slugCamelCase>,` to the `trips: TripConfig[]` array.

The registry sorts by `startDate` automatically, so order in the array doesn't matter.

## Adapting for traveler count

- **Hotel descriptions:** Adjust room type notes ("double room" for couples, "family room or 2 doubles" for families, "single" or "solo-friendly" for solo)
- **Budget estimates:** Scale food, activities, and transport based on traveler count
- **Flight budget:** ~$2,000 CAD equivalent per person for long-haul, ~$500–800 for short-haul
- **Driving costs:** Default to EV charging rates. Only use gas estimates if the user specifies "gas car".
- **Activity costs:** Use per-person pricing with the correct total for the group

## Adapting for conference / event trips

When `type: 'conference'` (or a family trip has a conference embedded in one city):

- Set `venue` on the conference host city with `name`, `eventName`, `address`, `neighbourhood`, `dates`, `hours`, `website`, `mapUrl`, `nearestTransit`, `accessNotes`, `contact`, `lat`, `lng`.
- Add event days to that city's itinerary with activity descriptions tied to the conference schedule.
- Add a dedicated conference category to `budget.ts` (registration, social events).
- Add event-specific `checklist.ts` items (register, schedule review, talk prep, badge/ID).
- For mixed trips (family vacation that includes a conference), the `EventCallout` on the trip home auto-renders because the host city has a `venue`. You do NOT add the callout manually.

### Ice Cream Selfie spots (conferences only)

Mariatta has a tradition of taking ice cream selfies at every conference. For any conference city:

- Research 3–5 highly-rated ice cream / gelato / frozen dessert shops near the venue and in the city.
- Populate `iceCreamSpots: IceCreamSpot[]` on the conference host city with each spot's `name`, `address`, `signatureFlavors`, `photoWorthy` note, `mapUrl`, `website` (optional), `lat`, `lng`.
- Add the same shops as `type: 'ice-cream'` entries in `mapPoints` so they render as pink 🍦 pins on the map.
- Add a checklist item: `Scout ice cream selfie spot near venue 🍦` with a note listing the scouted options.

The `IceCreamSpots` component renders automatically when a city has `iceCreamSpots` — no additional wiring.

## Important details

- Use real, accurate coordinates for map points
- Use real hotel / restaurant / venue names, ratings, and URLs
- Store all currency codes as plain strings (`'EUR'`, `'TWD'`, `'USD'`, `'CAD'`) — no fancy unions
- Keep `localStorage` keys trip-scoped — the monorepo already does this via the trip id (`travels-budget-<slug>`, `travels-checklist-<slug>`, etc.)
- Do NOT create a new Astro project, new repo, or new GitHub workflow
- Do NOT add PWA manifests, service workers, or favicons — shared at `public/`
- Do NOT edit shared layouts, components, or pages unless the user explicitly asks for a site-wide change
- Do NOT prompt the user during creation — build everything and verify

## Final steps

1. From the monorepo root, run `npm run build` and verify the new trip's pages compile (`/<slug>/`, `/<slug>/<city>/` for family trips, and the section pages).
2. Report the new URLs: `travel.mariatta.ca/<slug>/` and any city pages.
3. Remind the user to visit `/<slug>/` to spot-check data (hotel names, dates, venue details) and flip `status` to `confirmed` once the trip is booked.
4. Do NOT commit — let the user review the diff and commit manually.