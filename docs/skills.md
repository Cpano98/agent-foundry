# Skills

Skills are structured, discoverable capabilities for AI coding agents. They are distinct from prompts and are designed to be invoked by context-aware AI tools.

## Required pattern

Every skill should be a directory containing a file named `SKILL.md` with YAML frontmatter.

```yaml
---
name: example-skill
description: Brief description of what the skill does and when it should be used.
---
```

## Naming

- lowercase
- kebab-case
- descriptive
- consistent with directory name

## Best practices

- keep skill scope narrow
- include clear instructions and constraints
- document when to use it
- avoid hidden assumptions
- prefer reusable workflows over one-off advice

## Example

See `plugins/agent-foundry-core/skills/example-skill/SKILL.md`.
