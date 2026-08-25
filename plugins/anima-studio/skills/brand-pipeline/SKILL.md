---
name: brand-pipeline
description: A 7-phase brand and product design methodology (Discovery → Visual & Verbal Identity → UX Skeleton → UI Skin → Standardization → Engineering → QA Alignment) for taking a project from unclear identity to a shipped, brand-true design system and code. Use this when rebranding an existing product, defining a new product's identity from scratch, or auditing whether shipped UI still matches the brand's design tokens.
---

# Brand pipeline

Anima Studio's methodology. This file is tool-agnostic — it defines the phases, their inputs/outputs, and
the approval gate between them. The Claude-Code-specific enactment (the `/anima-studio` orchestrator command
and its six specialist agents) lives in this plugin's `commands/` and `agents/` directories and implements
exactly this sequence.

## Principle: audit before you author

Never treat Phase 1 as a blank page by default. Before producing anything, look for existing brand or
design-system material in the target project (a `brand.md`, `tokens.md`, design ADRs, a screen inventory, a
prompt library, an existing moodboard folder). Decided identity elements are **constraints to respect**,
not a draft to silently overwrite. Only propose changing a decided element if the user flags it for
reconsideration, and say explicitly what you're changing and why.

When the ask is specifically to **potentiate an already-shipped V1 product** — elevate its identity with a
moodboard/reference images, then prove it with a full landing page and application mockups pulled from the
product's real screens — point the user at
`references/rebrand-existing-product-kickoff-prompt.md`. It's a reusable, fill-in-the-blanks kickoff prompt
for exactly this scenario, kept separate from `references/claude-ai-handoff-prompt.md` (which is a Phase 5
*output*, not a pipeline input).

## The seven phases

Each phase ends with an explicit approval checkpoint — do not start the next phase until the user has
approved the current one's output.

### Phase 1 — Discovery & Audit ("the Purpose")
**Input:** current project files, existing assets, stated pain points, business goals.
**Output:** a current-state audit (what works / what doesn't), target audience, market positioning, core
business objectives. See `references/discovery-audit-checklist.md`.

### Phase 2 — Visual & Verbal Identity ("the Soul")
**Input:** the Phase 1 audit, a moodboard (images).
**Output:** core aesthetic feelings extracted from the moodboard; color palette(s); typography pairing(s);
logo concepts; a defined Brand Voice (tone, messaging, copywriting style).

### Phase 3 — UX & Structural Design ("the Skeleton")
**Input:** approved Phase 2 identity, product scope.
**Output:** user journeys, information architecture / app structure, low-fidelity wireframes — layout only,
no color or graphics yet.

### Phase 4 — UI Concepting & Iteration ("the Skin")
**Input:** approved Phase 3 wireframes + Phase 2 identity.
**Output:** A/B hi-fidelity variations combining the wireframes with the visual identity, iterated with the
user to a final approved mockup per screen. Produced with the `design` skill (Claude Design), not static
mockup images.

### Phase 5 — Standardization ("the Law")
**Input:** approved Phase 4 mockups.
**Output:** two distinct artifacts, produced with the `design` skill so they're visual, print-ready
deliverables rather than plain documents — the **Brand Book** (a dense, agency-grade visual Brand Kit board:
inspirational in voice, but carrying real color/type specimens, the locked mark's usage rules, and real
application mockups on one coherent, PDF-exportable board; see `references/brandbook-vs-guidelines.md` for
why this must not collapse into a component spec, `references/brand-kit-poster-spec.md` for the panel
taxonomy and quality bar, and `references/brand-book-master-framework.md` for the completeness checklist a
top-tier brand book reaches) and the **Web Design System** (design tokens for spacing, color, typography,
states, presented fully styled in the brand's own visual system — see `references/design-tokens-spec.md`).
Phase 5 also produces real bundled brand assets (`references/pdf-export.md` for PDF/PNG export) and a
copy-pasteable claude.ai handoff prompt (`references/claude-ai-handoff-prompt.md`) for a higher-fidelity pass
on the full claude.ai/design product.

### Phase 6 — Engineering & Implementation ("the Muscle")
**Input:** the Phase 5 design system.
**Output:** the tokens translated into CSS/SCSS variables or a Tailwind config, plus modular component code
in the target stack.

### Phase 7 — QA Alignment ("the Mirror")
**Input:** Phase 6 code + Phase 5 Brand Book/tokens.
**Output:** an independent review confirming the engineered output matches the brand spec — not a
self-check by whoever wrote the code. See `references/qa-alignment-checklist.md`.

## Brand Book vs. Brand Guidelines

These are not the same deliverable and Phase 5 must not merge them:

- **Brand Guidelines** (Manual de Marca) — a technical, practical reference: platform, positioning, values,
  visual identity (logo, palette, type, photography rules), verbal identity (voice, tone, tagline), usage
  rules and prohibited uses. Written for the people who have to *implement* the brand correctly.
- **Brand Book** — an editorial, inspirational piece. No rules, no "correct/incorrect," no technical usage
  specs. Its job is to make the reader feel the brand's world. Written for people who need to *understand
  and believe in* the brand (new hires, partners, investors).

Full distillation in `references/brandbook-vs-guidelines.md`.
