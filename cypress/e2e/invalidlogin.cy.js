import {invalidlogin} from "../fixtures/selector.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("INVALIDLOGIN - I Should not be able to sign in my account with invalid credentials", function () {
      cy.get(invalidlogin.loginBtn).click()
      cy.get(invalidlogin.emailField).click()
      cy.get(invalidlogin.emailField).type(invalidlogin.emailTxt)
      cy.get(invalidlogin.passwordField).click()
      cy.get(invalidlogin.passwordField).type(invalidlogin.passwordTxt)
      cy.get(invalidlogin.loginButton).click()
      cy.wait(9000)
    })
})

