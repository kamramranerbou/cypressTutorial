/// <reference types = "cypress" />

const { capitalize } = require("lodash")

describe ('Test work', () => {
        
    beforeEach(() => {
        cy.login('test@behorde.dglueck.de', '#Gandalf1')

    })
    
    it('Testfälle - 1', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    it('Testfälle - 2', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    it('Testfälle - 3', () => {
        cy.login('Tauto_auswerter', '#Gaedfk21')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })
    it('Testfälle - 4', () => {
        cy.login('Tauto_auswerter', '#Gaedfk21')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        cy.wait(2500)
        
    })

    

})

