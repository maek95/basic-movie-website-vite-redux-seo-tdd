describe('Dynamic Movie Page', () => {
  it('should fetch real movie data and display it on the page', () => {
    // Visit the homepage
    cy.visit('http://localhost:5173/');

    // Wait for the popular movies to load and display
    cy.get('.MovieLink') // Use the appropriate selector to target your movie links
      .first() // Select the first movie link
      .invoke('attr', 'href') // Get the 'href' attribute of the first link
      .then((href) => {
        // Verify that the href contains the movie ID
        expect(href).to.match(/\/movie\/\d+/); // Check if the href follows the pattern '/movie/{id}'

        // Click on the first movie link to navigate to the movie page
        cy.visit(`http://localhost:5173${href}`); // Use the href value to visit the movie page directly

        // Verify that the URL contains the correct movie ID
        cy.url().should('include', href);

        // check if there is a button containing the text 'Back' (see <BackButton> component)
        cy.get('button').should('contain', 'Back'); 
      });
  });
});

