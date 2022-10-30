import client from '../client.js'
import jsdom from "jsdom";
const { JSDOM } = jsdom;

async function generateAssetMap(themeId) {
  const results = []
  await client.get(`/theme-editor/${themeId}`).then(response => {
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    document.querySelectorAll('[data-asset-id]').forEach(assetLink => {
      const assetId = assetLink.getAttribute('data-asset-id')
      const fileName = assetLink.textContent.trim()

      const assetItem = {
        id: assetId,
        name: fileName
      }

      results.push(assetItem)
    });
  })

  return results
}

export default generateAssetMap