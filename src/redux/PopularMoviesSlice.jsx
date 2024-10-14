import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTMDBPopularMovies } from "../api/apiPopularMovies";

// I made this slice for popular movies so I can fetch it once when the website mounts or if ANY page is refreshed.
// Good to have if I want to display Popular Movies on multiple pages...

export const fetchTMDBPopularMovies = createAsyncThunk( // read more about createAsyncThunk at the bottom of this file
  'popularMovies/fetchTMDBPopularMovies',
  getTMDBPopularMovies // await not needed in asyncThunk 
)

export const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    popularMoviesArr: [],
    status: 'idle', // used in asyncThunk
    error: null, // used in asyncThunk
  },
  reducers: {
    // reduce interactions with the API if possible! How do I add a timer on refreshing data?
    // timer is against Redux best practice since it is dynamic, redux-thunk here?
    setPopularMoviesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const popularMoviesLocalStorage = localStorage.getItem("popularMovies");
       
        state.popularMoviesArr = popularMoviesLocalStorage ? JSON.parse(popularMoviesLocalStorage) : [];

        console.log("populated popularMoviesArr with localStorage data");
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTMDBPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTMDBPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMoviesArr = action.payload; // action.payload is 'getTMDBPopularMovies' returned data
        // immutable due to Immer, don't need to copy array first (...) 
        if (typeof window !== "undefined") {
          localStorage.setItem("popularMovies", JSON.stringify(action.payload))
        }
      })
      .addCase(fetchTMDBPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
})

export const {setPopularMoviesFromLocalStorage } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer; // sent to store.jsx

/*  more about createAsyncThunk and extraReducers:
Automated Action Types: When you use createAsyncThunk, Redux Toolkit automatically generates three action types for each thunk:

pending: Dispatched when the async call starts.
fulfilled: Dispatched when the async call is successful.
rejected: Dispatched if the async call fails.
These actions are handled in extraReducers, which makes it easier to manage the loading, success, and error states in your reducers. */