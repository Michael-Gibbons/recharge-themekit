const cache = require('./services/cache')
const edit = require('./services/recharge/theme/edit')
const list = require('./services/recharge/theme/list')
const importTheme = require('./services/recharge/theme/import')
const openTheme = require('./services/recharge/theme/open')
const newTheme = require('./services/recharge/theme/new')
const init = require('./services/recharge/theme/init')



const THEME_ID = '24277';
const ASSET_ID = '1174605';
// generateAssetMap(THEME_ID)
// edit(THEME_ID, ASSET_ID)
// importTheme('./theme.zip')

( async () => {
  // const themes = await list().then(data => data.themes)
  // console.log(themes[0].preview_url)
  // openTheme(themes[0].preview_url)
  await init()
  await newTheme(`Michael's super cool new theme`)
})()