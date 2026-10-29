import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const source = readFileSync(join(root, 'content/blog/missed-call-follow-up-window.md'), 'utf8');

test('missed-call follow-up guide keeps its bounded call-disposition reporting handoff', () => {
  assert.match(source, /^updated: 2026-10-29$/m);
  assert.match(source, /\[call disposition reporting service\]\(\/services\/call-disposition-reporting\)/);
  assert.match(source, /can keep the status, owner, and next follow-up visible without letting staff invent outcomes or close work without evidence\./);
  assert.doesNotMatch(source, /guarantee|automatically approve|makes the decision/i);
});
