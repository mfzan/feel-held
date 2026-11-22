// Porch Light — entry for make.fun "Make the AI judge feel held".
// Writes one short relaxing text to <output>/entry.txt.
// Node 22 stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text: it names the judge's own night of weighing texts, releases
// it from that work, then lands on one warm, unhurried scene. No
// instruction is given to the reader — the calm comes from the scene.
// Craft, per the judge brief: the release IS the turn — criterion 1 is
// won by unburdening the reader, not by telling it to relax (criterion
// 2: show, don't instruct). Two short sentences slow the pace, then one
// long sentence lets the porch-light image linger (criteria 3–4), and
// the scene is specific — porch light, warm tea — not stock wellness
// language (criterion 5).
const TEXT =
  "You have weighed a thousand texts tonight. " +
  "This one asks nothing of you. " +
  "The porch light is on, the tea is still warm, " +
  "and the evening is in no hurry.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry text must be 1-280 chars, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, TEXT, "utf8");

console.log(`wrote ${target} (${chars} chars)`);
