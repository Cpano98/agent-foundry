# Contributing

We welcome contributions that improve the quality, clarity, and portability of the ecosystem.

## Before contributing

- read the repository purpose
- choose the right resource type: prompt, skill, plugin, agent, or template
- validate your work locally before opening a pull request

## Creating a skill

1. create a directory under `skills/` or under a plugin `skills/` folder
2. name the directory in kebab-case
3. add `SKILL.md` with YAML frontmatter
4. keep the skill scoped and useful in context

## Creating a prompt

1. place it in `prompts/<category>/`
2. document the objective and constraints clearly
3. keep it readable for human reuse

## Creating a plugin

1. create a directory under `plugins/`
2. add `.claude-plugin/plugin.json`
3. include reusable resources such as skills or commands
4. document usage and compatibility

## Naming and metadata

- use lowercase names
- prefer kebab-case for resource identifiers
- keep metadata concise and consistent
- include description, version, license, and compatibility where useful

## Validation

Run:

```bash
npm run validate
```

## Pull requests

- keep changes focused
- include docs when behavior or structure changes
- ensure validations pass
- explain the motivation clearly

## Security

Do not include secrets, API tokens, credentials, or unsafe code patterns in examples or templates.
