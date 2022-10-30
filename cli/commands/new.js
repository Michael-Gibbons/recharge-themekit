import { Command } from 'commander';
const program = new Command();

import newTheme from '../../services/recharge/theme/new.js'
import inquirer from 'inquirer'
import generate from '../../services/cache/generate.js';


const createNewTheme = program.command('new')
  .description('Create a new theme using the Novum v5 template')
  .action(async () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter the name of this new theme:'
        }
      ])
      .then(async (answers) => {
        console.log(`Creating a new theme named: ${answers.name}`)
        await newTheme(answers.name)
        console.log('Rebuilding asset map')
        await generate()
        console.log('Complete!')
      })
  })


export default createNewTheme