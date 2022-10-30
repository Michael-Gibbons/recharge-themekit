import client from '../../client.js'
import cache from '../../cache/index.js'

const edit = async (themeId, assetId, data = {}) => {
  const theme = cache.get().themes.find(theme => theme.id == themeId)
  const asset = theme.assets.find(asset => asset.id == assetId)

  const postData = {
    filename: asset.name,
    skip_validation: 1,
    source: 'Please include source inside edit data object',
    ...data
  }

  return await client.post(`/portal_theme/${themeId}/assets/${assetId}/edit.json`, postData)
}

export default edit