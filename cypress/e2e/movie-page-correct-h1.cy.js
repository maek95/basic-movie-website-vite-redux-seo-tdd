describe('Dynamic Movie Page', () => {
  it('should fetch real movie data and display it on the page', () => {
    // Visit the homepage
    cy.visit('http://localhost:5173/');

    // Wait for the popular movies to load and display
    cy.get('.MovieLink') // the <Link> in MovieCard.jsx have a className called MovieLink
      .first() // Select the first movie link
      .within(() => {
        // Get the movie title text
        cy.get('h3') // Assuming the title is inside an <h3> tag, adjust the selector as needed
          .invoke('text')
          .as('selectedMovieTitle'); // Store the title in an alias for later use
      });

    // Click on the first movie link to navigate to the movie details page
    cy.get('.MovieLink').first().click();

    // Verify that the URL contains the correct movie ID
    cy.url().should('include', '/movie/');

    // Compare the title on the details page with the title from the homepage
    cy.get('@selectedMovieTitle').then((expectedTitle) => {
      cy.get('h1').should('contain', expectedTitle); // Assuming the movie title on the details page is inside an <h1> tag
    });
  });
});
