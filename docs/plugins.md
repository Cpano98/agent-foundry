# Plugins

A plugin is a distributable package containing one or more agent capabilities such as skills, commands, agents, hooks, or MCP configuration.

## Plugin anatomy

```text
plugins/example-plugin/
├── .claude-plugin/
│   └── plugin.json
├── skills/
├── commands/
├── agents/
├── hooks/
├── scripts/
└── README.md
```

## Distribution model

Plugins are the distribution layer for Claude Code and other packaging-aware systems. Skills remain the canonical reusable capability layer.

## Design principle

Keep plugins modular, keep skills portable, and avoid duplicating the same capability across every tool-specific directory.
