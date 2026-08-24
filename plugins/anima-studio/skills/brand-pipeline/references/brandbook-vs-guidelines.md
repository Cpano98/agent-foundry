# Brand Book vs. Brand Guidelines

Distilled from research gathered in `sources/design/BrnadBook-BrandManual/` (branzai.com, lingoapp.com,
brandkit.com, marq.com). Use this to keep Phase 5's two deliverables honest and distinct.

## Brand Guidelines (Manual de Marca / Brand Standards)

A working document. Its job is to answer implementation questions correctly, for people who already need to
use the brand.

Typically contains:
- **Brand platform** — purpose, positioning, values, personality, essence
- **Visual identity** — logo (variants, minimum size, clear space, incorrect usage), color (every colorspace
  that matters: hex, RGB, and print if relevant), typography, photographic/illustrative style, iconography,
  layout grid
- **Verbal identity** — naming rationale, tone of voice, key messages, tagline
- **Attitudinal identity** — behaviors the brand implies
- **Sensorial identity** — sound, motion, if applicable
- **Applications** — corporate, commercial, institutional touchpoints, materials, spaces

Written in the register of the professionals who use it — precise, technical, exact (e.g. exact letter
spacing, exact clear-space multiples). Not written to be inspiring; written to resolve doubt.

## Brand Book

An editorial artifact. No rules, no "correct vs. incorrect," no usage instructions. It personifies the
brand — if the brand had to live inside a book, what would that book feel like?

Its only goal: transmit the brand's essence in a way that's inspiring, simple, and transports the reader
into the brand's world — for employees, clients, partners, or investors who need to *feel* the brand, not
implement it.

## Why Anima Studio keeps them separate

A Brand Book that also tries to be the technical reference becomes bloated and imprecise. A Guidelines doc
that also tries to be inspiring becomes vague where it needs to be exact. Phase 5 in this pipeline always
produces both, as separate artifacts, each optimized for its actual reader.

## In practice: the Brand Book carries a little of both

The distinction above is the *reason* the two deliverables stay separate — it is not a license to make the
Brand Book text-only. Real studio brand books (the kind a client frames, not just reads) are visual boards
that show the color system, type specimens, and the mark's clear-space/do's-and-don'ts alongside the
editorial voice — see `brand-kit-poster-spec.md`. The line that actually matters: the Brand Book never
*invents* a rule or prohibition — it only *shows*, beautifully, rules that Phase 2/4 (or the project's
existing spec) already decided. The Web Design System is still the only deliverable precise enough to
diff code against; the Brand Book's usage guidance is illustrative, not the engineering source of truth.

## Modern caveat

Static PDF brand books/guidelines go stale fast. Where the target project already has a living spec (e.g.
Orbita Health's `04-design/design-system/brand.md` + `tokens.md`, marked as the literal source of truth over
the code), treat that living doc as the Guidelines artifact and keep it current rather than producing a
parallel PDF. The Brand Book can still be a standalone editorial artifact (e.g. published as an Artifact),
since it isn't meant to be a spec anyone diffs code against.

**PDF is still a legitimate *derived* export, never the source of truth.** The living Artifact/canvas is
canonical; a PDF is a convenience snapshot for offline review, a board deck, or a vendor who won't open a
link — real needs, per the digital-guidelines research this file distills from (`lingoapp.com`: "there IS a
valid need for a PDF brand book — for quick downloads, board presentations, or offline audits. But they
shouldn't be your source of truth"). When the user asks for a PDF, produce one (see `pdf-export.md`) — don't
substitute "you can export that yourself from the canvas" for actually handing them the file, and don't let
the PDF's existence become an excuse to stop updating the living version when tokens change.
