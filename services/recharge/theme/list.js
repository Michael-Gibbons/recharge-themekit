const client = require('../../client')

const list = async () => {
  return await client.get('/portal_theme.json?page=1&limit=250').then(res => res.data)
}

module.exports = list