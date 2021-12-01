import { beforeEach } from "mocha"
import { onFrontend } from "../support/page_objects/oberflaescheTest"

describe ('Test - 1', () => {

    beforeEach('visit url', () => {
        cy.visit('/')
        cy.get('[class="v-list-item__title"]').contains('Trainingsdaten').click()
        cy.get("[data-cy=navDrawerIntents]").click()
        cy.url().should("eq", "http://localhost/trainingsdaten/intent/");
    })

    
    // it("open create intent dialog", () => {
    //     cy.get('[data-cy="navDrawerIntents"]').click()
    //     cy.get("[data-cy=createIntentButton]").click();
    //     cy.get("[data-cy=createIntentDialogTitle]").contains("Intent erstellen");
    //     cy.get("[data-cy=createIntentDialogUseEntityCheckbox]").should("be.checked");
    // });

    // it.only("create new intent", () => {
    //     //cy.get("[data-cy=createIntentButton]").click();
    //     cy.get("[data-cy=createIntentButton]").click();
    //     //cy.get("[data-cy=createIntentDialogNameInput]").should("visible");
    //     //cy.get("[data-cy=createIntentDialogNameInput]").type(intentName);
    //     cy.get("[data-cy=createIntentDialogDescriptionInput]")
    //     //cy.get("[data-cy=createIntentDialogDescriptionInput]").type(intentDescription);
    //     cy.get("[data-cy=createIntentDialogSaveIntentButton]").should("visible");
    //     cy.get("[data-cy=createIntentDialogSaveIntentButton]").click();
    //     cy.get("[data-cy=successMessageTitle]").should("visible");
    //     //cy.get("[data-cy=successMessageTitle]").contains(`Das Intent "${intentName}" wurde erfolgreich gespeichert`);
    //     cy.get("[data-cy=successCloseButton]").click();
    //     cy.get("[data-cy=successMessageTitle]").should("not.visible");
    //     cy.get("[data-cy=errorMessageTitle]").should("not.visible");
    //     cy.get("[data-cy=errorMessageBody]").should("not.visible");
    //     //cy.contains("td", regExpIntentName).parent().contains("td", inintentDescription);
    // });

    it('Testing Menu', () => {

        onFrontend.titleOfThePage()
        onFrontend.userInfo()
        onFrontend.menuBar()

    })
})

describe ('Test - 2', () => {

    beforeEach('visit url', () => {
        cy.visit('/')
        cy.get('[class="v-list-item__title"]').contains('Trainingsdaten').click()
    })

    it.only('Testing Body', () => {

        onFrontend.intents()
        onFrontend.Entities()

    })
})

describe('Test backend - 3', () => {

    beforeEach('visit url', () => {

        

        cy.intercept({
            method:'GET',
            url : '/cci-backend/intent'
        },
        {
            
            body: 
            [
                {
                "id":6,
                "name":"Ripon",
                "description":"",
                "createDate":"2021-11-17T09:06:28.807+00:00",
                "useEntities":true,
                "version":2,
                "changeDate":"2021-11-17T09:07:04.112+00:00",
                "exampleCount":2   
                }      
            ]
        })

        cy.visit('/')
        cy.get('[class="v-list-item__title"]').contains('Trainingsdaten').click()
    })

    it.only('Mocking Network Response', () => {
        onFrontend.mockingApi ()
    })
})

describe("Testing API Endpoints", () => {
    it("Test Get Request", () => {

        onFrontend.restApiTesting()
    })
})