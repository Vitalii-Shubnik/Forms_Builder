xdescribe('Drag Test', () => {
  beforeEach(() => {
    cy.viewport(1200, 780)
  })
  
  const dataTransfer = new DataTransfer()
  xit('should drag', () => {
    cy.get('#cdk-drop-list-3>form>div:nth-child(1)').trigger('dragstart', { dataTransfer })
    cy.get('#cdk-drop-list-0').trigger('drop', { dataTransfer })
    cy.get('#cdk-drop-list-3>form>div:nth-child(1)').trigger('dragend')
    cy.get('#cdk-drop-list-0>form>div:first').should('be.visible')
  })
})