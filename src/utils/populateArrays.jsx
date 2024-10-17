import { useDispatch } from "react-redux";
import {
  fetchTMDBPopularMovies,
  setPopularMoviesFromLocalStorage,
} from "../redux/PopularMoviesSlice";
import { setFavouritesFromLocalStorage } from "../redux/FavouritedMoviesSlice";
import { setVisitedMoviesFromLocalStorage } from "../redux/VisitedMoviesSlice";

export function usePopulatePopularMoviesArr() {
  const dispatch = useDispatch();

  return () => {
    if (typeof window !== "undefined") {
      const popularMoviesLocalStorage = localStorage.getItem("popularMovies"); // just used to check if popularMovies item exists, if it doesnt we fetch popular movies from the API

      // sometimes localStorage stores 'undefined' as a String...
      if (
        popularMoviesLocalStorage &&
        popularMoviesLocalStorage !== "undefined" &&
        popularMoviesLocalStorage !== "null"
      ) {
        //console.log("popularMovies found in localStorage, dispatching to redux, skipping fetch from TMDB API");
        dispatch(setPopularMoviesFromLocalStorage());
      } else {
        dispatch(fetchTMDBPopularMovies()); // 'await' not needed because it is an asyncThunk function...?
      }
    }
  };
}

export function usePopulateFavouritedMoviesArr() {
  const dispatch = useDispatch();

  return () => {
    if (typeof window !== "undefined") {
      const favouritedMoviesFromLocalStorage =
        localStorage.getItem("favouritedMovies");

      if (
        favouritedMoviesFromLocalStorage &&
        favouritedMoviesFromLocalStorage !== "undefined" &&
        favouritedMoviesFromLocalStorage !== "null"
      ) {
        // console.log("favouritedMovies found in localStorage, dispatching to redux");
        dispatch(setFavouritesFromLocalStorage());
      } else {
        console.log(
          "favouritedMovies in localStorage is empty or doesn't exist"
        );
      }
    }
  };
}

export function usePopulateVisitedMoviesArr() {
  const dispatch = useDispatch();

  return () => {
    if (typeof window !== "undefined") {
      const visitedMoviesFromLocalStorage =
        localStorage.getItem("visitedMovies");

      if (
        visitedMoviesFromLocalStorage &&
        visitedMoviesFromLocalStorage !== "undefined" &&
        visitedMoviesFromLocalStorage !== "null"
      ) {
        // console.log("visitedMovies found in localStorage, dispatching to redux");
        dispatch(setVisitedMoviesFromLocalStorage());
      } else {
        console.log("visitedMovies in localStorage is empty or doesn't exist");
      }
    }
  };
}
