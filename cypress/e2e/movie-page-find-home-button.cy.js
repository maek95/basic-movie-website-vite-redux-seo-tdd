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

        // Optionally, you can check if the movie details page is displaying the correct data
        // cy.get('h1').should('contain', 'Movie Title'); // Replace 'Movie Title' with the expected title
        cy.get('button').should('contain', 'Home'); // Replace 'Movie Title' with the expected title
      });
  });
});

