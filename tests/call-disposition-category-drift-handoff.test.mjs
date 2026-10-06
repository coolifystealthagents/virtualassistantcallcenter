import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const source = readFileSync(join(root, 'content/research/call-disposition-other-category-drift-study.md'), 'utf8');

test('category-drift research keeps its bounded call-disposition reporting handoff', () => {
  assert.match(source, /^updated: 2026-10-06$/m);
  assert.match(source, /\[call disposition reporting workflow\]\(\/services\/call-disposition-reporting\)/);
  assert.match(source, /The business owner still defines the categories, approves changes, and decides how exceptions are handled\./);
  assert.doesNotMatch(source, /guarantee|automatically approve|makes the decision/i);
});