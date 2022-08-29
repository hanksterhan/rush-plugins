#!/usr/bin/env node

import os from 'os';
import path from 'path';

import { loadRushConfiguration } from "./helpers/loadRushConfiguration";
import { terminal } from "./helpers/terminal";

import type { RushConfiguration } from "@rushstack/rush-sdk";
import { JsonFile } from '@rushstack/node-core-library';


// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

async function main(): Promise<void> {
  try {
    const rushConfig: RushConfiguration = loadRushConfiguration();
    
  } catch (error: any) {
    if (error.message) {
      terminal.writeErrorLine(error.message);
    } else {
      throw error;
    }
    process.exit(1);
  }
}