import {login} from "../fixtures/selector.js";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("INVALID LOGIN - I Should not be able to login into my account with an invalid details", function () {
      cy.wait(3000)
      cy.get(login.invalidemailField).click()
      cy.get(login.invalidemailField).type("oladoyin2@gmail.com")
      cy.get(login.passwordField).click()
      cy.get(login.passwordField).type("Techy123")
      cy.get(login.loginBtn).click()
      
    })

    it("VALID LOGIN - I Should be able to login into my account with valid details", function () {
      cy.wait(3000)
      cy.get(login.validemailField).click()
      cy.get(login.validemailField).type("oladoyintemitope@gmail.com")
      cy.get(login.passwordFld).click()
      cy.get(login.passwordFld).type("Tinuola@2")
      cy.get(login.loginBtn).click()
  
    })
})