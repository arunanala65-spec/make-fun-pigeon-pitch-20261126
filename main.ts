import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "Invest in Homing Inc.: 100% homing retention, zero charging costs, a moat of rooftop squatters — our only churn risk is a French bakery opening nearby.";

// Gate (competition.yaml): entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. The brief also requires one line.
const charCount = [...pitch].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Gate failed: pitch is ${charCount} characters, must be 1-200.`);
}
if (pitch.trim().length === 0) {
  throw new Error("Gate failed: pitch is only white space.");
}
if (pitch.includes("\n") || pitch.includes("\r")) {
  throw new Error("Gate failed: pitch must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log(pitch);
