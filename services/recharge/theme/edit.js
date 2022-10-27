const client = require('../../client.js')
const cache = require('../../cache')

const edit = async (themeId, assetId, data = {}) => {
  const theme = cache.get().themes.find(theme => theme.id == themeId)
  const asset = theme.assets.find(asset => asset.id == assetId)

  const postData = {
    filename: asset.name,
    skip_validation: 1,
    source: 'Test',
    ...data
  }

  client.post(`/portal_theme/${themeId}/assets/${assetId}/edit.json`, postData).then(response => console.log(response))
}

module.exports = edit