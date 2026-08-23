# Architecture

Agent Foundry is designed as an ecosystem rather than a single folder of prompts.

## Resource model

Resource
├── Prompt
├── Skill
├── Agent
├── Command
└── Plugin
    ├── Skills
    ├── Agents
    ├── Commands
    ├── Hooks
    └── MCP

## Canonical source of truth

The canonical source of truth for reusable capabilities is the repository itself. Skills are authored in a consistent structure and use `SKILL.md` as the primary entry point.

## Skill packaging

A skill should use the following pattern when it is a standalone capability:

```text
skill-name/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Only add `references`, `scripts`, or `assets` when they are required.

## Claude Code plugin consumption

Claude Code marketplace entries point to plugin directories, and each plugin may bundle skills, commands, agents, and other resources. This is the distribution layer for Claude-specific installs.

## Cursor discovery

Cursor supports the open Agent Skills model and discovers compatible skills from directories such as `.cursor/skills/`, `.agents/skills/`, and other compatible locations. The repository uses the canonical `SKILL.md` pattern so it can be consumed by multiple clients without duplicating the same implementation.

## Why avoid duplication

Duplicating every skill into `.cursor/skills`, `.claude/skills`, and `.agents/skills` creates maintenance drift. A canonical repo structure keeps the content authoritative while platform-specific adapters can be added only when the client requires them.

## Future compatibility

The same skill can be consumed by:

- Claude Code
- Cursor
- other Agent Skills-compatible tools
- direct GitHub consumption and manual copying

The key is portable metadata, clear packaging, and consistent naming.
