import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// used in updateCache, not to be used directly
const build = (newCache) => {
  const FILE_PATH = path.join(__dirname, '../../build/cache.json')

  fs.writeFileSync(FILE_PATH, JSON.stringify(newCache), function (err) {
    if (err) throw err;
  });

  return newCache
}

export default build