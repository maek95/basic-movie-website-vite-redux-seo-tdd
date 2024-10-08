import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlideMenu from "./SlideMenu";
import MovieCard from "../MovieCard";
import { setFavouritesFromLocalStorage } from "../../redux/FavouritedMoviesSlice";

export default function FavouritesSlideMenu() {

  const { favouritedMoviesArr } = useSelector(state => state.favouritedMovies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavouritesFromLocalStorage());
  }, [])

  if (!favouritedMoviesArr || favouritedMoviesArr.length < 1) {
    <>
      <div>
        Loading my favourites...
      </div>
    </>
  }

  useEffect(() => {

    console.log("favouritedMoviesArr:", favouritedMoviesArr);
  }, [favouritedMoviesArr])
  
  return (
    <>
      <h2>My Favourites</h2>
      <SlideMenu>
        {favouritedMoviesArr.map((movie) => {
          return (
            <MovieCard movieObject={movie}/>
          )
        })}
      </SlideMenu>
    </>
  )
}