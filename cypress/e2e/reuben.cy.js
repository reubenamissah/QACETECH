import {reuben} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("REUBEN - I Should not be able to sign in my account with invalid credentials", function () {
      cy.get(reuben.loginBtn).click()
      cy.get(reuben.emailField).click()
      cy.get(reuben.emailField).type(reuben.emailTxt)
      cy.get(reuben.passwordField).click()
      cy.get(reuben.passwordField).type(reuben.passwordTxt)
      cy.get(reuben.loginButton).click()
      cy.wait(9000)
    })
})

