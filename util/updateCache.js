const getCache = require('./getCache')
const buildCache = require('./buildCache')

const updateCache = (updates) => {
  const cache = getCache()
  const newCache = buildCache({...cache, ...updates })

  return newCache
}

module.exports = updateCache