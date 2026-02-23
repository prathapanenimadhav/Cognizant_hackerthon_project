

describe('Dummy Test Suite', () => {

  it('Visits a local page and checks title', () => {
    cy.visit('https://example.cypress.io');   // Cypress demo site
    cy.title().should('include', 'Cypress');  // Verify page title contains "Cypress"
  });

  it('Checks if a button exists and clicks it', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-btn').should('exist').click(); // Find and click demo button
  });

  it('Types into an input field', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com'); // Verify typed value
  });

  it('Performs a simple assertion', () => {
    const number = 5;
    expect(number).to.equal(5); // Basic assertion
  });

});
