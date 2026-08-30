# Travel Planner Plugin

A 4-phase travel planning pipeline for turning confirmed bookings and destination goals into a polished,
print-ready day-by-day travel guide — researched, optimized, budgeted, and beautifully typeset.

## Usage

```
/travel-planner Tokyo, Kyoto, Osaka · October 17-29, 2026
```

Or just `/travel-planner` — the orchestrator will ask you for details.

## Modes

### New trip — 4-phase pipeline
`/travel-planner Tokyo, Kyoto, Osaka · October 2026`

| Phase | What happens | Specialist |
|-------|-------------|-----------|
| 1 · Research | Deep search of Reddit, TripAdvisor, and tourism sites per city: timing, zones, transit, food, shopping, visa, safety, cultural etiquette | `destination-researcher` |
| 2 · Itinerary | Day-by-day schedule anchored on confirmed bookings; exact transit (line, stops, time, cost); geographically optimized; packing + pre-trip timeline | `itinerary-architect` |
| 3 · Budget | Per-person daily table in local currency + USD + MXN; 3 shopping tiers; already-paid separated | `itinerary-architect` |
| 4 · HTML Guide | Responsive web app: sticky nav, day chips, today-highlighting, city hero cards, route flows, photo pairs, full section suite | `html-travel-page` |

### Update existing trip
`/trip-update [folder path]`

Audits an existing trip HTML, upgrades it to the current web template, fills missing sections (pre-trip
timeline, cultural etiquette, safety, etc.), replaces placeholder images with real Wikipedia photos,
and republishes the Artifact — without touching any confirmed content.

| Specialist |
|-----------|
| `trip-updater` |

Each phase is reviewed and approved by the user before the next begins.

## Files

```
commands/
  travel-planner.md              — main orchestrator (/travel-planner + /trip-update)

agents/
  destination-researcher.md      — Phase 1: research, visa, safety, cultural etiquette
  itinerary-architect.md         — Phase 2+3: itinerary, budget, packing, pre-trip timeline
  html-travel-page.md            — Phase 4: responsive web guide with real photos
  trip-updater.md                — Update existing trip to current template

skills/travel-pipeline/
  SKILL.md                       — canonical methodology (4 phases + traveler profile)
  references/
    destination-tips.md          — accumulated knowledge per destination
    cultural-etiquette-template.md — etiquette research structure
    travel-guidelines.md         — quality rules for every phase
    html-template/
      index.html                 — Japan 2026 web reference (t3.dc.html — the good one)
      support.js / doc-page.js / image-slot.js / _ds/ / img/
      README.md
```

## The HTML output

Built on Carlos Pano's design system (`doc-page` custom element, letter-size pages).
Reference implementation: `/Users/cpanoh/Documents/cpano-98-local/GitHub/carlospano-sites/viajes/2026-japon/`

Each new trip is created at:
`/Users/cpanoh/Documents/cpano-98-local/GitHub/carlospano-sites/viajes/[YYYY]-[destination]/`

Photos are fetched from Wikipedia API and embedded as base64 — the file is fully self-contained.
The final guide is also published as a Claude Artifact.

## Accumulated destinations

See `skills/travel-pipeline/references/destination-tips.md` for on-the-ground tips, timing intel,
and budget references accumulated from real trips.

Current destinations: 🗾 Japan (Tokyo · Kyoto · Osaka · Nara)
