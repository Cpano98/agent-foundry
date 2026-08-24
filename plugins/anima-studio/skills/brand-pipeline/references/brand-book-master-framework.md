# Phase 5 — the master-class completeness checklist

A comprehensive, industry-grade brand book covers more ground than color + type + logo. This file is a
**completeness checklist**, not a content generator — it tells you the categories and the rigor a top-tier
brand system reaches, so you know what to check for and how to present it well. It does **not** license
inventing anything Phase 1–4 never decided. Where a category below has no approved answer yet, say so as an
explicit gap (a line in the "Open" section of whichever deliverable), the same discipline as everywhere else
in this pipeline — never fill it with framework boilerplate dressed up as brand content.

## System boundaries, named up front

A full brand ecosystem has three distinct layers — know which one you're building in Phase 5:

- **Brand Book** — the strategic + editorial layer this pipeline's `brandbook-vs-guidelines.md` already
  defines: positioning, values, visual identity rules, voice, governance.
- **Style Guide** — a narrower editorial sub-system (written-communication rules, formatting, domain
  vocabulary) — usually folds into the Brand Book's Voice section for a project this size; only break it out
  separately if the target org's writing volume genuinely warrants its own doc.
- **Design System** — the functional code layer: this pipeline's Web Design System deliverable, per
  `design-tokens-spec.md`.

Ground everything in the brand's foundational strategy (purpose, positioning, values, audience — Phase 1's
output) before applying any visual rule below. A design choice that isn't traceable to a strategic reason is
a decoration, not a system.

## Color — depth beyond a swatch list

**Tiered hierarchy.** A vibrant, functional palette separates roles, not just hues:

| Tier | Role |
|---|---|
| Primary | The signature hue(s) carrying core brand recognition |
| Secondary | Expands flexibility (data viz, campaigns, sub-brands) without diluting primary equity |
| Neutral | Background/container/body-text shades — the tones everything else sits on |
| Accent | High-chroma, reserved for conversion points and interactive triggers — not decoration |
| Semantic | Fixed functional states: success / warning / error / info |

Map whatever the project already has onto this shape rather than forcing new tiers into existence — Orbita's
system, for example, is deliberately **not** this shape (near-neutral base + functional discipline color +
one marketing-only accent, on purpose, per `brand.md`) and shouldn't be bent to fit a generic template.

**Spatial distribution — the 60-30-10 rule**, as a sanity check on a layout, not a hard mandate: roughly 60%
dominant neutral space, 30% structural secondary (typography/framing), 10% vibrant accent for the focal CTA.
Useful for catching a composition that's gone noisy or a Brand Book panel that's using its one accent in too
many places (see the Ember-containment rule already in `design-tokens-spec.md` — this is the same instinct,
generalized).

**Reproduction fidelity across the four color models** — only specify the models the project actually ships
in. A digital-only product needs hex + RGB; only add CMYK + Pantone if physical/print collateral is actually
in scope (merch, signage, printed collateral) — don't manufacture Pantone references for a product that will
never see a print run.

**WCAG contrast — the actual audit method**, for closing out every "flagged, unaudited" note this pipeline
already produces:

$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$

($L_1$ = relative luminance of the lighter color, $L_2$ = the darker.) Minimum thresholds: **4.5:1** for
normal body text, **3.0:1** for large text (≥24px, or ≥18.66px bold) and UI components. These are pass/fail,
not "close enough" — 4.49:1 fails. Run this on every color pair a "flag for WCAG audit before lock" note in
this pipeline has been carrying forward (Orbita's dark discipline colors against `#0B0D10`/`#14171C`/
`#1B1F26` are the standing example) before Phase 6 treats them as final.

**Dark mode is not an inversion.** Desaturate vibrant primaries rather than running them at full chroma on a
dark ground, and use a dark surface grey (e.g. `#121212`-range) instead of pure `#000000` to avoid halation.

## Logo, geometry, and iconography — precision beyond "here's the mark"

**Clear space is relative, not fixed.** Express it as a multiple of a structural feature of the mark itself
(e.g. the symbol's height, or the wordmark's x-height) — `1.0 × X` is a common baseline — never a flat pixel
number that breaks when the mark is rescaled. (Orbita's own rule — half the mark's height on all sides — is
exactly this pattern; carry that convention into any new lockup.)

**Minimum size, stated for both media**, e.g. a minimum digital height in px and a minimum print height in
mm/pt — a mark that's only spec'd for one medium will get misused in the other.

**Icon construction, if the project has a custom icon set** (Orbita does — see the Asset Library): document
the grid (commonly 24×24px for UI, larger for high-res/print), internal padding for optical balance, a
single stroke weight applied uniformly across the set, a deliberate corner-radius choice (sharp = technical/
authoritative, 2–4px rounded = approachable — a choice, not a default), and terminal cap style (flat butt vs.
rounded). If this hasn't been decided yet, that's a real Phase 5 gap to flag, not something to invent per-icon.

**Prohibited-uses checklist** — the standard guardrails, cross-checked against what the project's own spec
already prohibits (don't invent new ones): no stretch/distort, no unapproved color fills, no drop shadows or
outlines, no placement on low-contrast or busy photographic backgrounds, no rotation off baseline, no altered
internal proportions.

## Typography — micro-typography, not just a font name

**Leading (line-height) by role**: tighter for display (110–130% of font size, so large letterforms don't
create exaggerated gaps), looser for body (140–170%, for scanning comfort).

**Tracking (letter-spacing) by role**: display headlines take tight negative tracking (roughly −10 to
−20/1000em) to pull large characters into a cohesive unit; small caps/captions take expanded positive
tracking (+20 to +50/1000em) to stay legible at small sizes. Body text: usually 0.

**Measure (line length)**: optimal reading is 45–75 characters per line — narrower breaks reading rhythm,
wider increases eye strain on the horizontal sweep. Check any long-form marketing/editorial layout against
this, not just the type scale.

**Minimum body size**: 16px baseline for web/mobile — smaller than that is an accessibility problem, not a
style choice.

Present the full scale (display → h1 → h2 → h3 → body → caption) with size, weight, leading, and tracking
per level — this pipeline's `design-tokens-spec.md` typography table is exactly this shape; make sure leading
and tracking are filled in for every row, not just size and weight.

## Photography & motion — if the project has real photography/motion decisions to present

**Photography direction**: lighting signature (diffused natural vs. high-contrast studio, and why), composition
rules (depth of field, negative space for overlay copy), and a color-grading signature (highlight warmth,
shadow tint, saturation floor/ceiling) — all only worth documenting once real commissioned photography
exists or is genuinely planned (Orbita's is explicitly not-yet-shot; don't backfill a lighting spec for
imagery that doesn't exist).

**Anti-stock-cliché list**: name what's explicitly banned — staged handshakes, exaggerated stock-photo
expressions, unnatural studio posing — the same instinct as Orbita's own "no gym-mirror flexing" call in
Phase 2.

**Motion, as real math, not vibes**: express easing as actual `cubic-bezier()` curves, not just a token name
— e.g. a standard UI ease-in-out (`cubic-bezier(.25,.1,.25,1)`-family) for responsive feedback vs. an
expressive overshoot curve for signature brand moments. Timing bands: micro-interactions 100–300ms, component
transitions 300–500ms, signature/logo animations capped around 2–3s. Accessibility: respect
`prefers-reduced-motion`, and cap any looping animation around 5s. Cross-reference against the project's
existing motion tokens (Orbita's `tokens.md` already has duration + named easing curves — express the actual
bezier values alongside the names if they're not already there, don't replace the names).

## Verbal identity — tone shift, not just adjectives

**Voice is stable; tone flexes by context.** Build a **Tone Shift Matrix** — channel × emotional state →
tone orientation × vocabulary rule × example — using only already-approved copy lines, never inventing new
ones. This is usually a reorganization exercise, not new writing: Orbita already has real approved lines for
different contexts (a session-complete confirmation, a conflict-inbox notice, a marketing headline) that map
directly onto exactly this matrix shape without writing a single new word.

**Lexicon table** ("we say" / "we never say," with the reason): if the project has a vocabulary-is-law
glossary already (Orbita's `00-foundation/glossary.md` — "Professional" never "trainer," "Athlete" never
"user"), that glossary already *is* this table — present it as one, don't recreate it from scratch.

## AI governance — flag as open unless already decided

Increasingly a real category, but almost certainly **not yet decided** for most projects this pipeline
touches — treat it as an explicit open item to raise with the user, not something to invent a policy for:

- A **golden dataset** — curated approved imagery/copy used to prompt or fine-tune generative tools, so
  AI-assisted content stays on-brand.
- **Temperature bands** — low (0.1–0.3) for factual/technical generation, higher (0.6–0.8) for creative
  brainstorming — only meaningful once the org has an actual generative workflow to govern.
- **A human-in-the-loop rule** (a common benchmark: verify the final ~10% before publication) — a governance
  decision the user makes, not a default this pipeline assumes.
- **PII/proprietary-data stripping** before any prompt leaves the org's boundary into a third-party model.

If the target project has no stated AI content policy, say that plainly rather than drafting one — this is
exactly the kind of "explicitly unspecified, don't invent" gap the rest of this pipeline already handles
correctly for tokens; treat AI governance the same way.

## Why cloud-hosted/living beats static, restated

This reinforces (doesn't replace) `brandbook-vs-guidelines.md`'s existing "modern caveat": a living,
token-driven, DAM-linked system beats an archived static PDF because it stays current, exports real
CSS-variable/JSON tokens design tools and code can consume directly, and doesn't fragment into fifteen
untracked copies across people's drives. This pipeline's Artifact-first approach with PDF as a derived export
(`pdf-export.md`) already follows this model — nothing new to change here, just the rationale for why it's
built this way.
