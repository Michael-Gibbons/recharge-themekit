const FormData = require('form-data');

const client = require('../../client')

const newTheme = async (name) => {
  const formData = new FormData();
  formData.append('frontend_version', 'Novum_v5.0.0');
  formData.append('theme_name', name);

  return await client.post('/portal_theme/import_theme', formData).then(res => res.data);
}

module.exports = newTheme