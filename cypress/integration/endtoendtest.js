/// <reference types = "cypress" />

const { capitalize } = require("lodash")

describe ('Test work', () => {
        
    beforeEach(() => {
        cy.login()

    })
    
    it('Testfaelle - 1', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
    })

    it('Testfaelle - 2', () => {
        cy.login('Tauto_anbieterverwalter', '#Gadefk12')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
    })

    it('Testfaelle - 3', () => {
        cy.login('Tauto_auswerter', '#Gaedfk21')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
    })
    it('Testfaelle - 4', () => {
        cy.login('Tauto_auswerter', '#Gaedfk21')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
    })

    

})

