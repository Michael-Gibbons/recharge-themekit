const get = require('./get')
const build = require('./build')

const update = (updates) => {
  const cache = get()
  const newCache = build({ ...cache, ...updates })

  return newCache
}

module.exports = update