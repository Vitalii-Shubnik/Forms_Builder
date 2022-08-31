import { routes } from './spec'

describe('Register for first time', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })
  it('should register user', () => {
    cy.visit(routes.home, { failOnStatusCode: false })

    cy.get('#auth-form-email')
      .should('be.visible')
      .type('user1@gmail.com')

    cy.get('#auth-form-password')
      .should('be.visible')
      .type('password')

    cy.get('#auth-form-change-method')
      .should('be.visible')
      .click()

    cy.get('button')
      .should('not.be.disabled')
      .click()
  })
})