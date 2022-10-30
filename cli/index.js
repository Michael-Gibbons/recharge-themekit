#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

import watch from './commands/watch.js'
import select from './commands/select.js'

program
  .name('rc-theme')
  .usage("[global options] command")
  .description('Command line tool to help bootstrap Recharge Theme Engine Development')
  .version('0.1.0');

program.addCommand(watch)
program.addCommand(select)

program.configureHelp()

program.parse()