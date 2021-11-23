

import { beforeEach } from "mocha"
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
                "name":"Wetter",
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
    })

    it('Mocking Network', () => {
        onFrontend.mockingApi ()
    })
})