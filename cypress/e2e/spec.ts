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