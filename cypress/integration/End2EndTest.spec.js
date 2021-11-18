

import { onFrontend } from "../support/page_objects/oberflaescheTest"

describe ('Test - 1', () => {

    beforeEach('visit url', () => {
        cy.visit('/')
    })

    it('Testing Menu', () => {

        onFrontend.titleOfThePage()
        onFrontend.userInfo()
        onFrontend.menuBar()

    })
})

describe ('Test - 2', () => {

    beforeEach('visit url', () => {
        cy.visit('/')
    })

    it.only('Testing Body', () => {

        onFrontend.intents()
        //onFrontend.userInfo()
        //onFrontend.menuBar()

    })
})


// describe ('Test', () => {

//     beforeEach('Open Url', () => {
//         cy.visit('/')
//     })

//     it('test suit 1', () => {

//         cy.get('[class="v-list-item__title ml-4"]').contains('Start').click()
    
//         cy.get('[data-cy=navDrawerIntents] > .v-list-item__content > .v-list-item__title > span').click()
        
        
//         cy.get('.v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon > .v-icon__svg').click()

//         cy.get('[data-cy=navDrawerEntities] > .v-list-item__content > .v-list-item__title > span').click()

//         cy.get('[data-cy=navDrawerSlots] > .v-list-item__content > .v-list-item__title > span').click()

//         cy.get('[data-cy=navDrawerSynonyms] > .v-list-item__content > .v-list-item__title > span').click()

//         cy.get('[data-cy=navDrawerResponses] > .v-list-item__content > .v-list-item__title > span').click()

//     })
// })