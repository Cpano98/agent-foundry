# Phase 5 — Web Design System / token spec shape

See `brand-book-master-framework.md` for the completeness checklist this spec's categories are drawn from
(color hierarchy, WCAG methodology, icon construction, typography micro-typography) — that file explains the
*why* and the full rigor bar; this file is the concrete shape to fill in.

The Phase 5 design-system deliverable is **two mirrored artifacts**, not a table buried in prose — the
pattern below is adapted from the open-source [`design.md`](https://github.com/google-labs-code/design.md)
format (BuilderOS's `design-system` skill packages the same idea as an image→tokens pipeline; this reference
borrows its rigor, not its scope — Anima Studio derives tokens from the approved pipeline, not from a single
image):

1. **A literal YAML token block** — machine-readable, parseable, exact — for Phase 6 (the coding agent) to
   implement from without guessing. This is the source of truth.
2. **A token-driven HTML mirror** — every token from the YAML block becomes a CSS custom property in
   `:root`, and every swatch, type specimen, spacing bar, radius sample, and component in the page styles
   itself from those variables. **No hardcoded literal value may appear anywhere a token exists** — if the
   HTML and the YAML can drift, the format has failed at its one job. Regenerate the HTML from the YAML,
   never author it as a separate interpretation.

Group by category, and for each token capture: semantic name, value, and its use — mirroring the shape
already proven in `project-context/V2/04-design/design-system/tokens.md` (Orbita Health's stable token doc).

## The YAML token block shape

```yaml
version: alpha
name: <product-or-design-system-name>
description: <one-sentence description>

colors:
  <semantic-token>: "#RRGGBB"          # quoted, sRGB, hex — semantic name, never an appearance name

typography:
  <scale-token>:
    fontFamily: <family>
    fontSize: <px | rem | em>
    fontWeight: <number, e.g. 400, 600, 700>
    lineHeight: <unitless multiplier or dimension>
    letterSpacing: <dimension, optional>

rounded:
  <scale>: <dimension>

spacing:
  <scale>: <dimension or unitless number>

components:
  <component-name>:
    backgroundColor: "{colors.<token>}"   # reference tokens with {path.to.token}, never re-inline the raw value
    textColor: "{colors.<token>}"
    typography: "{typography.<token>}"
    rounded: "{rounded.<token>}"
    padding: <dimension or token reference>
```

**Anima Studio extensions on top of the base format** (flag these plainly as extensions, since they go
beyond the upstream spec):

- **Multi-theme.** The base format has no native light/dark split. Nest the `colors:` block (and any themed
  component property) under `light:` / `dark:` keys, or suffix tokens (`background/canvas/light`,
  `background/canvas/dark`) — pick one and apply it consistently within a project. Say explicitly which
  convention you used.
- **Status.** The base format has no draft/locked concept. Carry Anima Studio's status legend
  (🟢 Locked/Stable · 🟡 Draft · ⬜ Open) as a parallel `status:` map keyed by the same token paths, or as a
  YAML comment beside each token — never silently drop it, and never let a 🟡/⬜ token render in the HTML
  mirror as if it were 🟢 final.
- **Variants as siblings, not nesting.** Hover/active/disabled/pressed/focus are separate `components:`
  entries with a related key (`button-primary`, `button-primary-hover`), not nested children — this matches
  the upstream format's own rule and keeps the HTML mirror's "one entry, one rendered state" logic simple.

## Required categories

- **Color** — neutrals (canvas/surface/border/text, light + dark if both themes are in scope), and any
  functional/semantic color (e.g. a discipline or status color system) kept separate from decorative color.
  Audit every color pair that's carrying text or a UI component against WCAG using the real formula —
  $\text{Contrast Ratio} = (L_1 + 0.05) / (L_2 + 0.05)$, $L_1$ the lighter color's relative luminance, $L_2$
  the darker — minimum **4.5:1** for normal text, **3.0:1** for large text (≥24px, or ≥18.66px bold) and UI
  components. Pass/fail, not "close enough" — see `brand-book-master-framework.md` for the full rationale.
- **Typography** — type family, the weight/tracking used for the wordmark specifically if there is one,
  a type scale (size/line-height/weight **and letter-spacing** per role: display, heading, body, caption,
  data/tabular) — every row needs leading and tracking filled in, not just size and weight.
- **Spacing** — a scale, not ad hoc values
- **Radius** — a scale, and any rule about where a baked corner radius is prohibited (e.g. platform icon
  masks)
- **Icons** (if the project has a custom icon set) — the construction grid (e.g. 24×24px), internal padding,
  a single uniform stroke weight, the corner-radius choice (sharp vs. rounded, and what it signals), and
  terminal cap style (flat vs. rounded) — not just the size scale (`sm`/`md`/`lg`/`xl`) already covered above.
- **States** — hover/pressed/focus/disabled/error, defined once as tokens, not per-component

## Rules

- Every token needs a **semantic name** (`background/surface`) mapped to a **raw value**
  (`#FFFFFF`/`white`) — components must only ever reference the semantic name, never the raw value directly.
  If the target codebase already has this layering (e.g. `palette.ts` → `colors.ts` → components), match it.
- Semantic names beat appearance names always: `primary`/`on-primary`/`surface`/`on-surface`/`accent`/
  `error`/`success`/`warning`/`info` — never `blue`/`red`/`lightGray`.
- Mark each token's status if the underlying system distinguishes draft vs. locked/stable — Phase 6 code
  generation should not silently promote a draft token to shipped without flagging it back to the user.
- If a token or category is explicitly unspecified (e.g. dark theme not designed yet), say so as an
  assumption rather than inventing a value.
- **If a token doc or HTML mirror already exists from an earlier pipeline pass, don't blindly regenerate.**
  Read what's there and ask the user: refine specific tokens, replace with a fresh pass, or merge. Confirm
  before any destructive overwrite — the same discipline Phase 1 applies to the wider project.
- **Verify the write.** After publishing the YAML doc and the HTML mirror, confirm both actually succeeded
  before telling the user it's done. If either fails, surface the real cause rather than a generic "error"
  (permission/write-protected, out of space, a naming conflict) and ask how to proceed — don't silently
  retry into a broken state.
