# Phase 7 — QA Alignment checklist

The QA Guardian is an independent reviewer, not the same agent that wrote the Phase 6 code self-checking its
own work. Diff the shipped code against the Phase 5 deliverables (Brand Guidelines + design tokens), not
against the QA Guardian's own aesthetic opinion.

## Checks

- [ ] **Token fidelity** — every color/type/spacing value in the code traces back to a Phase 5 token. Flag
      any hardcoded value that isn't a token reference, and any token used for a purpose other than its
      documented semantic use.
- [ ] **Voice fidelity** — any user-facing copy in the shipped code matches the Phase 2 Brand Voice
      (tone, register, vocabulary — including any locked domain vocabulary the target project enforces).
- [ ] **Logo/mark usage** — mark rendered per the locked geometry/clear-space/prohibited-uses rules from
      Phase 2/5, if a mark is in scope for this pass.
- [ ] **Component parity** — hi-fi mockups approved in Phase 4 match what actually shipped; flag any drift
      (missing states, different spacing, different copy) rather than assuming the code is right because it
      compiles.
- [ ] **Accessibility baseline** — contrast on text/background token pairs actually shipped meets at least
      AA for the contexts they're used in.

## Output

A pass/fail report per check, each with the specific file/line or component where drift was found — not a
prose summary. Findings block sign-off; the pipeline does not consider Phase 7 complete until every finding
is either fixed or explicitly accepted by the user as a known deviation.
