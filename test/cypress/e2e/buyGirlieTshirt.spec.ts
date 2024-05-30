describe('Juice Shop - Buy Girlie T-shirt', () => {
    before(() => {
        // Step 1: Navigate to the Juice Shop application
        cy.visit('http://localhost:3000'); // Update with the correct URL of your Juice Shop app if different
        cy.get('.close-dialog').click();
        cy.get('.cc-btn').click(); // Gets rid of the popups so that the tasks can be completed

        // Step 2: Sign in to the account
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get('[name="email"]').type('testcasemartinsz@gmail.com');
        cy.get('[name="password"]').type('testcasezudans');
        cy.get('#loginButton').click();
    });

    it('should buy a Girlie T-shirt and validate the purchase', () => {
        // Step 3: Click on the search icon
        cy.get('.mat-search_icon-search').click(); // Adjust the selector based on your app's actual DOM structure

        // Step 4: Search for "Girlie"
        cy.get('.mat-input-element').type('Girlie{enter}'); // Adjust the selector based on your app's actual DOM structure

        // Wait for the search results to load
        cy.wait(2000); // Adjust the time as necessary to ensure the results are loaded

        // Step 5: Add to basket "Girlie"
        cy.contains('.mat-card', 'Girlie').within(() => {
            cy.get('button[aria-label="Add to Basket"]').click(); // Adjust the selector based on your app's actual DOM structure
        });

        // Step 6: Click on "Your Basket" button
        cy.get('button[aria-label="Show the shopping cart"]').click(); // Adjust the selector based on your app's actual DOM structure

        // Step 7: Create page object - BasketPage
        cy.get('#checkoutButton').click(); // Click the "Checkout" button

        // Step 8: Create page object - SelectAddressPage
        cy.contains('Select an address').should('be.visible');
        cy.get('.mat-row > .cdk-column-Selection').click(); // Select address containing "United Fakedom"
        cy.get('.btn-next').click(); // Click Continue button

        // Step 9: Create page object - DeliveryMethodPage
        cy.contains('Choose a delivery speed').should('be.visible');
        cy.get(':nth-child(4) > .cdk-column-Selection').click(); // Select delivery speed Standard Delivery
        cy.get('.nextButton').click(); // Click Continue button

        // Step 10: Create page object - PaymentOptionsPage
        cy.contains('Choose a payment option').should('be.visible');
        cy.get('.mat-row > .cdk-column-Selection').click(); // Select card ending with "5678"
        cy.get('.nextButton').click(); // Click Continue button

        // Step 11: Create page object - OrderSummaryPage
        cy.contains('Order Summary').should('be.visible');
        cy.get('#checkoutButton').click(); // Click on "Place your order and pay"

        // Step 12: Create page object - OrderCompletionPage
        cy.contains('Thank you for your purchase!').should('be.visible'); // Validate confirmation
    });
});
