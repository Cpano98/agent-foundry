# Skills

This directory contains reusable Agent Skills-compatible resources for AI coding assistants.

## Canonical model

The canonical source of truth for a skill is a directory containing a `SKILL.md` file with YAML frontmatter. The parent directory name and skill name should match.

## Naming rules

- lowercase
- kebab-case
- descriptive
- stable across compatible AI tool ecosystems

## Example

- `development/` - development workflow skills
- `git/` - repository and version-control skills
- `frontend/` - frontend implementation and architecture skills

## Relationship to plugins

A plugin may bundle one or more skills, but the repository should avoid duplicating the same skill in multiple incompatible places unless required by platform constraints.
