# Plugins

This directory is where distributable Agent Foundry plugins live.

A plugin is a package that exposes one or more reusable capabilities such as skills, agents, commands, hooks, or MCP integrations. Plugins are the unit that Claude Code marketplaces can install and distribute.

## Example

- `agent-foundry-core` — a minimal example plugin demonstrating the package structure and metadata conventions.

## Packaging conventions

Each plugin should include:

- `README.md`
- `.claude-plugin/plugin.json`
- optional `skills/`, `commands/`, `agents/`, `hooks/`, or `scripts/` directories

Keep plugin implementations portable and aligned with the canonical Agent Skills model wherever possible.
