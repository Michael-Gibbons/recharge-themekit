import client from '../../client.js'

const list = async () => {
  return await client.get('/portal_theme.json?page=1&limit=250').then(res => res.data)
}

export default list