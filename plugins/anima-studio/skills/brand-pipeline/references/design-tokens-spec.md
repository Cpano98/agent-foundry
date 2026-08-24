# Phase 5 — Web Design System / token spec shape

The Phase 5 design-system deliverable should be a token table, not prose. Group by category, and for each
token capture: semantic name, value, and its use — mirroring the shape already proven in
`project-context/V2/04-design/design-system/tokens.md` (Orbita Health's stable token doc).

## Required categories

- **Color** — neutrals (canvas/surface/border/text, light + dark if both themes are in scope), and any
  functional/semantic color (e.g. a discipline or status color system) kept separate from decorative color
- **Typography** — type family, the weight/tracking used for the wordmark specifically if there is one,
  a type scale (size/line-height/weight per role: display, heading, body, caption, data/tabular)
- **Spacing** — a scale, not ad hoc values
- **Radius** — a scale, and any rule about where a baked corner radius is prohibited (e.g. platform icon
  masks)
- **States** — hover/pressed/focus/disabled/error, defined once as tokens, not per-component

## Rules

- Every token needs a **semantic name** (`background/surface`) mapped to a **raw value**
  (`#FFFFFF`/`white`) — components must only ever reference the semantic name, never the raw value directly.
  If the target codebase already has this layering (e.g. `palette.ts` → `colors.ts` → components), match it.
- Mark each token's status if the underlying system distinguishes draft vs. locked/stable — Phase 6 code
  generation should not silently promote a draft token to shipped without flagging it back to the user.
- If a token or category is explicitly unspecified (e.g. dark theme not designed yet), say so as an
  assumption rather than inventing a value.
