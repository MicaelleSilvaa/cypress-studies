const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:57738',
  },
  env: {
    USUARIO: process.env.CYPRESS_USUARIO,
    SENHA: process.env.CYPRESS_SENHA,
    URLBASE: process.env.CYPRESS_URLBASE,
  }
});
