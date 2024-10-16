# Basic Movie Website - Vite + React

A movie browsing app built with **VITE** and **React** that utilizes the **TMDB API** to fetch and display movie data. Users can search for movies, view popular movies, favorite their selections, and track individual movie page visits.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Routing](#routing)
- [Global State Management](#global-state-management)
- [Testing](#testing)
- [Styling and Responsiveness](#styling-and-responsiveness)
- [Technical SEO](#technical-seo)
- [Analytics and Tag Manager](#analytics-and-tag-manager)

## Installation

To install and run the project locally:

1. **Clone the repo**:
   ```
   git clone https://github.com/maek95/basic-movie-website-vite-redux-seo-tdd.git
   cd basic-movie-website-vite-redux-seo-tdd
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open the app in your browser**:
   Navigate to `http://localhost:5173` to see the app in action.

## Features

- **Movie Search**: Search for movies using the TMDB API.
- **Popular Movies**: Display a list of the 20 most popular movies fetched from TMDB.
- **Individual Movie Pages**: View detailed information about each movie on its own page.
- **Favourites**: Users can favourite movies, which are displayed on the homepage and user's personal page.
- **Tracking**: Users can track which movie pages they've visited, displayed on the user's personal page.

## Technologies Used

- **VITE + React**: For the front-end framework.
- **Redux Toolkit**: For global state management.
- **React-Router-Dom**: For client-side routing.
- **Cypress**: For end-to-end testing.
- **Tailwind CSS**: For styling and responsiveness.
- **Google Tag Manager** and **Google Analytics**: For tracking and analytics.

## Routing

The app uses `react-router-dom` for routing. All routes are declared in `App.jsx`.

- **Home Page ('/')**: Displays the search field, popular movies, and user's favourited movies.
- **About Page ('/about')**: Contains additional information about the website. It also displays movie posters of the top 10 popular movies.
- **Movie Page ('/movie/:id')**: Dynamic route displaying details about an individual movie.

## Global State Management and localStorage

Global state is managed using **Redux Toolkit** with three main slices:

- **PopularMoviesSlice**: Fetches popular movies using `asyncThunk` and stores them in localStorage to minimize API calls.
- **FavouritedMoviesSlice**: Manages favourite movies. These are displayed on the home page and the user's personal page.
- **VisitedMoviesSlice**: Tracks which movie pages a user has visited.

`localStorage` is used to persist data in all these slices during page reloads.
   In `App.jsx` there is an `useEffect` that searches localStorage for `popularMovies`, `favouritedMovies`, `visitedMovies`, if they are found they are dispatched to their respective Redux Slice.

## Testing

 ```
   npx cypress open
   ```
End-to-end testing is handled using **Cypress**. There are two main tests:

1. **Movie Page Navigation and Title Verification**:
   - Simulates clicking on the first movie card on the homepage and navigates to its individual page. The test then verifies that the movie title displayed on the homepage matches the title       shown on the movie's detail page.
   
2. **Back Button Check**:
   - Verifies the presence of a "Back" button on the individual movie page. It also simulates clicking on the first movie card, like in the first test, to navigate to its individual page.         The reason why both tests include this navigation is because I do not want to hardcode a movie id from the TMDB API to access the dynamic movie page.

## Styling and Responsiveness

The project uses **Tailwind CSS** for styling. The app is responsive and optimized for mobile, tablet, and desktop views. For instance, favourited movies are shown in a slide-menu on mobile and in a flexbox on desktop.

## Technical SEO

The project includes dynamic generation of `robots.txt` and `sitemap.xml` to optimize SEO.
`generate-robots.js` and `generate-sitemap.js` run automatically with `npm run build`.

- **robots.txt**: Specifies that search engines should avoid crawling `/mypage` and limit crawling of dynamic movie pages to only the popular movies defined in sitemap.xml.
- **sitemap.xml**: Includes the home page, about page, and a few dynamic movie pages to guide search engines.

## Analytics and Tag Manager

Google Analytics is integrated with default page view tracking, and custom events have been added via **Google Tag Manager**. A custom event is triggered when a movie is added to favorites, sending the movie ID to Google Analytics.
