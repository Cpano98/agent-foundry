# Contributing

Thanks for helping grow Agent Foundry.

This project is meant to be public, useful, and portable across compatible AI tooling. Contributions should be clear, minimal, and aligned with the repository architecture.

## Resource types

- Prompt: reusable instruction or task template
- Skill: structured capability with `SKILL.md`, designed for Agent Skills-compatible tools
- Plugin: package with metadata and one or more capabilities
- Agent: reusable task-oriented composition of skills or tools
- Command: reusable shortcut or workflow pattern

## How to create a skill

1. Create a new directory under `skills/` or under a plugin folder.
2. Use lowercase kebab-case for the directory and skill name.
3. Add a `SKILL.md` file with YAML frontmatter.
4. Keep the skill focused and well-scoped.
5. Document when the skill should be used.

Example:

```yaml
---
name: example-skill
description: A short description explaining what the skill does and when it should be used.
---
```

## How to create a prompt

1. Add a Markdown file under the appropriate `prompts/<category>/` folder.
2. Keep it readable and copyable for humans.
3. Include a clear objective, context, constraints, and expected outcome.
4. Avoid turning every prompt into a skill unless it is meant to be discoverable by AI agents.

## How to create a plugin

1. Create a folder under `plugins/`.
2. Add `.claude-plugin/plugin.json`.
3. Package related skills, commands, or agents inside the plugin.
4. Keep the plugin metadata consistent with the repository standards.
5. Make sure the plugin remains portable and understandable.

## Naming conventions

- use lowercase
- prefer kebab-case
- keep names descriptive and stable
- make directory names match skill names where applicable

## Metadata conventions

Use simple metadata that maps to the platform standards without unnecessary complexity.

Recommended fields include:

- name
- description
- version
- author
- license
- category
- tags
- compatibility
- repository
- homepage

## Testing and validation

Run:

```bash
npm run validate
```

The validator checks:

- valid JSON
- required files
- skill directory structure
- presence of `SKILL.md`
- frontmatter validity
- naming conventions
- plugin metadata consistency

## Pull requests

- keep PRs focused on a single objective
- include docs when adding a new resource type
- validate before submitting
- explain the value and context of your change

## Versioning

The repository is early-stage and can evolve in minor increments. Use sensible version numbers that reflect meaningful changes.

## Quality expectations

- no fake or placeholder content
- no meaningless examples
- no duplicate resource copies unless required by platform constraints
- no secrets or credentials in docs or templates

## Security expectations

Do not commit secrets, tokens, passwords, or unsafe scripts. If a sample requires credentials, clearly document that they are placeholders and must be replaced by the user.
