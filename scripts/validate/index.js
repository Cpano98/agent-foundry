const fs = require('fs');
const path = require('path');

const root = process.cwd();
const errors = [];
const warnings = [];

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    errors.push(`Invalid JSON in ${path.relative(root, filePath)}: ${error.message}`);
    return null;
  }
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing required file: ${path.relative(root, filePath)}`);
  }
}

function isKebabCase(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function validateSkillDir(dirPath) {
  const entries = fs.existsSync(dirPath) ? fs.readdirSync(dirPath) : [];
  const skillFile = path.join(dirPath, 'SKILL.md');

  if (!entries.length) {
    warnings.push(`Skill directory ${path.relative(root, dirPath)} is empty.`);
  }

  if (!fs.existsSync(skillFile)) {
    return;
  }

  const content = fs.readFileSync(skillFile, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!frontmatterMatch) {
    errors.push(`Missing YAML frontmatter in ${path.relative(root, skillFile)}`);
    return;
  }

  const frontmatter = frontmatterMatch[1];
  const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
  const descriptionMatch = frontmatter.match(/^description:\s*(.+)$/m);

  if (!nameMatch) {
    errors.push(`Missing name in frontmatter of ${path.relative(root, skillFile)}`);
  } else if (!isKebabCase(nameMatch[1].trim())) {
    errors.push(`Skill name must be lowercase kebab-case in ${path.relative(root, skillFile)}: ${nameMatch[1].trim()}`);
  }

  if (!descriptionMatch) {
    errors.push(`Missing description in frontmatter of ${path.relative(root, skillFile)}`);
  }

  const parentName = path.basename(dirPath);
  if (nameMatch && nameMatch[1].trim() !== parentName) {
    errors.push(`Skill name should match directory name in ${path.relative(root, skillFile)} (${parentName})`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') && entry.name !== '.claude-plugin' && entry.name !== '.github') {
        continue;
      }
      if (entry.name === 'node_modules') continue;
      walk(fullPath);
    }
  }
}

// Required top-level files
ensureFile(path.join(root, 'README.md'));
ensureFile(path.join(root, 'LICENSE'));
ensureFile(path.join(root, '.claude-plugin', 'marketplace.json'));
ensureFile(path.join(root, 'plugins', 'README.md'));
ensureFile(path.join(root, 'plugins', 'agent-foundry-core', '.claude-plugin', 'plugin.json'));
ensureFile(path.join(root, 'plugins', 'agent-foundry-core', 'skills', 'example-skill', 'SKILL.md'));

const marketplace = readJson(path.join(root, '.claude-plugin', 'marketplace.json'));
const pluginManifest = readJson(path.join(root, 'plugins', 'agent-foundry-core', '.claude-plugin', 'plugin.json'));

if (marketplace) {
  if (!marketplace.name || marketplace.name !== 'agent-foundry') {
    errors.push('Marketplace name must be "agent-foundry".');
  }
  if (!marketplace.owner || !marketplace.owner.trim()) {
    errors.push('Marketplace owner is required.');
  }
  if (!marketplace.description) {
    errors.push('Marketplace description is required.');
  }
}

if (pluginManifest) {
  if (!pluginManifest.name || pluginManifest.name !== 'agent-foundry-core') {
    errors.push('Plugin manifest name must be "agent-foundry-core".');
  }
  if (!pluginManifest.version) {
    errors.push('Plugin manifest version is required.');
  }
}

function collectSkillDirsFrom(baseDir) {
  const result = [];
  if (!fs.existsSync(baseDir)) return result;

  const walkDir = (current) => {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const fullPath = path.join(current, entry.name);
      if (fs.existsSync(path.join(fullPath, 'SKILL.md'))) {
        result.push(fullPath);
      }
      walkDir(fullPath);
    }
  };

  walkDir(baseDir);
  return result;
}

const skillDirs = collectSkillDirsFrom(path.join(root, 'skills'));
for (const skillDir of skillDirs) {
  validateSkillDir(skillDir);
}

const pluginSkillDirs = collectSkillDirsFrom(path.join(root, 'plugins', 'agent-foundry-core', 'skills'));
for (const skillDir of pluginSkillDirs) {
  validateSkillDir(skillDir);
}

const docsDir = path.join(root, 'docs');
if (fs.existsSync(docsDir)) {
  const docs = fs.readdirSync(docsDir).filter((name) => name.endsWith('.md'));
  if (docs.length === 0) {
    warnings.push('No markdown docs were found in docs/.');
  }
}

if (errors.length > 0) {
  console.error('Validation failed.');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Validation passed.');
if (warnings.length > 0) {
  console.warn('Warnings:');
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}
