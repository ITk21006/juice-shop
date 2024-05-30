describe('Juice Shop - Search 500ml and validate cards', () => {
  it('should search for 500ml and validate Eggfruit, Lemon, and Strawberry Juice cards', () => {
      // Step 1: Navigate to the Juice Shop application
      cy.visit('http://localhost:3000'); 

      // Step 2: Click on the search icon
      cy.get('.mat-search_icon-search').click(); 

      // Step 3: Search for "500ml"
      cy.get('.mat-input-element').type('500ml{enter}'); 

      // Wait for the search results to load
      cy.wait(2000); 

      // Step 4: Select the "Eggfruit Juice (500ml)" product card
      cy.contains('.mat-card', 'Eggfruit Juice (500ml)').click(); 

      // Step 5: Validate the card contains the text "Now with even more exotic flavour."
      cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
        .should('contain', 'Now with even more exotic flavour.');

      // Step 6: Close the card (assume there's a close button within the card)
      cy.get('.close-dialog').click(); 

      // Step 7: Select the "Lemon Juice (500ml)" product card
      cy.contains('.mat-card', 'Lemon Juice (500ml)').click(); 

      // Step 8: Validate the card contains the text "Sour but full of vitamins."
      cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
        .should('contain', 'Sour but full of vitamins.');

      // Step 9: Close the card (assume there's a close button within the card)
      cy.get('.close-dialog').click(); 

      // Step 10: Select the "Strawberry Juice (500ml)" product card
      cy.contains('.mat-card', 'Strawberry Juice (500ml)').click(); 

      // Step 11: Validate the card contains the text "Sweet & tasty!"
      cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
        .should('contain', 'Sweet & tasty!');

      // Step 12: Close the card (assume there's a close button within the card)
      cy.get('.close-dialog').click(); 
  });
});
