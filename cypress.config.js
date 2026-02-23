import { defineConfig } from 'cypress'

import {plugin as grepPlugin} from '@cypress/grep/plugin'

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  allowCypressEnv: false,

  e2e: {
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      grepPlugin(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      
    },
    chromeWebSecurity: false,
    specPattern:"cypress/integration/*.cy.js",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: { 
      reporterDir: 'cypress/reports',
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      

     }
}
})
