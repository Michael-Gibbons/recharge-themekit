const client = require('../client')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const cache = require('../cache')

async function generateAssetMap(themeId) {
  client.get(`/theme-editor/${themeId}`).then(response => {

    let assetMap = {
      themes: [{
        id: themeId,
        assets: []
      }]
    }

    const foundTheme = assetMap.themes && assetMap.themes.find(theme => theme.id === themeId)

    if (!foundTheme) {
      assetMap.themes.push({
        id: themeId,
        assets: []
      })
    }

    const theme = assetMap.themes.find(theme => theme.id === themeId)


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

module.exports = generateAssetMap