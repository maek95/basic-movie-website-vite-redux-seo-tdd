import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../MovieCard";
import { setFavouritesFromLocalStorage } from "../../../redux/FavouritedMoviesSlice";
import SectionLayout from "../SectionLayout";

export default function FavouritesSection() {

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
      <h2 className="text-center md:text-start">My Favourites</h2>
      <SectionLayout>
        {favouritedMoviesArr.map((movie, index) => {
          return (
            <MovieCard key={index} movieObject={movie}/>
          )
        })}
      </SectionLayout>
    </>
  )
}