describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="increment"]').click()
    cy.get('[data-testid="increment"]').click()
    cy.get('[data-testid="increment"]').click()
    cy.get('[data-testid="increment"]').click()
    cy.get('[data-testid="increment"]').click()

    cy.get('[data-testid="count"]').should('contain.text',5)
  })
})