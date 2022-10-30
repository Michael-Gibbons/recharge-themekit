import { Command } from 'commander';
const program = new Command();

import inquirer from 'inquirer'
import list from '../../services/recharge/theme/list.js'
import setLatestTheme from '../../services/cache/setLatestTheme.js';

const select = program.command('select')
  .description('Get a list of all recharge themes and select the one you would like to work on.')
  .action(async () => {
    const themes = await list().then(res => res.themes)

    const choices = themes.map(theme => {
      return {
        name: theme.name,
        value: theme
      }
    })

    const question = {
      name: 'select',
      type: 'list',
      message: 'Please select the theme you would like to work on:',
      choices
    }

    inquirer
      .prompt([
        question
      ])
      .then((answers) => {
        const selectedTheme = answers.select
        setLatestTheme(selectedTheme.id)
      })
  });

export default select