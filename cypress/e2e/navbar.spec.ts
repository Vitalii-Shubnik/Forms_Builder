import { login, routes } from './spec'

describe('App Test', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })
  
  it('Login', () => {
    cy.visit(routes['home'], { failOnStatusCode: false })
    login()
    cy.url().should('be.equals', routes['home'])
  })

  it('should logout through navbar', () => {
    cy.get('div.ng-tns-c16-2.toast-message.ng-star-inserted').should('be.visible').click()
    cy.get('div.navbar>button').should('be.visible').click()
    cy.url().should('be.equals', routes['auth'])
  })
})