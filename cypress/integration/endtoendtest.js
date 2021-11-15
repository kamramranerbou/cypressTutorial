/// <reference types = "cypress" />

const { method } = require("bluebird")
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

        cy.intercept({
            method:'GET',
            url : 'https://qs.lugas.dsecure-bdc.dataport.de/api/Providers?deleted=false'
        },
        {
            statusCode: 200,
            body: 
            [
                {
                    "id":"c06a4174-1a3a-432a-8107-01c4c553bdcd",
                    "simpleName":"KAMRAN",
                    "name":"Kamran"
                }
            ]
        })
        
    })
})

