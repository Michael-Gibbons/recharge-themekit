const formData = new FormData();
const file = fs.createReadStream('./theme.zip');
formData.append('theme_asset_files', file, 'theme.zip');
formData.append('theme_name', 'Push Test');

client.post('/portal_theme/import_theme', formData).then(response => {

});