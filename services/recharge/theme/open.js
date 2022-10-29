const open = require('open');

const openTheme = async (url) => {
  await open(url);
}

module.exports = openTheme