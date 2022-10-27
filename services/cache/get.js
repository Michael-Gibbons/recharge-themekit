const fs = require('fs')
const path = require('path');

const get = () => {
  const BUILD_PATH = path.join(__dirname, '../../build/')
  const FILE_PATH = path.join(BUILD_PATH, 'cache.json')

  if (!fs.existsSync(BUILD_PATH)){
    fs.mkdirSync(BUILD_PATH);
  }

  if (fs.existsSync(FILE_PATH)) {
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
  }

  const DEFAULT_CACHE = {}

  fs.writeFileSync(FILE_PATH, JSON.stringify(DEFAULT_CACHE), function (err) {
    if (err) throw err;
  });

  return {}
}

module.exports = get