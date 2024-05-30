describe('Juice Shop - Validate product card amount', () => {
  it('should validate the number of product cards displayed per page', () => {
      // Step 1: Navigate to the Juice Shop application
      cy.visit('http://localhost:3000'); 

      // Step 2: Validate that the default amount of cards is 12
      cy.get('.mat-card').should('have.length', 12); 

      // Step 3: Change items per page to 24
      cy.get('#mat-select-value-1').click(); // Open the items per page dropdown
      cy.get('#mat-option-1 > .mat-option-text').click(); // Select 24 items per page

      // Step 4: Validate that the amount of cards is 24
      cy.get('.mat-card').should('have.length', 24); 

      // Step 5: Change items per page to 36
      cy.get('#mat-select-value-1').click(); // Open the items per page dropdown
      cy.get('#mat-option-2 > .mat-option-text').click(); // Select 36 items per page

      // Step 6: Validate that the amount of cards is 35
      cy.get('.mat-card').should('have.length', 35); 
  });
});