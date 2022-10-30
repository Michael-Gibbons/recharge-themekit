import client from '../../client.js'
import jsdom from "jsdom";
const { JSDOM } = jsdom;

import cache from '../../cache/index.js'

async function generateAssetMap(themeId) {
  await client.get(`/theme-editor/${themeId}`).then(response => {

    let assetMap = {
      themes: [{
        id: themeId,
        assets: []
      }]
    }

    const foundTheme = assetMap.themes && assetMap.themes.find(theme => theme.id == themeId)

    if (!foundTheme) {
      assetMap.themes.push({
        id: themeId,
        assets: []
      })
    }

    const theme = assetMap.themes.find(theme => theme.id == themeId)


    const dom = new JSDOM(response.data);
    const document = dom.window.document

    document.querySelectorAll('[data-asset-id]').forEach(assetLink => {
      const assetId = assetLink.getAttribute('data-asset-id')
      const fileName = assetLink.textContent.trim()

      const assetItem = {
        id: assetId,
        name: fileName
      }

      theme.assets.push(assetItem)
    });

    cache.update({ ...assetMap })

  })
}

const init = async (themeId) => {
  await generateAssetMap(themeId)
}

export default init