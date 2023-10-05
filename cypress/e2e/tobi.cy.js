import {tobi} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
    // returning false here prevents Cypress from
    // failing test
    return false
  
  })
  describe("Given I am on the Konga page", function () {
      beforeEach(function () {
          cy.visit('/')
      });
    it("TOBI - I Should be able to sign in my account with valid credentials", function () {
        cy.get(tobi.firstLoginBtn).click ()
        cy.get(tobi.validemailField).click ()
        cy.get(tobi.validemailField).type ("oadelua@gmail.com")
        cy.get(tobi.validpasswordField).click ()
        cy.get(tobi.validpasswordField).type ("Password@01")
        cy.get(tobi.loginBtn).click ()
        cy.wait (9000)
})
})