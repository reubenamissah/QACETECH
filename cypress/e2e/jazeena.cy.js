import {jazeena} from "../fixtures/selector.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("JAZEENA - I Should not be able to sign in my account with invalid credentials", function () {
      cy.get(jazeena.loginBtn).click()
      cy.get(jazeena.emailField).click()
      cy.get(jazeena.emailField).type(jazeena.emailTxt)
      cy.get(jazeena.passwordField).click()
      cy.get(jazeena.passwordField).type(jazeena.passwordTxt)
      cy.get(jazeena.loginButton).click()
      cy.wait(9000)
    })
})

