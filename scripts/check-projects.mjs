/** Validate editable project content before it reaches the live portfolio. */
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = resolve(root, 'public');
const projects = JSON.parse(await readFile(resolve(root, 'src/data/projects.json'), 'utf8'));
const ids = new Set();
const errors = [];

for (const project of projects) {
  const label = project.name || project.id || 'Unnamed project';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id) || ids.has(project.id)) {
    errors.push(`${label}: use a unique lowercase id with hyphens.`);
  }
  ids.add(project.id);
  for (const field of ['name', 'category', 'featuresTitle']) {
    if (typeof project[field] !== 'string' || !project[field].trim()) {
      errors.push(`${label}: ${field} must be a nonempty string.`);
    }
  }
  try {
    if (!['https:', 'http:'].includes(new URL(project.websiteUrl).protocol)) throw new Error();
  } catch {
    errors.push(`${label}: websiteUrl must be a complete http or https URL.`);
  }
  for (const field of ['description', 'features', 'images']) {
    if (
      !Array.isArray(project[field]) ||
      project[field].some((item) => typeof item !== 'string' || !item.trim())
    ) {
      errors.push(`${label}: ${field} must be an array of nonempty strings.`);
    }
  }
  if (!project.description?.length || !project.images?.length) {
    errors.push(`${label}: add at least one description paragraph and one image.`);
  }
  if (!Array.isArray(project.images)) continue;
  for (const image of project.images) {
    if (typeof image !== 'string') continue;
    const file = resolve(publicDirectory, `.${image}`);
    try {
      if (
        !image.startsWith('/images/') ||
        !file.startsWith(publicDirectory + sep) ||
        !(await stat(file)).isFile()
      )
        throw new Error();
    } catch {
      errors.push(`${label}: image not found in public/: ${image}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${projects.length} projects: IDs, text, links, and image files are valid.`);
}
