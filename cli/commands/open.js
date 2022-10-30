import { Command } from 'commander';
const program = new Command();

import openTheme from '../../services/recharge/theme/open.js'
import cache from '../../services/cache/index.js'

const open = program.command('open')
  .description('Open the currently selected recharge theme in a new tab.')
  .action(async () => {
    const currentTheme = cache.get().find(theme => theme.latest)
    console.log(`Opening theme: "${currentTheme.name}" in browser! \n\n${currentTheme.preview_url}`)
    await openTheme(currentTheme.preview_url)
  })


export default open