# Agent Foundry

Agent Foundry is an open-source marketplace and library for reusable AI-agent capabilities.

It brings together prompts, Agent Skills, Claude Code plugins, commands, agents, workflows, and templates in one cross-tool ecosystem designed for AI coding assistants.

## Why this exists

AI coding assistants are getting more capable, but reusable assets are still fragmented across tools, repositories, and personal workflows. Agent Foundry gives contributors a single place to package and share portable AI resources that can work across compatible ecosystems.

## What is included

- prompts for human reuse and adaptation
- Agent Skills using the open `SKILL.md` pattern
- plugins for Claude Code marketplace distribution
- agents and command patterns
- templates and workflow guidance
- documentation and validation tooling for contributors

## Resource model

- Prompt: a reusable instruction or task template
- Skill: a structured capability an AI agent can discover and invoke
- Plugin: a distributable bundle of capabilities for a tool or platform
- Agent: a more task-oriented composition of skills and helpers
- Command: a reusable slash-command-style workflow

## Supported ecosystems

This project is intentionally designed for multiple compatible ecosystems rather than a single tool-specific vendor lock-in.

- Claude Code marketplace and plugin packaging
- Cursor-compatible Agent Skills discovery
- other tools that follow the open Agent Skills standard

## Browse the repository

- `prompts/` — reusable prompt library
- `skills/` — canonical Agent Skills-compatible resources
- `plugins/` — distributable Claude Code plugin packages
- `agents/` — agent definitions and workflow blueprints
- `commands/` — reusable command patterns
- `templates/` — templates and starter structures
- `docs/` — contributor and architecture documentation
- `scripts/validate/` — repository validation logic

## Claude Code installation

Claude Code marketplace installs use the GitHub repo identity configured in the marketplace manifest.

```bash
/plugin marketplace add Cpano98/agent-foundry
```

Use the exact GitHub owner/repository identifier that matches the repo configuration.

## Cursor / Agent Skills usage

Cursor can consume Agent Skills resources from compatible GitHub repositories and local directories. The canonical implementation in this repository is the `SKILL.md` based skill layout, which keeps the same content portable across compatible tools.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contributor workflow, metadata rules, and naming conventions.

## Creating a skill

Create a folder with a lowercase kebab-case name and include a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: example-skill
description: A short description explaining what the skill does and when it should be used.
---
```

## Creating a plugin

A plugin should live under `plugins/<plugin-name>/` and include a `.claude-plugin/plugin.json` manifest plus any bundled resources.

## Submitting a resource

1. Add the resource in the appropriate directory.
2. Keep naming consistent and descriptive.
3. Document how it should be used.
4. Validate locally with `npm run validate`.
5. Open a pull request.

## Validation

```bash
npm run validate
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
