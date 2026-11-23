// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to /output/entry.txt.
//
// Candidate lines weighed against the judge criteria:
//  1. "My smartwatch congratulates me for standing up, as if sitting was the
//     hard part of my day." — fresh, but the sting is mild.
//  2. "Autocorrect changed 'meeting at 3' to 'meatballs at 3' and now my boss
//     thinks I'm catering lunch." — funny, but it roasts an app feature, not
//     the gadget itself, and the setup eats half the line.
//  3. The charger-cable ritual below — chosen: it names one daily gadget,
//     lands on first read, and the concrete detail (one exact angle, bend /
//     balance / pray) is a specific gripe everyone recognises, not the
//     reheated "phone dies at 4pm" complaint from the brief.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone charger only works at one exact angle, so every night I do the same sacred ritual: bend, balance, pray, repeat.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const text = LINE.trim();
// Count characters as code points, the way a reader counts them.
if ([...text].length < 1 || [...text].length > 200) {
  throw new Error(`roast line must be 1-200 chars, got ${[...text].length}`);
}
writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
console.log(`Wrote ${text.length}-char roast to /output/entry.txt`);
