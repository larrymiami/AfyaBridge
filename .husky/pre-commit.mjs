import { execSync } from "node:child_process";

execSync("pnpm exec lint-staged", { stdio: "inherit" });
