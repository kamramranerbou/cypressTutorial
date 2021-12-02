import { capitalize } from "lodash"


const m = Math.floor(Math.random() * 1000);

export class frontEnd {

    titleOfThePage() {
        
        //Chaking title of the page
        cy.get('title').should('contain', 'CCI')
    }

    userInfo() {
        
        // Avatar
        cy.get('.v-avatar')
            .should('contain', 'CCI')

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
        cy.wait(1000)

        cy.get('[class="v-list-item__title"]')
            .contains('Trainingsdaten')
                .click()

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

        // Actions
        cy.get('[data-cy="navDrawerActions"]')
            .contains('Actions')
                .click()
        cy.wait(500)
    }

    intents() {

        // Expand Navigation Trainingsdaten
        cy.get('[class="v-list-item__title"]')
            .contains('Trainingsdaten')
                .click()

        // Intents area testing
        cy.get('[data-cy=navDrawerIntents]')
            .contains('Intents')
                .click()
        cy.wait(500)
        // Search something
        cy.get('[class="v-text-field__slot"]')
            .contains('Suchen').click({force:true})
                .type('Wetter')

        cy.get('[data-cy=createIntentButton]').click()
        cy.wait(500)

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

    Entities() {
        cy.get('[data-cy="navDrawerEntities"]')
            .contains('Entities')
                .click()

        cy.get('.v-text-field__slot')
            .contains('Suchen')
                .click({force:true})
                    .type('test')
    }

    mockingApi () {

        cy.get('[data-cy=navDrawerIntents]')
            .contains('Intents')
                .click()
    }

    restApiTesting() {
        cy.request("http://localhost/cci-backend/intent")
            .then((response) => {
                expect(response.status).to.equal(200)
            })

        cy.request({
            method:'POST',
            url: "/cci-backend/intent",

            body: {
                "id": 3,
                "name": "test3",
                "description": ""
            }
        }).then((response) => {
            expect(response.body).has.property("description", "");
        })

        cy.request({
            method:'GET', 
            url: "/cci-backend/intent",
            body: {
                        "id":3,
                        "name": "test3",
                        "description": ""
                    }
        })
        
        cy.request("/cci-backend/intent")
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')

        cy.request({
            method:'POST',
            url: "/cci-backend/intent",

            body: {
                "id":1,
                "name": "test1",
                "description": "test1",
            }
        })

        cy.request('/cci-backend/intent')
            .its('body')
            .should('have.length', 2)
    }

    backEndTesting() {
        
        // get Response code
        cy.request({
            method: 'GET', 
            url: '/cci-backend/intent'
        }).then((response) => {
                expect(response.status).to.eq(200)
        })

        // POST and ASSERT Post
        cy.request({
            method:'POST',
            url: "/cci-backend/intent",

            body: {
                "id": m,
                "name": "test"+String(m),
                "description": "test"+String(m),
            }
        }).then(
                    (response) => {
                    //expect(response.body.id).to.eq(m)
                    expect(response.body).has.property('name', "test"+String(m));
                    expect(response.body).has.property('description', "test"+String(m));
            })
        let i = 2
        const j = i * 3
        cy.request('/cci-backend/intent')
            .its('body')
                .should('have.length', 3)
    }
}

// Exportint class frontEnd to End2End to test
export const onFrontend = new frontEnd()