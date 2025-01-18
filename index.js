#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import SnusbaseAPI from "snusbase";
const program = new Command();
const p = program
  .name("snusbase")
  .version("0.0.1")
  .description("A CLI for Snusbase")
  .showHelpAfterError()
  .argument("<query>", "The query to search for")
  .requiredOption("-t, --type <type>", "The type of search to perform")
  .requiredOption("-k, --key <key>", "The API key to use")
  .option("-e, --export <file>", "Export the results to a file as JSON")
  .action(async (query, options) => {
    const { key, type } = options;
    const api = new SnusbaseAPI(key);
    const res = await api.search({
      terms: [query],
      types: [type],
    });
    if (options.export) {
      fs.writeFileSync(options.export, JSON.stringify(res, null, 2));
      console.log(`Results exported to ${options.export}`);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });

program.parse();
