import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(100)

export const login = () => {
  cy.visit(routes.home)
  cy.get('#auth-form-email')
    .should('be.visible')
    .type('user1@gmail.com')

  cy.get('#auth-form-password')
    .should('be.visible')
    .type('password')

  cy.get('button')
    .should('not.be.disabled')
    .click()
}

const drag = (dragSelector: string, dropSelector: string) => {
  cy.get(dragSelector).should('exist')
    .get(dropSelector).should('exist')

  const draggable = Cypress.$(dragSelector)[0]
  const droppable = Cypress.$(dropSelector)[0]

  const coords = droppable.getBoundingClientRect()
  draggable.dispatchEvent(<any>new MouseEvent('mousedown'))
  draggable.dispatchEvent(<any>new MouseEvent('mousemove', { clientX: 10, clientY: 0 }))
  draggable.dispatchEvent(<any>new MouseEvent('mousemove', {
    clientX: coords.left + 10,
    clientY: coords.top + 10
  }))
  draggable.dispatchEvent(new MouseEvent('mouseup'))
  return cy.get(dropSelector)
}

export const routes = {
  "home": 'http://localhost:4200/home',
  "auth": 'http://localhost:4200/authenticate'
}

xdescribe('Drag Test', () => {
  const dataTransfer = new DataTransfer()
  xit('should drag', () => {
    cy.get('#cdk-drop-list-3>form>div:nth-child(1)').trigger('dragstart', { dataTransfer })
    cy.get('#cdk-drop-list-0').trigger('drop', { dataTransfer })
    cy.get('#cdk-drop-list-3>form>div:nth-child(1)').trigger('dragend')
    cy.get('#cdk-drop-list-0>form>div:first').should('be.visible')
  })
})

// xdescribe('Change form element styles', () => {
//   it('should click existing element', async () => {
//     cy.get('#cdk-drop-list-0>form>div>app-input>input').should('be.visible').click()
//     cy.get('#mat-expansion-panel-header-1').should('be.visible').click()
//     cy.get('#mat-input-5').should('be.visible').clear().type('30px')
//     cy.get('#mat-input-6').should('be.visible').clear().type('90px')
//     cy.get('#mat-input-7').should('be.visible').clear().type('600')
//     cy.get('#mat-input-8').should('be.visible').clear().type('24px')
//     cy.get('#mat-input-9').should('be.visible').clear().type('rgb(128,255,72)')
//     cy.get('#mat-input-10').should('be.visible').clear().type('dashed')
//     cy.get('#mat-input-11').should('be.visible').clear().type('placeholder')
//     cy.get('#mat-checkbox-1>label').should('be.visible').click()
//     cy.get('#change-element-styles-btn').should('be.visible').click()
//     cy.get('#cdk-drop-list-0>form>div>app-input>input').should('be.visible').type('test')
//   })
// })

// xdescribe('Change form element styles', () => {
//   it('should click existing element', async () => {
//     cy.get('#mat-expansion-panel-header-0').should('be.visible').click()
//     cy.get('#mat-input-2').should('be.visible').clear().type('2px solid rgb(0, 0, 0)')
//     cy.get('#mat-input-3').should('be.visible').clear().type('italic')
//     cy.get('#mat-input-4').should('be.visible').clear().type('rgb(255, 128, 0)')
//     cy.get('#change-form-styles-btn').should('be.visible').click()
//   })
// })