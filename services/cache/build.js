import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import mkdirp from 'mkdirp'

// used in updateCache, not to be used directly
const build = (newCache) => {
  const FILE_NAME = '/cache.json'
  const FILE_PATH = path.join(__dirname, '../../build/')

  mkdirp(FILE_PATH).then(() =>{
    fs.writeFileSync(FILE_PATH + FILE_NAME, JSON.stringify(newCache), function (err) {
      if (err) throw err;
    });
  });

  return newCache
}

export default build