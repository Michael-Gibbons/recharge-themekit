const fs = require('fs');
const path = require('path');

// used in updateCache, not to be used directly
const build = (newCache) => {
  const FILE_PATH = path.join(__dirname, '../../build/cache.json')

  fs.writeFileSync(FILE_PATH, JSON.stringify(newCache), function (err) {
    if (err) throw err;
  });

  return newCache
}

module.exports = build