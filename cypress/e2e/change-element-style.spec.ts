import { login } from './spec'

describe('Change form element styles', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })
  
  it('should change element styles', async () => {
    login()

    cy.get('#cdk-drop-list-0>form>div>app-input>input').should('be.visible').click()
    cy.get('#mat-expansion-panel-header-1').should('be.visible').click()
    cy.get('#mat-input-5').should('be.visible').clear().type('30px')
    cy.get('#mat-input-6').should('be.visible').clear().type('90px')
    cy.get('#mat-input-7').should('be.visible').clear().type('600')
    cy.get('#mat-input-8').should('be.visible').clear().type('24px')
    cy.get('#mat-input-9').should('be.visible').clear().type('rgb(128,255,72)')
    cy.get('#mat-input-10').should('be.visible').clear().type('dashed')
    cy.get('#mat-input-11').should('be.visible').clear().type('placeholder')
    cy.get('#mat-checkbox-1>label').should('be.visible').click()
    cy.get('#change-element-styles-btn').should('be.visible').click()
    cy.get('#cdk-drop-list-0>form>div>app-input>input').should('be.visible').type('test')
  })
})