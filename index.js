// const generateAssetMap = require('./bin/commands/actions/generateAssetMap.js')
const getCache = require('./util/getCache.js')
const updateCache = require('./util/updateCache.js')


const THEME_ID = '24277'
// generateAssetMap(THEME_ID)
const cache = getCache()
console.log(cache)

const updatedCache = updateCache({ ...cache, latest: 9 })
console.log(updatedCache)