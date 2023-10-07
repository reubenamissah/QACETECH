import {mercy} from "../fixtures/selector.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("Valid Login - I should be able to log in with my valid credentials", function () {
      cy.get(mercy.loginBtn).click()
      cy.get(mercy.emailField).click()
      cy.get(mercy.emailField).type(mercy.emailTxt)
      cy.get(mercy.passwordField).click()
      cy.get(mercy.passwordField).type(mercy.passwordTxt)
      cy.get(mercy.loginButton).click()
      cy.wait(9000)

    })

    it("Invalid Login - I should not be able to log in with my wrong credentials", function () {
        cy.get(mercy.loginBtn).click()
        cy.get(mercy.emailField).click()
        cy.get(mercy.emailField).type(mercy.emailTxt)
        cy.get(mercy.passwordField).click()
        cy.get(mercy.passwordField).type(mercy.passwordTxt)
        cy.get(mercy.loginButton).click()
        cy.wait(9000)
  
      })
})

