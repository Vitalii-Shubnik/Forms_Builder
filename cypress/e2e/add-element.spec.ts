import { login } from "./spec"

describe('Change form element styles', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })

  it('should click existing element', async () => {
    login()
    cy.get('#mat-select-value-1').should('be.visible').click()
      .get("mat-option[ng-reflect-value='select']").should('be.visible').click()
    cy.get('button.add-item').should('be.visible').click()
    cy.get('app-select').should('have.length', 2)
  })
})