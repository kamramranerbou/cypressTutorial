/// <reference types = "cypress" />

const { capitalize } = require("lodash")

describe ('Test work', () => {
            
    it('Testfaelle - 1', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    it('Testfaelle - 2', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    it('Testfaelle - 3', () => {
        cy.login('Tauto_auswerter', '#Gaedfk21')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    it.only('Testfaelle - 4', () => {
        cy.login('test@behorde.dglueck.de', '#Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")

        cy.get('[id="mat-input-0"]').click().type('kamran')
        
    })
})

