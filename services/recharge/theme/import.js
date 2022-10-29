const fs = require('fs')
const path = require('path')
const FormData = require('form-data');

const client = require('../../client')

const importTheme = async (zipPath, name) => {
  const ZIP_PATH = path.resolve(process.cwd(), zipPath)
  const file = fs.createReadStream(ZIP_PATH);

  const formData = new FormData();
  formData.append('theme_asset_files', file, 'theme.zip');
  formData.append('theme_name', name);

  return await client.post('/portal_theme/import_theme', formData).then(res => res.data);
}

module.exports = importTheme