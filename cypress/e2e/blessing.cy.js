import {blessing} from "../fixtures/selector.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("BLESSING - I Should not be able to sign in my account with invalid credentials", function () {
      cy.get(blessing.loginBtn).click()
      cy.get(blessing.emailField).click()
      cy.get(blessing.emailField).type(blessing.emailTxt)
      cy.get(blessing.passwordField).click()
      cy.get(blessing.passwordField).type(blessing.passwordTxt)
      cy.get(blessing.loginButton).click()
      cy.wait(9000)
    })
})


