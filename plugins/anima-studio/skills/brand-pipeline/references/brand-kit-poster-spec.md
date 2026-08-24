# Phase 5 — Brand Book as a visual Brand Kit board

The Brand Book stays editorial in *voice* (see `brandbook-vs-guidelines.md`) but must not ship as
prose-only. A real agency deliverable — the kind a client would actually pay for and frame — is a dense,
visually-composed board: logo system, color, typography, and real application mockups on one coherent
sheet or print piece, with just enough usage guidance (clear space, minimum size, one or two "don't"s) that
it reads as authoritative, not just inspirational. This reference sets the quality bar and the panel
taxonomy for that board. It does not cover logo *concepting* — the mark is already decided by Phase 2;
Phase 5 presents it, never redesigns it.

Produce the board with the `design` skill (multi-artboard canvas, print-ready — see "Print craft" in that
skill) so it exports to PDF/PNG directly. Never hand back a plain scroll of Markdown prose and call it a
Brand Book.

## Ground every panel in what was actually approved

This is the one rule that matters more than any layout advice: **every color, wordmark treatment, mockup,
and line of copy on the board must trace back to an approved Phase 1–4 decision.** Nothing invented, no
placeholder logo, no generic stock-photo mood, no filler stat. A brand-kit board is a *record* of decisions
already made, staged beautifully — not a fresh creative pass. If a panel would require inventing something
that was never decided, leave it out or mark it an open question, the same discipline used everywhere else
in this pipeline.

## Panel taxonomy (adapt count/order to the brand; don't force all of them)

| Panel | Contents |
|---|---|
| Cover | Wordmark/mark at scale, one-line brand statement, 2–4 word identity (from Phase 2's aesthetic feelings) |
| Color system | Primary/secondary/functional palettes as real swatches with hex + usage label (primary/surface/accent/functional) — light and dark if both are in scope. Functional color (e.g. a discipline or status system) shown separately from decorative/brand color, never blended |
| Typography | Real type specimens at actual weights/scale, not a font-name list — headline, body, and data/tabular examples in the product's real copy register |
| Logo construction & usage | The mark reproduced at its locked geometry, minimum size, clear space, light/dark treatment — plus a short, real do's-and-don'ts set (what the brand spec actually prohibits, e.g. no gradients, no rotation, no baked shadow — pull these verbatim from the approved spec, don't invent new prohibitions) |
| Voice | Real copy lines already approved in this pipeline, organized as a Tone Shift Matrix if the project has approved lines across more than one channel/context (never lorem, never a new tagline invented for the board — see `brand-book-master-framework.md`) |
| Applications | Real mockups of the actual product/site screens approved in Phase 4 — not generic packaging/apparel/billboard mockups unless the product genuinely has those touchpoints. A software product's applications are its own screens, notifications, emails, store listing — show those |
| System details | Small chips/patterns that show the system holding together at small scale — spacing rhythm, a component pattern, an icon set sample |
| Motion (optional, only if real motion tokens exist) | The easing curves as actual `cubic-bezier()` values, not just names — a couple of labeled timing bars (micro-interaction / component transition / signature moment) |
| Lexicon (optional, only if the project has a "vocabulary is law" glossary) | The we-say/we-never-say table straight from the existing glossary — don't draft new terms for this panel |

## Bundle the real assets, not a manifest of what's needed

A modern brand kit ships the actual files, not a shopping list (this is the one place static PDF-era brand
books consistently fell short — see the digital-guidelines research in
`sources/design/BrnadBook-BrandManual/`: "they include the actual assets needed to bring it to life... all
downloadable from one interactive hub," not a description of what someone still has to go make). Whatever is
mechanically derivable from the locked mark geometry, generate for real and hand over the files:

- The master mark and every lockup variant named in the brand spec (horizontal, stacked, ink-on-canvas,
  reversed tile, monochrome silhouette) as real `.svg` files — these are pure vector shapes from the locked
  geometry, there's no reason to only describe them when you can just write them.
- Where a headless-render path is available (see `pdf-export.md`), rasterize a few representative PNGs too
  (e.g. a favicon size, an app-icon-scale preview, a notification-icon preview) — not the full
  platform-exact export-size matrix (that needs the platform's own tool, e.g. Apple's Icon Composer for the
  iOS 26 layered icon; say so rather than faking it), but enough that "the asset library" means something
  you can actually open, not just read about.
- If something genuinely can't be produced here (a commissioned photo shoot, a platform-specific icon
  export), say so plainly in the manifest and don't fabricate a placeholder file pretending to be the real
  thing.

## Quality bar

- Dense but organized — every element earns its place, no empty filler space and no padding-out with
  decorative shapes that mean nothing. If a panel is reading empty, that's a sign to add another real,
  approved element (a second application mockup, a construction detail, a usage example) — not to stretch
  the existing elements to fill the space.
- One accent, used with restraint and consistently across every panel — not a different loud color per
  panel.
- Real hierarchy: one panel can be the quiet cover, another the technical color/type reference, another the
  applications wall — vary the rhythm, don't make every panel shout at the same volume.
- No AI-slop tropes: no generic gradient hero, no rounded-card-with-left-accent-bar everywhere, no emoji as
  icons, no stock "diverse team in a bright office" imagery.

## Anti-generic checklist before publishing

- [ ] Every color on the board has a name and hex that exists in the approved token set
- [ ] Every mockup shows the real product, not a generic industry mockup unrelated to what was built
- [ ] Every copy line was said somewhere earlier in this pipeline, not invented fresh for the board
- [ ] The do's/don'ts are the actual prohibitions from the approved brand spec, not manufactured ones
- [ ] The mark's geometry matches the locked spec exactly — no redraw, no "close enough"
