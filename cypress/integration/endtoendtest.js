/// <reference types = "cypress" />

const { capitalize } = require("lodash")

describe ('Test work', () => {
        
    beforeEach(() => {
        cy.login('test@behorde.dglueck.de', '#Gandalf1')

    })
    
    it('reduction oberflasche end to end test', () => {
        cy.login('test@behorde.dglueck.de', '#Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
    })

    it('reduction oberflasche end to end test', function() {
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")
        
        
    })

})

