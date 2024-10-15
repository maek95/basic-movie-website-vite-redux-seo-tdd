To write your README, here's an outline based on the information provided:

---

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
- **Favorites**: Users can favorite movies, which are displayed on the homepage.
- **Tracking**: Users can track which movie pages they've visited.

## Technologies Used

- **VITE + React**: For the front-end framework.
- **Redux Toolkit**: For global state management.
- **React-Router-Dom**: For client-side routing.
- **Cypress**: For end-to-end testing.
- **Tailwind CSS**: For styling and responsiveness.
- **Google Tag Manager** and **Google Analytics**: For tracking and analytics.

## Routing

The app uses `react-router-dom` for routing. All routes are declared in `App.jsx`.

- **Home Page ('/')**: Displays the search field, popular movies, and favorited movies.
- **About Page ('/about')**: Contains additional information about the page and popular movies from the Redux store.
- **Movie Page ('/movie/:id')**: Dynamic route displaying details about an individual movie.

## Global State Management

Global state is managed using **Redux Toolkit** with three main slices:

- **PopularMoviesSlice**: Fetches popular movies using `asyncThunk` and stores them in local storage to minimize API calls.
- **FavouritedMoviesSlice**: Manages favorite movies. These are displayed on the home page and the user's personal page.
- **VisitedMoviesSlice**: Tracks which movie pages a user has visited.

Local storage is used to persist data during page reloads.

## Testing

End-to-end testing is handled using **Cypress**. There are two main tests:

1. **Movie Page Navigation**:
   - Clicks on the first movie card on the homepage and verifies that the movie title matches on the individual movie page.
   
2. **Back Button Check**:
   - Verifies the presence of a "Back" button on the individual movie page.

## Styling and Responsiveness

The project uses **Tailwind CSS** for styling. The app is responsive and optimized for mobile, tablet, and desktop views. For instance, favorite movies are shown in a slide-out menu on mobile and in a flexbox on desktop.

## Technical SEO

The project includes dynamic generation of `robots.txt` and `sitemap.xml` to optimize SEO:

- **robots.txt**: Specifies that search engines should avoid crawling `/mypage` and limit crawling of dynamic movie pages.
- **sitemap.xml**: Includes the home page, about page, and a few dynamic movie pages to guide search engines.

## Analytics and Tag Manager

Google Analytics is integrated with default page view tracking, and custom events have been added via **Google Tag Manager**. A custom event is triggered when a movie is added to favorites, sending the movie ID to Google Analytics.

---

This format should give a clear and comprehensive overview of your project, covering installation, features, and the technologies you've used. Let me know if you'd like to refine any sections!
