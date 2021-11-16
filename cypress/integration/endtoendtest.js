/// <reference types = "cypress" />

const { method } = require("bluebird")
const { capitalize } = require("lodash")

describe ('Test work', () => {
            
    it('Testfaelle - 1', () => {
        cy.login('Tauto_anbieterverwalter', '"Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")

        cy.get('[class="mat-button-wrapper"]')
            .contains('account_circle').click()
        
        cy.get('[class="mat-focus-indicator mat-menu-item ng-tns-c34-4"]').contains('tauto_anbieterverwalter')
        
    })

    it('Testfaelle - 2', () => {
        cy.login('Tauto_anbieterverwalter', '"Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")

        cy.get('[class="mat-button-wrapper"]')
            .contains('account_circle').click()
        
        cy.get('[class="mat-focus-indicator mat-menu-item ng-tns-c34-4"]').contains('tauto_anbieterverwalter')
        
    })

    it('Testfaelle - 3', () => {
        cy.login('Tauto_auswerter', '"Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")

        cy.get('[class="mat-button-wrapper"]')
            .contains('account_circle').click()
        
        cy.get('[class="mat-focus-indicator mat-menu-item ng-tns-c34-4"]').contains('tauto_auswerter')
        
    })

    it('Testfaelle - 4', () => {
        cy.login('test@behorde.dglueck.de', '#Gandalf1')
        cy.visit("https://qs.lugas.dsecure-bdc.dataport.de/frontend/Anbieterverwaltung")

        //cy.get('[class="mat-button-wrapper"]').contains('account_circle')
        
        //cy.contains('administrator-user').click({force:true})

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
        
        // cy.get('[class="mat-button-wrapper"]')
        //     .contains('account_circle').trigger('mouseover')

        cy.get('[class="mat-button-wrapper"]')
            .contains('account_circle').click()
        
        cy.get('[class="mat-focus-indicator mat-menu-item ng-tns-c34-4"]').contains('administrator-user')

        cy.get('[class="mat-icon notranslate material-icons mat-icon-no-color"]')//.contains('administrator-user')
        cy.get('[class="mat-menu-content ng-tns-c34-4"]')
            .find('[class="mat-icon notranslate material-icons mat-icon-no-color"]')
            //.find('[class="mat-icon notranslate material-icons mat-icon-no-color"]')
        cy.get('[class="mat-ripple mat-menu-ripple"]')//.contains('administrator-user')      
        
    })
})

