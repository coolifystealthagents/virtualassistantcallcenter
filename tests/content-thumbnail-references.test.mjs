import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = join(root, 'content');

test('every content thumbnail reference resolves to a public file', () => {
  for (const section of readdirSync(contentRoot, { withFileTypes: true })) {
    if (!section.isDirectory()) continue;

    for (const entry of readdirSync(join(contentRoot, section.name), { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue;

      const relativePath = join('content', section.name, entry.name);
      const source = readFileSync(join(root, relativePath), 'utf8');
      const image = source.match(/^image:\s*(\S+)$/m)?.[1];
      assert.ok(image, `${relativePath} must declare an image`);
      assert.ok(
        existsSync(join(root, 'public', image.replace(/^\//, ''))),
        `${relativePath} references missing image ${image}`,
      );
    }
  }
});
