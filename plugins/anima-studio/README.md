# Anima Studio

A 7-phase brand and product design pipeline, packaged as a Claude Code plugin: Discovery → Visual & Verbal
Identity → UX Skeleton → UI Skin → Standardization → Engineering → QA Alignment.

It runs as **6 sequential skills**, each with its own specialist agent persona, orchestrated by one
conversation-level command. Phases 3 and 4 (UX skeleton + UI skin) are one skill — the UX/UI Lead — since
wireframes and hi-fi mockups are one continuous iteration with the same specialist. QA Alignment (Phase 7)
is its own skill rather than folded into engineering, so the review is genuinely independent of the code
it's checking.

## Usage

```
/anima-studio [target project or repo path]
```

The orchestrator checks the target for existing brand/design-system material first — this pipeline audits
and builds on real decisions when they exist, it doesn't assume a blank page. It then walks the six skills
in order, pausing for your explicit approval before each next phase.

## Included resources

- `skills/brand-pipeline/SKILL.md` — the portable, tool-agnostic methodology (the 7 phases, their
  inputs/outputs, and the Brand Book vs. Brand Guidelines distinction). Reusable outside Claude Code.
- `skills/brand-pipeline/references/` — checklists for Discovery, design tokens, and QA alignment, plus the
  distilled Brand Book vs. Guidelines research.
- `agents/anima-strategist.md` — Skill 1, Sr. Strategist (Discovery & Audit)
- `agents/anima-creative-director.md` — Skill 2, Creative Director (Visual & Verbal Identity)
- `agents/anima-ux-ui-lead.md` — Skill 3, UX/UI Lead (wireframes → hi-fi via Claude Design)
- `agents/anima-brand-manager.md` — Skill 4, Brand Manager (Standardization)
- `agents/anima-frontend-engineer.md` — Skill 5, Sr. Frontend Engineer (Engineering)
- `agents/anima-qa-guardian.md` — Skill 6, QA Guardian (independent QA Alignment)
- `commands/anima-studio.md` — `/anima-studio`, the Orchestrator Agent entry point

## First validation target

This plugin was built to run against **Orbita Health** (`orbita-mobile-app` / `project-context`), which
already has a partially-decided identity (`04-design/design-system/brand.md`, `tokens.md`, an existing
Claude Design canvas) — a real test of the "audit before you author" principle, not a greenfield run.
