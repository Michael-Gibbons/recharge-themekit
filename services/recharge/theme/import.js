import fs from 'fs'
import path from 'path'
import FormData from 'form-data';

import client from '../../client.js'

const importTheme = async (zipPath, name) => {
  const ZIP_PATH = path.resolve(process.cwd(), zipPath)
  const file = fs.createReadStream(ZIP_PATH);

  const formData = new FormData();
  formData.append('theme_asset_files', file, 'theme.zip');
  formData.append('theme_name', name);

  return await client.post('/portal_theme/import_theme', formData).then(res => res.data);
}

export default importTheme