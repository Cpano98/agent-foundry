# Potentiate Brand Book & App Components (Anima Studio Kickoff)

## Objective
Elevate an already-shipped V1 product's brand identity — give it "soul" via a moodboard and reference
imagery — then prove the elevated system across three surfaces at once: a full marketing landing page, a set
of real app screen variations (including aesthetic component patterns like circular/progress indicators), and
a Phase 5 Brand Book whose application mockups reuse the product's real existing screens instead of inventing
new ones.

## Context
This is a **refresh of a shipped V1 product**, not a greenfield build, run through Anima Studio
(`/anima-studio` in the `anima-studio` plugin). It spans:
- **Phase 2** (Visual & Verbal Identity) — re-extract aesthetic feeling from a moodboard + reference images.
- **Phase 3/4** (UX Skeleton + UI Skin, the UX/UI Lead skill) — beyond the single landing page, produce
  several **hi-fi screen variations for the app itself**, exploring aesthetic component patterns (circular
  progress rings, linear/stepper progress, badges, and whatever other layout concepts the user has in mind)
  as A/B iterations, not a one-shot single design.
- **Phase 5** (Standardization, the Brand Manager skill) — Brand Book + Web Design System + Asset Library,
  whose Applications panel pulls forward the product's real existing screens (e.g. its onboarding panel)
  restyled to the elevated system, plus the new landing page and new component variations.

The pipeline's "audit before you author" principle applies throughout: existing brand/design-system material
in the target repo (`brand.md`, `tokens.md`, prior Claude Design canvases, existing screens) is a constraint
to build on, not a blank page to overwrite.

## Instructions
- Treat the moodboard and reference images as literal Phase 2 inputs — extract aesthetic feeling and visual
  precedent (texture, light, composition, mood) from them, not just accent colors.
- If the user has their own layout concepts/ideas (sketches, notes, described patterns), fold those into
  Phase 3/4 as real input the UX/UI Lead iterates from — don't discard them in favor of inventing new layouts.
- Ask specifically for **multiple screen variations**, not one fixed design per screen — this is Claude
  Design's A/B iteration pattern from Phase 4, just scoped wider than a single landing page.
- Call out **aesthetic component types by name** when the user has specific ones in mind (circular
  progress/rings, linear progress/steppers, badges, avatars, etc.) so the UI Lead treats them as required
  exploration, not optional polish.
- The landing page must show the *whole* system applied together on one real page — not components shown in
  isolation.
- The Brand Book's Applications panel (Phase 5) must reuse real screens from the actual product, restyled to
  the elevated identity — pull the onboarding panel and other existing screens forward rather than mocking up
  generic touchpoints the product doesn't have.
- Walk the phases in order with an approval gate at each, same as any other Anima Studio run — widening scope
  (more screens, more component variations) doesn't mean skipping checkpoints.

## Expected output
1. A refreshed Phase 2 identity (palette, typography pairing, voice) grounded in the moodboard/reference
   images, built on whatever the target repo already has decided.
2. Several hi-fi **app screen variations** (Phase 3/4) exploring the requested aesthetic component patterns
   (circular, progress, and whatever else the user's layout concepts call for).
3. A full **marketing landing page** (Phase 4) showing the entire elevated system applied together.
4. Phase 5's **Brand Book + Web Design System + Asset Library**, with an Applications panel built from real
   product screens (onboarding panel, etc.) plus the new landing page and component variations.

## Constraints
- Every color, mockup, and copy line must trace back to an approved decision from this pipeline — no invented
  taglines, no generic stock imagery, no placeholder logo.
- Don't collapse the landing page, the app screen variations, and the Brand Book into one artifact — they are
  three distinct deliverables per the pipeline's phase boundaries.
- Don't silently overwrite decided identity elements already present in the target repo — flag anything you
  think should change and ask, rather than assuming a clean slate.

## Copy-paste kickoff prompt

Fill in the bracketed fields and hand this to the `/anima-studio` orchestrator as your opening message.

```
We're not starting from zero — [PRODUCT_NAME] already has a shipped V1 at [TARGET_REPO_PATH], with real
screens already built (check [EXISTING_SCREENS_PATH_OR_NOTE] for what exists — reuse real patterns like its
onboarding flow, don't reinvent them). The ask is to potentiate the brand: give the identity more soul and
sharper design guidance than V1 shipped with.

Inputs for Phase 2 (identity):
- Moodboard: [MOODBOARD_PATH] — extract the aesthetic feeling from these, don't just describe them
  generically.
- Reference images: [REFERENCE_IMAGES_PATH] — use these as concrete visual precedent (texture, light,
  composition, mood), not just a source of accent colors.
- Layout concepts/ideas: [LAYOUT_CONCEPTS_INPUT] — I have my own ideas for specific components and layouts;
  treat these as real input to iterate from, not a constraint to work around.

Deliverables I want at the end of this pass:
1. A refreshed Phase 2 identity grounded in the moodboard/reference images above. Audit
   [TARGET_REPO_PATH]'s existing brand/design-system material first (brand.md, tokens.md, any prior Claude
   Design canvas) — treat what's already decided as a constraint, and only change what I explicitly flag for
   reconsideration.
2. Several hi-fi **screen variations for the app** (Phase 3/4), exploring aesthetic component patterns —
   specifically [COMPONENT_TYPES, e.g. "circular progress rings, stepper/linear progress bars, badges,
   avatars"] — grounded in my layout concepts above. I want real A/B variety here, not one fixed design per
   screen.
3. A full marketing landing page (Phase 4) that shows the entire elevated system applied together on one real
   page.
4. Phase 5's Brand Book + Web Design System + Asset Library, whose Applications panel shows real screens from
   the actual product (pull the onboarding panel and other existing screens forward, restyled to the elevated
   system) plus the new landing page and the new component variations.

Walk the phases in order and stop for my approval at each gate — this is a refresh, not a shortcut around the
pipeline's checkpoints.
```

## Worked example (Orbita Health)

```
We're not starting from zero — Orbita Health already has a shipped V1 at
/Users/cpanoh/Documents/cpano-98-local/GitHub/orbita-mobile-app, with real screens already built (check that
repo's existing screens for what exists — reuse real patterns like its onboarding flow, don't reinvent them).
The ask is to potentiate the brand: give the identity more soul and sharper design guidance than V1 shipped
with.

Inputs for Phase 2 (identity):
- Moodboard: /Users/cpanoh/Documents/cpano-98-local/GitHub/project-context/V2/04-design/V2/research/moodboard
- Reference images:
  /Users/cpanoh/Documents/cpano-98-local/GitHub/project-context/V2/04-design/V2/research/ReferenceImages
- Layout concepts/ideas: I'll describe specific component ideas in conversation as we go (circular progress
  indicators, stepper-style progress, badge/aesthetic component variants).

Deliverables I want at the end of this pass:
1. A refreshed Phase 2 identity grounded in the moodboard/reference images above. Audit project-context's
   existing design-system docs (brand.md, tokens.md, any prior Claude Design canvas) first — treat what's
   already decided as a constraint, and only change what I explicitly flag for reconsideration.
2. Several hi-fi screen variations for the app, exploring circular progress/ring components, linear/stepper
   progress, and other aesthetic component patterns I'll describe.
3. A full marketing landing page (Phase 4) that shows the entire elevated system applied together on one real
   page.
4. Phase 5's Brand Book + Web Design System + Asset Library, whose Applications panel shows real Orbita
   screens (its onboarding panel, etc.) restyled to the elevated system, plus the new landing page and
   component variations.

Walk the phases in order and stop for my approval at each gate.
```

## Related

- `plugins/anima-studio/skills/brand-pipeline/references/rebrand-existing-product-kickoff-prompt.md` — the
  same scenario, documented inside the Anima Studio skill itself so the orchestrator can point to it directly
  during a run; this file is the canonical, standalone copy meant to be read and reused independent of the
  plugin's internals.
- `plugins/anima-studio/skills/brand-pipeline/references/claude-ai-handoff-prompt.md` — a *different* kind of
  prompt: a Phase 5 **output** for a higher-fidelity pass on claude.ai/design, not a pipeline kickoff input.
