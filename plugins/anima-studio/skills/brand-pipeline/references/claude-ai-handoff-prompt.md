# Phase 5 — generating a claude.ai handoff prompt

The `design` skill in this environment is an early preview — it says so itself: "not at parity with
claude.ai/design." The full product at claude.ai/design (and a plain claude.ai conversation with image/
artifact generation) can produce richer, more capable output for the same brief. When the user wants that —
or as a standing third deliverable alongside the two Code-built artifacts, since it costs little to produce
and gives the user a better-results option — generate a **self-contained, copy-pasteable prompt** they can
paste directly into claude.ai to produce the Brand Book and/or Web Design System there.

This is an **addition**, not a replacement. The YAML token block and its HTML mirror stay the actual
engineering source of truth (Phase 6 builds from those, not from whatever claude.ai generates). The handoff
prompt is for when the user wants a better-looking visual pass than this preview can currently produce.

## What makes a good handoff prompt

It has to be **fully self-contained** — claude.ai starts with zero context from this pipeline. Include, in
one block:

1. **Locked identity facts** — name, mark description (geometry in words, plus the actual SVG source if you
   have it — hand over the real markup, don't make claude.ai guess the geometry from a description), typeface,
   personality, voice register, and the explicit "never do this" list (prohibited mark treatments,
   prohibited tone, no-gamification rules) — copy these verbatim from the approved specs, never paraphrase
   loosely enough to drift.
2. **The actual token values** — every color (with hex), the type scale, spacing/radius scale — pulled
   straight from the YAML block you already wrote for `design-tokens-spec.md`. Paste the real values; don't
   summarize them into "a blue and a grey."
3. **Real approved copy** — the voice examples already approved in this pipeline, not invented ones.
4. **The structure to produce** — reference `brand-kit-poster-spec.md`'s panel taxonomy for the Brand Book
   and `design-tokens-spec.md`'s categories for the Design System, written out as an explicit section list in
   the prompt (claude.ai won't have read those files either).
5. **The completeness bar** — fold in the relevant parts of `brand-book-master-framework.md` (color
   hierarchy, WCAG thresholds, icon construction rules, typographic leading/tracking bands, tone shift
   matrix, anti-stock-cliché list) so the claude.ai session aims for the same rigor this pipeline does.
6. **The same anti-generic discipline** — state plainly, inside the prompt: don't invent brand elements that
   aren't listed above; if a section has no approved content, leave it out or say it's open, the same rule
   this pipeline follows internally.

## Format

Write it as a single fenced block the user can select-all and paste — not a set of instructions *about* what
to paste. Lead with one line telling the user what it's for and where to paste it ("Paste this into
claude.ai/design, or a claude.ai conversation, to generate a higher-fidelity pass at the same Brand Book —
this doesn't replace the token doc, which stays the source of truth").

## Where it lives

Write it as a plain text/markdown file (or publish as an Artifact if that's more convenient to hand over) —
it's meant to be read and copied by a human, not parsed by a tool, so it doesn't need to follow the `.dc.html`
or YAML formats used elsewhere in this phase.
