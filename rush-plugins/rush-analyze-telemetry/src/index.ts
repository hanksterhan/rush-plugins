#!/usr/bin/env node

import { terminal } from "./helpers/terminal";
import { simulateBuildTime, printProjectBuildTimes } from "rush-analyze-telemetry"



// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

async function main(): Promise<void> {
  try {
    const fileName = "timestamp.json";
    simulateBuildTime(fileName);
  } catch (error: any) {
    if (error.message) {
      terminal.writeErrorLine(error.message);
    } else {
      throw error;
    }
    process.exit(1);
  }
}