---
name: travel-pipeline
description: A 4-phase travel planning methodology — Research → Itinerary → Budget → HTML Page — for turning raw destination ideas and confirmed bookings into a polished, day-by-day travel guide.
---

# Travel Planning Pipeline

A methodology for building complete, opinionated travel plans. Every phase produces a concrete deliverable;
no phase starts until the previous one is approved.

## Principle: confirmed bookings are anchors, not suggestions

Before researching anything, extract all confirmed reservations (flights, hotels, events, transport).
These are fixed points. The itinerary is built *around* them — never against them. A flight at 09:30
means the hotel night before needs a bag-storage plan, not an itinerary entry that starts at 10:00.

---

## The four phases

### Phase 1 — Destination Research ("the Intelligence")

**Input:** destination(s), travel dates, number and profile of travelers, confirmed bookings.
**Output:** for each city — best attractions (with timing notes), local transport guide, food highlights,
shopping zones, traveler tips, what to book in advance.

**How to research:**
- Search Reddit (`r/[CityTravel]`, `r/travel`): "tips", "itinerary", "first time" threads
- TripAdvisor, Lonely Planet, Google Travel for ranked attractions
- Official tourism sites for opening hours, prices, reservation requirements
- YouTube for experiential context ("visiting X at dawn vs noon")
- Traveler blogs in Spanish and English for on-the-ground insight

**What to extract per attraction:**
- Best time of day to visit (critical — many places are transformed at 7am vs 10am)
- Approximate visit duration
- Entry fee / free
- Whether advance booking is required
- Nearest transit stop + line
- What to eat/buy nearby

**Geographic clustering (critical output):**
Group attractions by zone within each city. The goal is "days by zone" — all east-side spots
on the same day, all west-side spots on another. Never cross a city twice in one day.

---

### Phase 2 — Itinerary Architecture ("the Route")

**Input:** Phase 1 research + confirmed bookings as fixed anchors.
**Output:** day-by-day schedule for every day of the trip.

**Structure per day:**
- Morning block / Midday block / Afternoon block / Night block
- For each block: place, activity, duration estimate
- Transit between each block: line name, departure stop, arrival stop, duration, cost
- Meal recommendation for each zone: dish + price range
- Shopping opportunity: what and where
- Traveler tip: non-obvious insight that only a person who has been there knows

**Optimization rules:**
1. Anchor on confirmed bookings — build the rest of the day around fixed times
2. Earliest places first — popular attractions always before 9am if possible
3. Same zone same day — minimize cross-city transit
4. Realistic buffers — add 20 min travel buffer between each stop, 30 min for meals
5. Rest time — at least one 60-min rest window per day, especially in long trips
6. Last night in a city = lighter schedule + packing time

**Transit specifics required:**
Every transit mention must include: line name (color/number), origin station, destination station,
estimated minutes, cost in local currency. No vague "take the metro."

---

### Phase 3 — Budget ("the Numbers")

**Input:** confirmed bookings (already paid) + Phase 2 itinerary.
**Output:** day-by-day budget per person in local currency + USD + MXN.

**Categories:**
| Category | What to include |
|----------|----------------|
| Food | Breakfast + lunch + dinner + snacks/desserts/street food |
| Local transport | Metro, bus, local train, occasional taxi |
| Entries | Only attractions not yet paid |
| Shopping | Three tiers: light / normal / intense |
| Misc | Coin lockers, tips (some countries), water, sundries |

**Rules:**
- Always separate "already paid" from "to pay on the ground"
- Show per-person AND group total
- Three shopping tiers so the user can choose their scenario
- Always include: local currency + USD + MXN (note that rates are approximate)
- Recommend how much cash to bring vs card

---

### Phase 4 — HTML Travel Page ("the Guide")

**Input:** Phases 1-3 approved content + user's HTML template.
**Output:** complete, self-contained HTML file ready to read and consult on the road.

**Page structure:**
```
01 Cover page        — hero photo, title, dates, travelers
02 Index             — page-by-page table of contents with preview photos  
03 Bookings          — all confirmed reservations, what's pending, logistics alerts
04 Budget            — Phase 3 table, per day per person
05 Packing list      — destination-specific (climate, activities)
06 Phrases + contacts — local language basics, emergency numbers, embassy
[City A intro]       — zones map, must-do list, top restaurants, what to buy
[Day pages]          — one section per day (morning/midday/afternoon/night blocks)
[City B intro]       — same structure
[Day pages]          — ...
[Notes pages]        — blank pages for handwritten notes
```

**For Carlos Pano's template specifically:**
- Template location: `/Users/cpanoh/Documents/cpano-98-local/GitHub/carlospano-sites/viajes/`
- Create new folder: `viajes/[YYYY]-[destination]/`
- Copy from reference: `support.js`, `doc-page.js`, `image-slot.js`
- Design system: `_ds/carlos-pano-design-system-*/` (copy from reference project)
- Colors: `#0B132B` navy · `#5D79FF` blue · `#00C1A2` green · `#172933` text · `#A3ACB1` muted
- Fonts: Inter (body), Poppins (headings)
- Element: `<doc-page size="letter">` wrapping `<section class="page">` elements

**Photos:**
Fetch real photos from Wikipedia API, embed as base64 data URIs:
```bash
curl -sL "https://en.wikipedia.org/w/api.php?action=query&titles=PLACE_NAME&prop=pageimages&format=json&pithumbsize=500"
```
Then download the returned URL and base64-encode. Keep each image ≤100KB. Total HTML target ≤5MB.

**PDF note:**
If the user shares booking PDFs with custom CID fonts (garbled text), render them as PNG first:
```bash
qlmanage -t -s 1200 -o /tmp/ file.pdf
```
Then use the Read tool to view the image visually.

---

### Phase 5 — Traveler Profile ("the Memory")

**Optional but highly recommended.** Collect this once; reuse it on every future trip.

**Profile fields to collect:**
```
travel_style: adventurous / cultural / relaxed / family / digital-nomad
budget_level: budget / mid-range / luxury
pace_preference: packed / moderate / relaxed
accommodation_preference: hostel / hotel / boutique / airbnb / resort
interests: [culture, food, hiking, photography, nightlife, nature, shopping, wellness…]
dietary_restrictions: [vegetarian, vegan, allergies, halal, kosher…]
travel_companions: solo / couple / family / group
languages_spoken: [list]
travel_experience: beginner / intermediate / experienced
previous_destinations: [list]
bucket_list: [{destination, notes}]
```

Save to: `~/.claude/travel_planner/profile.json`
Load at the start of every `/travel-planner` run — skip the questions if the profile already exists.

---

## Approval gates

```
[Phase 1 research] → user approves → [Phase 2 itinerary] → user approves
→ [Phase 3 budget] → user approves → [Phase 4 HTML]
```

Never skip a gate. If the user only wants part of the pipeline (e.g. just the itinerary, or just the
budget), that is fine — run only the requested phases.

---

## Additional capabilities (invoke on request)

### Destination Comparison
When the user hasn't decided where to go yet, compare 3-5 options across:
- Match score against their interests and deal-breakers
- Weather during their travel window
- Estimated total cost (flights + hotel + daily expenses)
- Flight time from home city
- Safety assessment for their traveler profile
- Visa requirements
- Unique selling point vs biggest downside
Output: comparison matrix + clear recommendation with reasoning.

### Multi-City Routing
When the trip visits multiple cities, optimize the route:
- Logical city order (minimize backtracking)
- Recommended days per city
- Best transport between each leg (train/bus/flight) with time and cost
- Overnight transport opportunities (save a hotel night)
- Buffer days for spontaneity
- Cut list if the timeline is too tight

### Solo Travel Safety Plan
When traveling solo, add a safety section to the HTML:
- Destination-specific risks for their profile
- Daily safety habits (valuables, phone backup, navigation)
- Social safety (meeting travelers, going out at night)
- Emergency plan: if robbed, injured, or something feels wrong
- Tech setup: offline maps, translation app, emergency contacts
- Intuition rules: when leaving is always the right call
