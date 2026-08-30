# HTML Template Reference — Carlos Pano Design System

The `index.html` in this directory is the reference implementation from the Japan 2026 trip — the first
trip built with this pipeline. It is the canonical example of what Phase 4 should produce.

## What's here

- `index.html` — complete Japan 2026 travel guide (13 days, Tokyo + Kyoto + Osaka)
- This README

## What the agent needs to build a new trip

Copy from the user's template project at:
`/Users/cpanoh/Documents/cpano-98-local/GitHub/carlospano-sites/viajes/2026-japon/`

Files to copy into the new trip folder:
```
support.js
doc-page.js
image-slot.js
_ds/     (entire directory)
```

The new folder should live at:
`/Users/cpanoh/Documents/cpano-98-local/GitHub/carlospano-sites/viajes/[YYYY]-[destination]/`

## Key design decisions in the reference

- Cover page: dark navy + hero photo overlay + giant Poppins title
- All sections: letter-size pages (`<section class="page">`) with consistent padding
- TOC: 2-column grid, grouped by city with color-coded headers
- Day pages: morning/midday/afternoon/night blocks with transit and photo cards
- Photos: base64-embedded from Wikipedia (≤100KB each, time-of-day appropriate)
- Budget: grid table with daily totals, 3 shopping tiers at the bottom

For the full pattern details see `travel-planner/commands/travel-planner.md` → "HTML Template" section.
