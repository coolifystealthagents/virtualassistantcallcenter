import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

test('research metadata emits an exact production canonical route', () => {
  assert.match(source, /generateMetadata/);
  assert.match(source, /alternates\s*:\s*\{\s*canonical\s*:\s*`\$\{site\.url\}\/research\/\$\{slug\}`\s*\}/);
});
