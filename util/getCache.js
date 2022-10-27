const fs = require('fs')
const path = require('path');

const getCache = () => {
  const FILE_PATH = path.join(__dirname, '../build/cache.json')

  if (fs.existsSync(FILE_PATH)) {
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
  }

  const DEFAULT_CACHE = {}

  fs.writeFileSync(FILE_PATH, JSON.stringify(DEFAULT_CACHE), function (err) {
    if (err) throw err;
  });

  return {}
}

module.exports = getCache