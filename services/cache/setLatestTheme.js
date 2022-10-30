import build from './build.js'
import get from './get.js'

const setLatestTheme = (themeId) => {
  const cache = get()

  for (const theme of cache) {
    theme.latest = false

    if(theme.id === themeId){
      theme.latest = true
    }
  }

  build(cache)
}

export default setLatestTheme