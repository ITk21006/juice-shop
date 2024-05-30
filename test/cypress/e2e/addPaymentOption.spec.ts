describe('Juice Shop - Add a new payment option', () => {
  before(() => {
      // Step 1: Navigate to the Juice Shop application
      cy.visit('http://localhost:3000'); // Update with the correct URL of your Juice Shop app if different
      cy.get('.close-dialog').click();
      cy.get('.cc-btn').click(); //Gets rid of the popups so that the tasks can be completed

      // Step 2: Sign in to the account
      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      cy.get('[name="email"]').type('testcasemartinsz@gmail.com');
      cy.get('[name="password"]').type('testcasezudans');
      cy.get('#loginButton').click();
  });

  it('should add a new payment option and validate it', () => {
      // Step 3: Click on Account
      cy.get('#navbarAccount').click();

      // Step 4: Click on Orders & Payment
      cy.contains('button', 'Orders & Payment').click();

      // Step 5: Click on My payment options
      cy.contains('button', 'My Payment Options').click();

      // Step 6: Create page object - SavedPaymentMethodsPage
      // This step assumes a page object is being used. Here we just proceed with the next step directly.
      
      // Step 7: Click Add new card
      cy.get('#mat-expansion-panel-header-0').click();

      // Step 8: Fill in the necessary information
      cy.get('#mat-input-3').type('Test User');
      cy.get('#mat-input-4').type('4111111111111111'); // Using a common test card number
      cy.get('#mat-input-5').select('7'); // Select expiry month
      cy.get('#mat-input-6').select('2090'); // Select expiry year

      // Step 9: Click Submit button
      cy.contains('button', 'Submit').click();

      // Step 10: Validate that the card shows up in the list
      cy.contains('.mat-card', '************1111').should('be.visible'); // Last 4 digits of the test card number
  });
});
