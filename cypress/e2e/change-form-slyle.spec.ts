import { login } from './spec'

describe('Change form element styles', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })

  it('should change form styles', async () => {
    login()
    
    cy.get('#mat-expansion-panel-header-0').should('be.visible').click()
    cy.get('#mat-input-2').should('be.visible').clear().type('2px solid rgb(0, 0, 0)')
    cy.get('#mat-input-3').should('be.visible').clear().type('italic')
    cy.get('#mat-input-4').should('be.visible').clear().type('rgb(255, 128, 0)')
    cy.get('#change-form-styles-btn').should('be.visible').click()
  })
})