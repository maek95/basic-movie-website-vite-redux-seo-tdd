// ignore user id, wont have account creation
//// CRUD in reducers
// create, read, update, delete

import { createSlice } from "@reduxjs/toolkit";

export const visitedMoviesSlice = createSlice({
  name: "visitedMovies",
  initialState: {
    visitedMoviesArr: [],
  },
  reducers: {
    setVisitedMoviesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const visitedMoviesLocalStorage = localStorage.getItem("visitedMovies");

        state.visitedMoviesArr = visitedMoviesLocalStorage
          ? JSON.parse(visitedMoviesLocalStorage)
          : []; // JSON parse because data is stored as a JSON string in localStorage. Fallback array [] if it no data found.

        console.log(
          "populated visitedMoviesArr with localStorage data: ",
          state.visitedMoviesArr
        );
      }
    },
    addToVisitedMovies: (state, action) => {
      const movieObject = action.payload;
      const visitedMovies = state.visitedMoviesArr;
      const isAlreadyVisited = visitedMovies.some(
        (movie) => movie.id === movieObject.id
      );

      if (!isAlreadyVisited) {
        console.log("new movie visited, adding to visitedMoviesArr");

        const updatedVisitedMovies = [
          ...state.visitedMoviesArr,
          action.payload,
        ]; // even though we have Immer this seems required to post correct updated favourites to localStorage.
        state.visitedMoviesArr = updatedVisitedMovies;
        // localStorage not accessible during build
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "visitedMovies",
            JSON.stringify(updatedVisitedMovies)
          ); // can't store arrays directly, need JSON string.
        }
      } else {
        console.log(
          "Already visited movie " +
            action.payload.title +
            " won't add to visitedMoviesArr"
        );
      }
      // gtmEventAddedToFavourites(action.payload);
    },
    removeFromVisitedMovies: (state, action) => {
      const visitedMovies = state.visitedMoviesArr.filter((movie) => {
        return movie.id != action.payload; // action.paylod is the 'id' from a movie object
      });

      state.visitedMoviesArr = visitedMovies;

      // localStorage not accessible during build
      if (typeof window !== "undefined") {
        localStorage.setItem("visitedMovies", JSON.stringify(visitedMovies)); // can't store arrays directly, need JSON string.
      }
    },
  },
});

export const {
  setVisitedMoviesFromLocalStorage,
  addToVisitedMovies,
  removeFromVisitedMovies,
} = visitedMoviesSlice.actions;

export default visitedMoviesSlice.reducer; // sent to store.jsx
