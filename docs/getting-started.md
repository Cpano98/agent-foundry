# Getting Started

Agent Foundry is an open-source library and marketplace for reusable AI-agent capabilities.

## What you will find here

- prompts for reuse and adaptation
- Agent Skills compatible with tools such as Cursor and Claude Code
- plugin packages for distribution
- agents, commands, templates, and workflow utilities

## Recommended workflow

1. Explore the folders that fit your use case.
2. Copy a prompt or adapt it for your workflow.
3. Use a skill when you want an AI client to discover a reusable capability.
4. Package a plugin when you want to distribute something more formally.

## Quick examples

### Claude Code marketplace install

```bash
/plugin marketplace add Cpano98/agent-foundry
```

Use the exact GitHub owner/repository identifier that matches the repository config.

### Cursor and Agent Skills

Cursor can discover Agent Skills from compatible directories and GitHub-hosted sources. The canonical implementation lives in the repository as `SKILL.md` resources, and those can be adapted or installed in compatible clients.

## Contribution flow

- start with a skill, prompt, or plugin idea
- validate your resource with `npm run validate`
- open a pull request with the necessary metadata and documentation
