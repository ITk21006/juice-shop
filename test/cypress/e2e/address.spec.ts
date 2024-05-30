describe('Juice Shop - Add a new address', () => {
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

    it('should add a new address and validate it', () => {
        // Step 3: Click on Account
        cy.get('#navbarAccount').click();

        // Step 4: Click on Orders & Payment
        cy.contains('button', 'Orders & Payment').click();

        // Step 5: Click on My saved addresses
        cy.contains('button', 'My saved addresses').click();

        // Step 6: Create page object - SavedAddressesPage
        // This step assumes a page object is being used. Here we just proceed with the next step directly.
        
        // Step 7: Click on Add New Address
        cy.contains('button', 'Add New Address').click();

        // Step 8: Create page object - CreateAddressPage
        // Again, assuming a page object is being used. Proceeding with the actual form filling.

        // Step 9: Fill in the necessary information
        cy.get('[placeholder="Please provide a country."]').type('United Fakedom');
        cy.get('[placeholder="Please provide a name."]').type('Test User');
        cy.get('[placeholder="Please provide a mobile number."]').type('1234567890');
        cy.get('[placeholder="Please provide a ZIP code."]').type('12345');
        cy.get('[placeholder="Please provide an address."]').type('123 Test Street');
        cy.get('[placeholder="Please provide a city."]').type('Test City');
        cy.get('[placeholder="Please provide a state."]').type('Test State');

        // Step 10: Click Submit button
        cy.contains('button', 'Submit').click();

        // Step 11: Validate that the previously added address is visible
        cy.contains('.mat-card', '123 Test Street').should('be.visible');
    });
});
