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

Cursor supports the open Agent Skills model, but it only auto-scans skills that already live under a
literally-named `.cursor/skills/`, `.agents/skills/` (or, for compatibility, `.claude/skills/`) directory —
project-level or global (`~/.cursor/skills/`, etc.). It does **not** scan an arbitrary `skills/` folder at a
repo root, so this repository's `skills/` and `plugins/*/skills/` directories are not auto-discovered just
by opening `agent-foundry` in Cursor.

The repository still uses the canonical `SKILL.md` pattern so the same content is portable across clients
without duplication — getting a skill into Cursor is a one-time consumer-side step, not something this repo
needs to pre-populate:

- **Import from GitHub** (fastest): in Cursor, open the Skills importer and paste the GitHub URL of the
  skill's folder (e.g. `https://github.com/Cpano98/agent-foundry/tree/main/plugins/anima-studio/skills/brand-pipeline`).
  Cursor downloads that folder's `SKILL.md` and any `references/`/`scripts/`/`assets/` into your project's
  or global `.../skills/` directory.
- **Manual**: clone this repo and copy (or symlink) the specific skill directory into your own
  `.cursor/skills/<skill-name>/`.

## Why avoid duplication

Duplicating every skill into `.cursor/skills`, `.claude/skills`, and `.agents/skills` creates maintenance drift. A canonical repo structure keeps the content authoritative while platform-specific adapters can be added only when the client requires them.

## Future compatibility

The same skill can be consumed by:

- Claude Code
- Cursor
- other Agent Skills-compatible tools
- direct GitHub consumption and manual copying

The key is portable metadata, clear packaging, and consistent naming.
