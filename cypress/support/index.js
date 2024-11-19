require('dotenv').config();

Object.keys(process.env).forEach((key) => {
  if (key.startsWith('CYPRESS_')) {
    Cypress.env(key.replace('CYPRESS_', ''), process.env[key]);
  }
});
