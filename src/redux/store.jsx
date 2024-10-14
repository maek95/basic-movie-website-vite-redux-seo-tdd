
import { configureStore } from "@reduxjs/toolkit"
import popularMoviesReducer from "./PopularMoviesSlice" // from export default productsSlice.reducer;
import favouritedMoviesReducer from "./FavouritedMoviesSlice" // from export default favouritedMoviesSlice.reducer;
import visitedMoviesReducer from "./VisitedMoviesSlice" // from export default favouritedMoviesSlice.reducer;

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    favouritedMovies: favouritedMoviesReducer,
    visitedMovies: visitedMoviesReducer,
  }
})