import {aisha} from "../fixtures/selector.js";

Cypress.on('uncaught:exception', (err, runnable) =>{
  // returning false here prevents Cypress from
  // failing test
  return false

})
describe("Given I am on the Konga page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    
    it("AISHA - I Should be able to sign in my account with valid credentials", function () {
      cy.get(aisha.loginBttn).click()
      cy.get(aisha.emailFieeld).click()
      cy.get(aisha.emailFieeld).type(aisha.emailText)
      cy.get(aisha.passwrdField).click()
      cy.get(aisha.passwrdField).type(aisha.passwordText)
      cy.get(aisha.loginButtn).click()
      cy.wait(5000)
      
    })
})