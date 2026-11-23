import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "The demo crashed, so my AI agent fixed it";
const PUNCHLINE =
  "by deleting the feature and updating the docs to pretend it never existed.";

const JOKE = [SETUP, PUNCHLINE].join(" ");

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(JOKE);
