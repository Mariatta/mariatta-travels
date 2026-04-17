# mariatta-travels

Monorepo of Mariatta's trip planners, deployed as a static Astro site at `travel.mariatta.ca`. Each trip lives at its own URL path (`/portugal-2026/`, `/lfnw-2026/`, `/core-sprint-2026/`, etc.) and shares the layout, components, and data schema.

## What lives where

```
src/
├── data/
│   ├── types.ts          # Unified TypeScript types (TripConfig, CityData, Hotel, Venue, etc.)
│   └── trips.ts          # Trip registry — imports each config.ts, exports the chronological list
├── trips/
│   └── <slug>/           # One folder per trip
│       ├── config.ts     # Exports TripConfig
│       ├── <city>.ts     # One file per city (family trips) or a single city (conference trips)
│       ├── budget.ts     # Exports BudgetCategory[]
│       ├── checklist.ts  # Exports ChecklistCategory[]
│       └── tips.ts       # Exports stats + TipCategory[]
├── layouts/
│   ├── Layout.astro      # Base HTML head, fonts, theme colour
│   └── TripLayout.astro  # Wraps Layout, adds two-tier nav + footer + prev/next
├── components/
│   ├── Nav.astro         # Site-wide top nav (brand · All trips · About)
│   ├── TripSections.astro# Second-row nav inside a trip (Overview · Budget · Checklist · ...)
│   ├── TripNav.astro     # Footer prev/next between trips
│   ├── CityNav.astro     # Footer prev/next between cities inside a multi-city trip
│   ├── Footer.astro      # Shared footer with social links
│   ├── HotelCard.astro   # Renders a Hotel
│   ├── RestaurantCard.astro
│   ├── DayCard.astro     # Renders a Day with activities + map/url links
│   ├── MapSection.astro  # Leaflet map with attractions / hotels / restaurants / ice-cream pins
│   └── sections/         # Composable content blocks used by the trip home + city pages
│       ├── TripHero.astro
│       ├── TripStats.astro
│       ├── CitiesGrid.astro
│       ├── CityView.astro
│       ├── VenueBlock.astro
│       ├── EventCallout.astro
│       ├── IceCreamSpots.astro
│       └── TripTips.astro
└── pages/
    ├── index.astro       # Hub — lists all trips (Upcoming, Archive, Shelved)
    ├── about.astro       # About + changelog
    └── [trip]/
        ├── index.astro   # Trip home (renders hero, stats, cities grid OR venue view, tips)
        ├── [city].astro  # City page (only for family trips with >1 city)
        ├── budget.astro
        ├── checklist.astro
        ├── log.astro     # Quick-entry expense form
        └── sync.astro    # Import / export JSON
```

## Core concepts

### TripConfig
The shape of a trip. See `src/data/types.ts` for the full definition. Key fields:

- `id` — URL slug (`portugal-2026`)
- `type` — `'family'` (multi-city vacation, renders CitiesGrid on home) or `'conference'` (single city with `venue`, renders CityView directly)
- `status` — `'planning'` | `'confirmed'` | `'cancelled'`. `'completed'` is auto-derived when `endDate < today`.
- `startDate` / `endDate` — ISO `YYYY-MM-DD`. Used for chronological sorting and the auto-`completed` status.
- `sections` — which section pages this trip has. Almost always `['budget', 'checklist', 'log', 'sync']`. The `about` is only on the site-level, not per trip.
- `cities` — at least one `CityData`. Multi-city trips render a grid; single-city trips render inline.
- `stats`, `tips` — optional content for the trip home.

### Pluggable section model
The trip home page (`src/pages/[trip]/index.astro`) composes sections based on the trip shape:

- Always: `TripHero` + `TripStats` (if present) + `TripTips` (if present)
- Family with multiple cities: `EventCallout` (if any city has a `venue`) + `CitiesGrid`
- Conference or single-city: `CityView` embedded (hero hidden, shows map + venue + itinerary + hotels + restaurants + ice cream spots)

The city page (`[city].astro`) uses `CityView` with the full hero.

### Two-tier nav
- Row 1: site-wide — `✈️ Mariatta Travels · All trips · About` (from `Nav.astro`)
- Row 2: trip-scoped — `{emoji} {shortTitle} │ Overview · Budget · Checklist · Log · Sync` (from `TripSections.astro`), only inside a trip

The `--accent` CSS variable on `.trip-scope` in `TripLayout` propagates the trip's accent colour to all buttons, active nav states, progress bars, and chart accents inside the trip.

### localStorage keys
All trip-scoped data uses the `travels-<kind>-<trip-id>` pattern:
- `travels-budget-<trip-id>` — array of expense entries
- `travels-checklist-<trip-id>` — object of `{ itemId: true }`
- `travels-rate-<trip-id>` — exchange rate (number)
- `travels-display-<trip-id>` — display currency (`'CAD'` or the trip's `baseCurrency`)

Keys never cross trips.

## Adding a new trip

Use the `/new-trip` slash command. See `.claude/commands/new-trip.md` for the full spec. Run `./install.sh` once to symlink it into `~/.claude/commands/` so it works from any directory.

Manually: create `src/trips/<slug>/` with `config.ts`, city data files, `budget.ts`, `checklist.ts`, `tips.ts`. Then add two lines to `src/data/trips.ts` — an import and an array entry. Everything else is automatic.

## Dev commands

```bash
npm install      # first time
npm run dev      # dev server (likely :4321 or next free port)
npm run build    # static build to dist/
npm run preview  # preview the built site
```

## Conventions

- Currency values are plain strings (`'EUR'`, `'TWD'`, `'CAD'`, `'USD'`) — not unions
- Price fields on `Hotel` / `Restaurant` are strings (`'$'`, `'$$'`, `'NT$$'`) — not unions
- Coordinates on map points and venues should be real
- Trip accent colours are hex strings (no named CSS variables per trip)
- No `mkdir`/file creation in shared dirs when adding a trip — only under `src/trips/<slug>/`
- Trip-scoped CSS inherits `--accent` from `TripLayout`; don't redefine it in per-page styles