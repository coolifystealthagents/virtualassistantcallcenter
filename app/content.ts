import fs from 'node:fs';
import path from 'node:path';

export type ContentKind = 'blog' | 'research' | 'alternatives';
export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  category: string;
  image: string;
  imageAlt: string;
  related: string[];
  body: string;
};

const root = path.join(process.cwd(), 'content');

function parse(file: string, kind: ContentKind): ContentEntry {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]+)$/);
  if (!match) throw new Error(`Missing front matter: ${file}`);
  const values: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const split = line.indexOf(':');
    if (split > 0) values[line.slice(0, split).trim()] = line.slice(split + 1).trim();
  }
  const required = ['slug', 'title', 'description', 'published', 'updated', 'category', 'image', 'imageAlt'];
  for (const key of required) if (!values[key]) throw new Error(`Missing ${key}: ${file}`);
  return {
    kind,
    slug: values.slug,
    title: values.title,
    description: values.description,
    published: values.published,
    updated: values.updated,
    category: values.category,
    image: values.image,
    imageAlt: values.imageAlt,
    related: values.related ? values.related.split(',').map((x) => x.trim()).filter(Boolean) : [],
    body: match[2].trim(),
  };
}

export function getContent(kind: ContentKind): ContentEntry[] {
  const directory = path.join(root, kind);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => parse(path.join(directory, name), kind))
    .sort((a, b) => b.published.localeCompare(a.published));
}

export function getEntry(kind: ContentKind, slug: string) {
  return getContent(kind).find((entry) => entry.slug === slug);
}

export function markdownBlocks(body: string) {
  return body.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
}
