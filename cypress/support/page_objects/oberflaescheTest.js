import { capitalize } from "lodash"

export class frontEnd {

    titleOfThePage() {
        
        //Chaking title of the page
        cy.get('title').should('contain', 'CCI')
    }

    userInfo() {

        // Avatar
        cy.get('.v-avatar')
            .should('contain', 'RD')

        // Asserting User Name
        cy.get('.v-navigation-drawer__content')
            .find('[class="col col-auto"]')
                .should('contain','User XY')
    }

    menuBar() {

        // clicking Start
        cy.get('[class="v-list-item__title ml-4"]')
            .contains('Start')
                .click()
        cy.wait(3000)

        // clicking Intents
        cy.get('[data-cy=navDrawerIntents]')
            .contains('Intents')
                .click()
        cy.wait(500)
        
        // clicking Entities
        cy.get('[data-cy=navDrawerEntities]')
            .contains('Entities')
                .click()
        cy.wait(500)

        // clicking Slots
        cy.get('[data-cy=navDrawerSlots]')
            .contains('Slots')
                .click()
        cy.wait(500)

        // Clicking Synonyms
        cy.get('[data-cy=navDrawerSynonyms]')
            .contains('Synonyms')
                .click()
        cy.wait(1000)

        // clicking Responses

        cy.get('[data-cy=navDrawerResponses]')
            .contains('Responses')
                .click()
        cy.wait(1000)
    }

    intents() {
        // Intents area testing
        cy.get('[data-cy=navDrawerIntents]')
            .contains('Intents')
                .click()
        cy.wait(500)
        // Search something
        cy.get('[id="input-49"]').type('Wetter')

        cy.get('[data-cy=createIntentButton]').click()

        cy.get('[role="radiogroup"]')
            .find('[value="no"]')
                .click({force:true})

        cy.get('[role="radiogroup"]')
            .find('[value="yes"]')
                .click({force:true})
        
        cy.get('.v-breadcrumbs__item')
            .contains('Intents')
                .click()
        
    }

    mockingApi () {

        cy.get('[data-cy=navDrawerIntents]')
            .contains('Intents')
                .click()
    }
}

// Exportint class frontEnd to End2End to test
export const onFrontend = new frontEnd()