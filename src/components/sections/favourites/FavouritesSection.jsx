import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../MovieCard";
import { setFavouritesFromLocalStorage } from "../../../redux/FavouritedMoviesSlice";
import SlideMenuAndFlexWrap from "../SlideMenuAndFlexWrap";

export default function FavouritesSection() {
  const { favouritedMoviesArr } = useSelector(
    (state) => state.favouritedMovies
  );
 
  // do this in App.jsx instead, triggered on any page mount or page refresh
 /*  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(setFavouritesFromLocalStorage());
  }, []); */

  if (!favouritedMoviesArr || favouritedMoviesArr.length < 1) {
    <>
      <div>Loading my favourites...</div>
    </>;
  }

  /* useEffect(() => {

    console.log("favouritedMoviesArr:", favouritedMoviesArr);
  }, [favouritedMoviesArr]) */

  return (
    <>
      <h2 className="text-center md:text-start">My Favourites</h2>
      <SlideMenuAndFlexWrap>
        {favouritedMoviesArr.map((movie, index) => {
          return <MovieCard key={index} movieObject={movie} />;
        })}
      </SlideMenuAndFlexWrap>
    </>
  );
}
