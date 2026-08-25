# Kickoff prompt — potentiating an existing product's brand book & components

Use this when the pipeline is **not** starting from a blank page: a V1 product already ships with real
screens, and the ask is to give it more soul — a stronger visual/verbal identity informed by a moodboard and
reference imagery — then prove the elevated system across a marketing landing page, real app screen
variations (including aesthetic component patterns like circular/progress indicators), and a Phase 5 Brand
Book whose "Applications" panel reuses real patterns already shipping in the product (an onboarding flow, a
settings panel, whatever already exists) rather than inventing new touchpoints.

This is a **kickoff prompt for the user to hand the `/anima-studio` orchestrator** (or paste as the opening
message of a fresh conversation) — it is not the same thing as `claude-ai-handoff-prompt.md`, which is a
*Phase 5 output* generated at the end of the pipeline for a higher-fidelity pass on claude.ai/design. This one
is an *input*, written once per project and reused whenever that project re-enters the pipeline for a brand
refresh instead of a greenfield build.

## Why this template exists

Without it, "potentiate the brand" tends to arrive as a run-on paragraph mixing moodboard paths, reference
image paths, a request for a landing page, and a request for application mockups — all real asks, but easy
for the orchestrator to under-scope (e.g., producing a components-in-isolation page instead of a full landing
page, or inventing generic application mockups instead of pulling forward the product's actual onboarding
screen). The template forces the scope to stay explicit and separated: rebrand-not-greenfield, moodboard/
reference images as real Phase 2 input, multiple hi-fi app screen variations exploring named component
patterns (Phase 3/4), one full landing page proving the system holds together (also Phase 4), and a Brand
Book Applications panel built from the product's real screens (Phase 5) — never generic mockups.

## Canonical copy

The full fill-in-the-blanks template, a worked example (Orbita Health), and the recommended-format writeup
live at **`prompts/design/potentiate-brand-and-app-components.md`** in the repo root — read and reuse it from
there rather than duplicating it here, so there's one source of truth as the template evolves (e.g. it now
also covers requesting multiple app screen variations with named aesthetic component patterns — circular
progress, steppers, badges — not just the landing page and Brand Book).

## Where it lives

That canonical file is plain markdown, meant to be read and copied by a human (like
`claude-ai-handoff-prompt.md`) — it doesn't need to follow the `.dc.html` or YAML formats used for pipeline
deliverables.
