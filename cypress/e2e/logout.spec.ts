import { login, routes } from './spec'

describe('Auth Test', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })
  it('Visits the initial project page ', () => {
    cy.visit(routes.home, { failOnStatusCode: false })

    cy.url().should('be.equals', routes.auth)
  })

  it('Register user', () => {
    login()
    cy.url().should('be.equals', routes.home)
  })

  it('Logout', () => {
    cy.go('back')

    cy.get('#logout')
      .should('be.visible')
      .click()

    cy.get('form.login-form').should('be.visible')
  })
})