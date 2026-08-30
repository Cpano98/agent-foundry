# Carlos Pano — Design System

The personal brand and portfolio system of **Carlos Pano**, a senior software engineer working in AI and product engineering. This system was built by reading `CpanoWebDev.fig`, the Figma file that holds his identity, social output and project presentation artwork.

There is no product here in the SaaS sense. The "products" this system serves are the three surfaces the Figma file actually contains: **project preview cards**, **square social posts**, and **brand export sheets** (logo, monogram, palette, patterns). Everything in this repo is traceable to a frame in that file.

## Sources

- **Figma:** `CpanoWebDev.fig`, attached to this project as a read-only virtual filesystem. 20 pages, 4,367 nodes. The pages read for this system, at the owner's direction, were:
  - `/Logo-Icon` (guid `0:1`) — 24 logo sheets, 32 monogram sheets, the 7-colour palette row
  - `/Posts` (guid `39:139`) — 34 square social posts, palette row, type studies
  - `/Projects` (guid `7:528`) — 34 `ProPreview` cards at 600 × 400, plus full-bleed project frames
  - `/PATRONES` (guid `21:18`) — the monogram repeat pattern, exported to 4096 px
  - `/Assets` (guid `2:495`) — `main_bg` compositions
  - Icon glyphs were lifted from `/BUENACALI` (see *Intentional additions*).
- **No codebase, repository or slide deck was provided.** No live site was read. If you have the portfolio source or the original Reglo font files, attach them and this system can be tightened considerably.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point. `@import`s everything below. |
| `tokens/colors.css` | Palette + semantic aliases |
| `tokens/typography.css` | Font stacks, the literal size list, weights |
| `tokens/spacing.css` | Spacing scale, canvas sizes, radii |
| `tokens/effects.css` | Shadows, glows, blur, patterns, motion |
| `tokens/fonts.css` | Google Fonts import (Inter, Poppins, Urbanist) |
| `assets/logo/` | `cp-mark.svg`, `cp-lockup.svg`, `carlospano-wordmark.svg` |
| `assets/patterns/` | Monogram repeat tiles (navy / blue / mint) + the liquid-marble orb |
| `assets/imagery/` | Project screenshots pulled from the file |
| `components/` | Reusable primitives — see below |
| `guidelines/` | 19 foundation specimen cards |
| `ui_kits/project-showcase/` | The Projects page, click-through |
| `ui_kits/social-posts/` | The Posts page, five formats |
| `ui_kits/brand-sheets/` | The Logo-Icon page |
| `templates/social-post/` | Starting template: 1080 square post |
| `templates/project-showcase/` | Starting template: project preview grid |
| `SKILL.md` | Agent-skill entry point |

## Components

Grouped by concern under `components/`.

**`brand/`**
- `LogoMark` — the CP monogram, solid or knocked out of a colour tile
- `LogoLockup` — monogram over the "Carlos Pano" wordmark (the primary signature)
- `Wordmark` — the letterforms alone

**`surfaces/`**
- `GlassPanel` — the 10 %-white / `blur(10px)` plate
- `GlowOrb` — radial glow disc, four tones
- `PatternField` — monogram repeat field, three colourways
- `ScreenshotCard` — 5 px-radius screenshot crop on the soft card shadow

**`devices/`**
- `MacbookFrame` — the file's own MacBook Pro drawing
- `ScreenIPhone12Pro` — iPhone 12 Pro mockup (the kit's own symbol name)

**`showcase/`**
- `SwatchTile` — the flat 180 px palette square
- `ProPreview` — the 600 × 400 project card (the kit's own frame name)
- `PostCanvas` — the 1080 square post canvas

**`icon/`**
- `Icon` — 11 "Stroke 2" line glyphs + 5 solid social marks, by name

**`social/`**
- `SocialMediaFacebook`, `SocialMediaInstagram`, `SocialMediaTikTok`, `SocialMediaTwitter`, `SocialMediaWhatsapp` — the file's five registered social components, one each

## Naming

The Figma file registers only 17 loose symbols and no component sets, so almost nothing here inherits a name from the kit's component panel. Names come from the **frames** instead, and every one is deliberate: `LogoMark` and `LogoLockup` from `ícono CP-*` / `LOGO CP-*`, `PostCanvas` from `Post-0…33`, `ProPreview` from `ProPreview-1…34`, `PatternField` from the `PATRONES` page, `SwatchTile` from `Rectangle 1…7`, `MacbookFrame` from the `Device - Macbook Pro` group, and `GlassPanel` / `GlowOrb` / `ScreenshotCard` / `Wordmark` from the recurring unnamed layers described under *Visual foundations*. The two exceptions — `ScreenIPhone12Pro` and the five `SocialMedia*` marks — are named exactly as the file registers them.

## Intentional additions

The five `SocialMedia*` marks are registered components in `CpanoWebDev.fig`, and `ScreenIPhone12Pro` takes its name verbatim from the file's own symbol. **The other eleven components are intentional additions.** The file registers no component sets, so there was no component vocabulary for them to inherit — each is a recurring frame or layer group from the selected pages, promoted to code and named after its source:

- `LogoMark` — intentional addition; from `ícono CP-01…32`
- `LogoLockup` — intentional addition; from `LOGO CP-01…24`
- `Wordmark` — intentional addition; the letterforms inside `LOGO CP-06`
- `GlassPanel` — intentional addition; the `rgba(255,255,255,0.1)` + `blur(10px)` layer on every `ProPreview` frame
- `GlowOrb` — intentional addition; the radial-gradient discs on `Post-18` / `Post-33`
- `PatternField` — intentional addition; from the `PATRONES` page
- `ScreenshotCard` — intentional addition; the 5 px-radius mask groups on `Post-26` / `Post-33`
- `MacbookFrame` — intentional addition; the `Device - Macbook Pro` group
- `SwatchTile` — intentional addition; from `Rectangle 1…7`
- `ProPreview` — intentional addition; from the `ProPreview-1…34` frames (frames, not registered components)
- `PostCanvas` — intentional addition; from `Post-0…33`

`Icon` carries the 11 `Stroke 2/*` line glyphs; the five `Social Media / *` families also ship as standalone components under `components/social/`.

Two further things are not literally in the selected frames, and both are flagged rather than hidden:

1. **`Icon`.** The selected pages contain no icon set. The Figma file's only icon components — 11 `Stroke 2/*` line glyphs and 5 `Social Media/*` solid marks — live on the `/BUENACALI` page, a client project. They were extracted because the file has no other iconography and a system without any is unusable. The `Social Media / *` families ship *inside* `Icon` rather than as five separate components.
2. **`ProjectPreview`'s and `PreviewDetail`'s interaction affordances.** The source frames are static exports with no navigation. The "Back" chip and the tab strips in the UI kits are viewer controls, marked as such in each kit's README.

Nothing else was invented. There is no Button, Input, Select, Dialog, Toast or Tabs component, because the source defines none — this is an identity and presentation system, not an application kit.

## Content fundamentals

The file carries very little copy, so this section describes what is there rather than extrapolating a voice that does not exist.

**Language.** Spanish, with English technical terms left in English. The type studies read `Hola Mundo` (the programmer's first line, in Spanish) and `lorem`. Page and layer names are Spanish (`PATRONES` for patterns, `ícono` for icon) mixed with English (`Posts`, `Projects`, `Logo-Icon`). Treat Spanish as the default for personal voice and English for engineering nouns.

**Casing.** Sentence case, or lower case for display type. `Hola Mundo` is the only cased display string. Nothing is set in all caps anywhere in the file — the uppercase micro-labels in this system's UI kits are an interface convention added here, not a brand rule. The single 13 px label in the source is `Macbook Pro`, sentence case.

**Person.** The brand speaks as **I**, never "we" — this is one engineer, and the file is titled with his own initials. Do not write agency copy.

**Density.** Extreme restraint. A 1080 × 1080 canvas typically holds one screenshot and a logo, and nothing else. Twenty-six of the 34 posts contain zero words. When a post does carry type, it carries one line.

**Emoji.** None, anywhere in the file. Do not introduce them.

**Vibe.** Quiet, technical, confident. The work is the message; the brand frames it and gets out of the way. No exclamation marks, no growth-marketing verbs, no "unlock" / "supercharge" register. If you need a sentence, write a plain declarative one: *Senior software engineer. AI, product, and the code underneath.*

## Visual foundations

**Colour.** Seven flat swatches, drawn in the file as a row of 180 px squares and repeated on two pages. That row *is* the palette:

`#000000` · `#0B132B` navy · `#1C2541` navy mid · `#5D79FF` blue · `#00C1A2` teal · `#53F3D7` mint · `#00FBCA` aqua

Mint (`#53F3D7`, 807 uses) and blue (`#5D79FF`, 784 uses) dominate; navy `#0B132B` (388 uses) is the dark ground. The system is essentially **deep navy plus a cyan-to-indigo bright range** — cool throughout, with no warm accent at all. Neutrals are incidental: `#EBEBEB`, `#D9D9D9` (the placeholder fill under screenshots), `#A3ACB1`, `#172933`. Two other hues appear (`#D42828`, `#FFA300`) but only as scratch fills beneath image masks, so they are *not* part of the palette and are not tokenised as semantic colours. There is no green/amber/red status set — if you need one, ask, do not invent it.

**Type.** Inter carries almost everything: Semi Bold 600 for headlines, Light 300 for reading copy, Medium 500 for labels. Reglo Bold appears only as display type at 128 / 250 / 370 px. Urbanist Thin appears once. Sizes in the file are a literal set, not a ratio scale: 13, 20, 24, 25, 30, 40, 48, 50, 90, 128, 150, 250, 370. Display type sets at `line-height: 100%`; the 13 px label sets at `0.9`. Letter-spacing is untouched everywhere.

**Backgrounds.** Three moves, no more. (1) Flat colour — white or navy — filling the frame. (2) A glow orb: a large radial-gradient circle in mint, blue, aqua or pale grey, 882–912 px across, positioned so its centre falls *outside* the canvas and only the falloff reads. Never more than two per surface, and never two of the same tone. (3) The monogram repeat pattern, tilted, one colour on white, at very large tile sizes. There are no photographic backgrounds, no mesh gradients, no noise, and no hand-drawn illustration anywhere. The one photographic brand object is the "liquid marble" orb — a circular navy-to-mint-to-blue render used as a decorative mass.

**Imagery.** All imagery is the work itself: screenshots of shipped interfaces. Colour temperature is whatever the product was; the brand does not filter, tint, desaturate or grain it. Screenshots are used two ways at once on preview cards — blown up past the frame and rotated 180° behind glass, then again sharp inside a device frame. No people, no stock, no illustration.

**Corner radii.** Five values only: `2px` (a mockup base), `5px` (every screenshot crop), `22px` (device bezel), `28px 28px 4px 4px` (laptop lid), and `50%` (orbs and glow discs). Palette squares and pattern fields have **hard corners**. Do not round a container just because it is a container.

**Cards.** A card in this system is a screenshot crop: 5 px radius, no border, no padding, no header, and one very soft shadow — `0 4px 60px rgba(28,37,65,0.05)`. Nothing else. There is no bordered-card pattern, no left-accent-border pattern, and no card with a title bar.

**Shadows.** Effectively one brand shadow (the card shadow above). The remaining shadow values belong to the device mockups: `0 0 15px rgba(0,0,0,0.25)` around a phone, `0 4px 4px rgba(0,0,0,0.25)` under a mockup, `0 4px 4px rgba(0,0,0,0.1)`, and the `inset 0 0 0 2px #4A5568` stroke on a laptop lid. There are no inner shadows in the brand layer.

**Transparency and blur.** Exactly one recipe, used on every project preview card: `rgba(255,255,255,0.1)` over `backdrop-filter: blur(10px)`. It is only ever laid over imagery, to hold a sharp object above a busy field. White at 50 % opacity appears in one other place — the CP watermark on preview cards. Nothing else in the file is translucent.

**Borders.** Almost none. The only strokes in the file are inside device mockups. Brand surfaces are separated by colour and space, not by lines.

**Layout.** Square-first. The post canvas is 1080 × 1080 with a 92 px safe margin; the CP mark is pinned 93 px from the right and 72 px from the bottom, at 71 × 90 px. Project previews are 600 × 400 with the mark inset 20 px and set at 50 % white. Full-bleed frames are 1920 × 1080 with nothing but the screenshot. Content is centred or set against a single edge — no multi-column grids exist in the file.

**Animation and states.** The file is a static export set, so it prescribes none. It also does not contain a single button, link or input, which means **hover, focus, press and disabled states are undefined by the source.** The convention adopted in this system's UI kits — and the only one you should use until Carlos says otherwise — is a plain opacity drop to `0.88` on hover, no transform, no colour shift, at `250ms` / `cubic-bezier(0.4,0,0.2,1)`. Flag this as an open question rather than treating it as brand truth.

## Iconography

**There is no icon system in the selected pages.** The Figma file's only icon components sit on a client page (`/BUENACALI`) and are two distinct sets:

- **Stroke 2** — 11 line glyphs on a shared grid, uniform stroke weight, rounded joins, no fills: activity graph, API/integration, apps, branch/git fork, calendar, car, check, chevron-right, desktop computer, user group, wallet. Extracted verbatim into `components/icon/icon-data.js` and rendered by `Icon`.
- **Social Media** — 5 solid platform marks (Facebook, Instagram, TikTok, Twitter, WhatsApp), single-colour fills.

Rules: the Stroke 2 glyphs paint with `currentColor`, so recolour with the CSS `color` property; do not mix them with a filled icon set; and do not import Lucide, Heroicons or any other library into this system — 16 glyphs is what exists, and if you need a 17th, ask for it to be drawn. **No emoji, no unicode dingbats, no icon font.** The CP monogram is a brand mark, not an icon — do not use it in an icon slot.

## Known substitutions and gaps

- **Reglo → Poppins.** `Reglo Bold` is the file's display face (13 runs, at 128–370 px). It is a commercial Latinotype family and no binary was provided, so `--font-display` resolves to **Poppins**, the closest free geometric sans. This is visibly not the same face. **Please upload the Reglo files** and this becomes a one-line change in `tokens/fonts.css`.
- **SF Pro Display** appears only inside iOS status-bar mockups (4 runs at 16 px, 2 each at 24 px). It is Apple-licensed and cannot be bundled, so `--font-system` names it and falls back to `-apple-system` / `BlinkMacSystemFont` — correct on Apple hardware, a system sans elsewhere. No other family is substituted for it. Upload the SF Pro binaries if you need it to render off-platform.
- **No interaction states.** See *Animation and states* above.
- **No component library.** The source defines no form controls, navigation, or feedback components. None were invented.
