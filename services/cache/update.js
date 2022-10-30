import get from './get.js'
import build from './build.js'

const update = (updates) => {
  const cache = get()
  const newCache = build({ ...cache, ...updates })

  return newCache
}

export default update