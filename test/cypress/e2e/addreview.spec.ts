describe('Juice Shop - Add a review', () => {
    before(() => {
        // Step 1: Navigate to the Juice Shop application
        cy.visit('http://localhost:3000'); 
        cy.get('.close-dialog').click();
        cy.get('.cc-btn').click(); //Gets rid of the popups so that the tasks can be completed

        // Step 2: Sign in to the account
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get('[name="email"]').type('testcasemartinsz@gmail.com');
        cy.get('[name="password"]').type('testcasezudans');
        cy.get('#loginButton').click();

    });

    it('should add a review and validate it', () => {
        // Step 3: Click on the search icon
        cy.get('.mat-search_icon-search').click(); 

        // Step 4: Search for "Raspberry"
        cy.get('.mat-input-element').type('Raspberry{enter}'); 

        // Wait for the search results to load
        cy.wait(2000); 

        // Step 5: Select the "Raspberry Juice (1000ml)" product card
        cy.contains('.mat-card', 'Raspberry Juice (1000ml)').click(); 

        // Step 6: Type in the review - "Tastes like metal"
        cy.get('#mat-input-3').then($textarea => {
            const reviewText = 'Tastes like metal';
            for (let i = 0; i < reviewText.length; i++) {
                cy.wrap($textarea).type(reviewText[i], { force: true, delay: 100 });
            }
        }); 
        cy.wait(2000);

        // Step 7: Click Submit
        cy.get('#submitButton').click(); 

        // Step 8: Click expand reviews button
        cy.get('.mat-expansion-panel-header-title').click();  
        cy.wait(1000); 

        // Step 9: Validate the review - "Tastes like metal"
        cy.contains('.review-text', 'Tastes like metal').should('be.visible'); 
    });
});
