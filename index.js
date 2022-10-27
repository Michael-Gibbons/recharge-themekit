const cache = require('./services/cache')
const edit = require('./services/recharge/theme/edit')
const generateAssetMap = require('./services/recharge/generateAssetMap')



const THEME_ID = '24277'
const ASSET_ID = '1174605'
// generateAssetMap(THEME_ID)
edit(THEME_ID, ASSET_ID)