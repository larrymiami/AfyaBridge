import { readFileSync } from "node:fs";

const messagePath = process.argv[2];

if (!messagePath) {
  console.error("Missing commit message file path.");
  process.exit(1);
}

const message = readFileSync(messagePath, "utf8").trim();
const firstLine = message.split(/\r?\n/, 1)[0];

const ignoredPrefixes = [
  "Merge ",
  "Revert ",
  "fixup! ",
  "squash! ",
];

const conventionalCommitPattern =
  /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9._-]+\))?!?: .{1,100}$/;

if (ignoredPrefixes.some((prefix) => firstLine.startsWith(prefix))) {
  process.exit(0);
}

if (!conventionalCommitPattern.test(firstLine)) {
  console.error("Invalid commit message.");
  console.error("");
  console.error("Use Conventional Commits:");
  console.error("  feat: add patient dashboard");
  console.error("  fix(auth): handle expired sessions");
  console.error("");
  console.error("Allowed types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test");
  process.exit(1);
}
