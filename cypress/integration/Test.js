describe('My First Test', () => {
  it('Visits the example page and checks the title', () => {
    // Step 1: Visit a page
    cy.visit('https://example.cypress.io')

    // Step 2: Check if the page contains expected text
    cy.contains('Kitchen Sink')

    // Step 3: Verify the URL includes "cypress"
    cy.url().should('include', 'cypress')
  })
})
