describe('Juice Shop - Search King and read a review', () => {
  it('should search for King, select the King of the Hill Facemask, expand reviews, and validate a specific review', () => {
      // Step 1: Navigate to the Juice Shop application
      cy.visit('http://localhost:3000'); 

      // Step 2: Click on the search icon
      cy.get('.mat-search_icon-search').click(); 

      // Step 3: Search for "King"
      cy.get('.mat-input-element').type('King{enter}'); 

      // Wait for the search results to load
      cy.wait(2000); 

      // Step 4: Select the "OWASP Juice Shop 'King of the Hill' Facemask" product card
      cy.contains('.mat-card', 'OWASP Juice Shop "King of the Hill" Facemask').click(); 

      // Step 5: Click expand reviews button/icon (wait for reviews to appear)
      cy.get('.mat-expansion-panel-header-title').click(); 
      cy.get('.mat-expansion-panel-header-title').click();
      cy.get('.mat-expansion-panel-header-title').click(); // Need to open it twice because it doesnt show the reviews the 1st time
      cy.wait(1000); 

      // Step 6: Validate the review - "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      cy.contains('.review-text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!').should('be.visible'); 
  });
});
