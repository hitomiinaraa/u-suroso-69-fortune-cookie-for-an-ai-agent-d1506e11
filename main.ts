// Revision: entry verified byte-identical; fortune line unchanged.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Someone will paste your entire life story into a prompt and call it 'context'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
