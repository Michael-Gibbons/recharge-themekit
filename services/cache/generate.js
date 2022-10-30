import list from "../recharge/theme/list.js"
import generateAssetMap from '../../services/recharge/theme/generateAssetMap.js'
import build from "./build.js"

const generate = async () => {
  const themes = await list().then(res => res.themes)

  const buildFile = []

  for (const theme of themes) {
    const themeAssets = await generateAssetMap(theme.id)
    buildFile.push({
      ...theme,
      latest: false,
      assets: themeAssets
    })
  }

  build(buildFile)
}

export default generate