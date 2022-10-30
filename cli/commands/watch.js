import { Command } from 'commander';
const program = new Command();
import path from 'path'
import fs from 'fs'

import chokidar from 'chokidar';
import cache from '../../services/cache/index.js'

import edit from '../../services/recharge/theme/edit.js'

const validateTheme = () => {

}

const handleChangedFile = async (filePath) => {
  const fileName = path.basename(filePath)
  const cacheCopy = cache.get()

  const currentTheme = cacheCopy.find(theme => theme.latest === true)
  const assetIdOfChangedFile = currentTheme.assets.find(asset => asset.name === fileName).id
  const source = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });

  await edit(currentTheme.id, assetIdOfChangedFile, { source }).then(() => {
    console.log(`Successfully updated ${fileName}`)
  })
}

const handleAddedFile = () => {
  //Find added file
  //upload to recharge
  //get asset id
  //update asset_map
}

const handleRemovedFile = () => {
  //Find removed file
  //delete from recharge
  //get asset id
  //update asset_map
}

const watch = program.command('watch')
  .description('Watch a directory and upload all file changes to recharge')
  .action(async () => {
    const THEME_PATH = path.resolve(process.cwd(), './theme')// TODO: get this path dynamically

    const watcher = chokidar.watch(THEME_PATH, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });

    const log = console.log.bind(console);

    const currentTheme = cache.get().find(theme => theme.latest)

    watcher
      .on('add', path => handleAddedFile(path))
      .on('change', path => handleChangedFile(path))
      .on('unlink', path => handleRemovedFile(path))
      .on('ready', () => log(`Initial scan complete. Watching for changes for theme: ${currentTheme.name}`));
  });

export default watch