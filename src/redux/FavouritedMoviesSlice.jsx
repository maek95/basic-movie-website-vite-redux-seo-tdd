// ignore user id, wont have account creation
//// CRUD in reducers
// create, read, update, delete

import { createSlice } from "@reduxjs/toolkit";

export const favouritedMoviesSlice = createSlice({

  name: 'favouritedMovies',
  initialState: {
    favouritedMoviesArr: [],
  },
  reducers: {
    setFavouritesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") { 
        const favouritedMoviesLocalStorage = localStorage.getItem("favouritedMovies"); 

        state.favouritedMoviesArr = favouritedMoviesLocalStorage ? JSON.parse(favouritedMoviesLocalStorage) : []; // JSON parse because data is stored as a JSON string in localStorage. Fallback array [] if it no data found.
        console.log("populated favouritedMoviesArr with localStorage data", state.favouritedMoviesArr);
      }
    },
    addToFavourites: (state, action) => {
      const updatedFavourites = [...state.favouritedMoviesArr, action.payload] // even though we have Immer this seems required to post correct updated favourites to localStorage.

      state.favouritedMoviesArr = updatedFavourites;
      
      // localStorage not accessible during build
      if (typeof window !== "undefined") { 
        localStorage.setItem("favouritedMovies", JSON.stringify(updatedFavourites)); // can't store arrays directly, need JSON string.
      }
      gtmEventAddedToFavourites(action.payload);
    },
    removeFromFavourites: (state, action) => {
      const updatedFavourites = state.favouritedMoviesArr.filter((movie) => {
        return movie.id != action.payload; // action.paylod is the 'id' from a movie object
      })

      state.favouritedMoviesArr = updatedFavourites;
      
      // localStorage not accessible during build
      if (typeof window !== "undefined") { 
        localStorage.setItem("favouritedMovies", JSON.stringify(updatedFavourites)); // can't store arrays directly, need JSON string.
      }
    }
  }
})

export const { setFavouritesFromLocalStorage, addToFavourites, removeFromFavourites } = favouritedMoviesSlice.actions;

export default favouritedMoviesSlice.reducer; // sent to store.jsx

function gtmEventAddedToFavourites(movie) {
  if (typeof window !== "undefined" && typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: 'add_to_favourites',
      event_category: 'User Interaction',
      event_label: 'Add to Favourites',
      movie_id: movie.id,
      movie_title: movie.title,
      value: 1
    });
  }
};