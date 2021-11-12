// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { capitalize } = require("lodash")

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung')
        cy.get('[id="username"]').type('test@behorde.dglueck.de')
        cy.get('#password').type('#Gandalf1')
        cy.get('[class="d-grid"]').find('[id="kc-login"]').click()
    })
    
})