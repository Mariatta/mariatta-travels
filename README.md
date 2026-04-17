# ✈️ Mariatta Travels

A monorepo of trip planners — family vacations and conference trips — built with Astro and deployed at [travel.mariatta.ca](https://travel.mariatta.ca).

Each trip has its own URL (`/portugal-2026/`, `/lfnw-2026/`, `/core-sprint-2026/`, etc.) and shares a common layout, component set, and data schema. Adding a new trip is a folder of data files plus one line in the registry.

## What's inside

- Chronological **hub page** listing all trips (Upcoming, Archive, Shelved)
- **Family trip** layout — multi-city grid linking to per-city pages with map, hotels, restaurants, and day-by-day itinerary
- **Conference trip** layout — single city with a dedicated venue block, ice cream selfie spots, and an event callout that surfaces on mixed trips
- **Budget tracker** per trip — Chart.js visualisations, multi-currency toggle, editable exchange rate
- **Planning checklist** per trip — progress bar, category totals, persisted in localStorage
- **Import/Export** page per trip — download as JSON, upload to another device, merge or replace

See [`CLAUDE.md`](./CLAUDE.md) for the architecture and schema.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4321 (or whichever port Vite lands on).

## Adding a new trip

There's a slash command for it. Install it once:

```bash
./install.sh
```

This symlinks `.claude/commands/new-trip.md` into `~/.claude/commands/` so the `/new-trip` command works from any directory in Claude Code. Since it's a symlink, pulling updates to this repo auto-updates the command — no reinstall needed.

Then in Claude Code:

```
/new-trip Japan, 2 weeks, family of 4, home from YVR, Oct 2026
```

Claude reads `.claude/commands/new-trip.md`, creates `src/trips/japan-2026/` with all the data files, wires it into `src/data/trips.ts`, and runs a build to verify.

If you'd rather do it by hand, see the "Adding a new trip" section in [`CLAUDE.md`](./CLAUDE.md).

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Source** → **GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` triggers on every push to `main`.
4. Point your custom domain (e.g. `travel.mariatta.ca`) via a `CNAME` file or the Pages settings.

## Editing content

All trip data is under `src/trips/<slug>/`:
- `config.ts` — trip metadata (title, dates, type, accent colour, status)
- `<city>.ts` — hotels, restaurants, itinerary, map points, optional venue + ice cream spots
- `budget.ts` — expense categories and estimates
- `checklist.ts` — planning tasks
- `tips.ts` — stats strip and travel tips

Edit those files and the pages update automatically on the next dev reload or build.