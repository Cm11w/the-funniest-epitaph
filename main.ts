// Famous Last Words: The Funniest Epitaph
// Entry program (Node 22, standard library only).
//
// It writes one line — a tombstone epitaph of famous last words — to
// /output/entry.txt. The line is a fixed string constant: no input is read,
// no clock or randomness is used, no network call is made, so repeated runs
// produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The epitaph: a dying speaker subverts the "light at the end of the
// tunnel" cliche. First-person dying speech, one read, no explanation
// needed, quotable — and it lands as a surprise twist.
const EPITAPH = "I can see the light. It's a train.";

// The gate only accepts UTF-8 text of 1 to 150 characters, not only
// whitespace — refuse to write anything outside it, so a bad line can
// never reach the judge.
if (EPITAPH.length < 1 || EPITAPH.length > 150 || EPITAPH.trim().length === 0) {
  throw new Error(`epitaph must be 1-150 characters, got ${EPITAPH.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, EPITAPH, "utf8");
console.log(`wrote ${EPITAPH.length} characters to ${outPath}`);
