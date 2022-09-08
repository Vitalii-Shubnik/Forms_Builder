import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(100)

export const login = (): void => {
  cy.visit(routes['home'])
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

const drag = (dragSelector: string, dropSelector: string): void => {
  cy.get(dragSelector).should('exist')
    .get(dropSelector).should('exist')

  const draggable: HTMLElement = Cypress.$(dragSelector)[0]
  const droppable: HTMLElement = Cypress.$(dropSelector)[0]

  const coords: DOMRect = droppable.getBoundingClientRect()
  draggable.dispatchEvent(<any>new MouseEvent('mousedown'))
  draggable.dispatchEvent(<any>new MouseEvent('mousemove', { clientX: 10, clientY: 0 }))
  draggable.dispatchEvent(<any>new MouseEvent('mousemove', {
    clientX: coords.left + 10,
    clientY: coords.top + 10
  }))
  draggable.dispatchEvent(new MouseEvent('mouseup'))
  cy.get(dropSelector)
}

export const routes: {[key: string]: string} = {
  'home': 'http://localhost:4200/home',
  'auth': 'http://localhost:4200/authenticate'
}