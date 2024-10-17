import { useDispatch, useSelector } from "react-redux";
import SlideMenu from "../SlideMenu";
import MovieCard from "../../MovieCard";
import { useEffect } from "react";
import { setVisitedMoviesFromLocalStorage } from "../../../redux/VisitedMoviesSlice";

export default function VisitedMoviesSection() {
  const { visitedMoviesArr } = useSelector((state) => state.visitedMovies);

  /* useEffect(() => {
    console.log("visitedMoviesArr:", visitedMoviesArr);
    
  }, [visitedMoviesArr]) */

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(setVisitedMoviesFromLocalStorage());
  }, []);


  return (
    <>
      <h2 className="text-center md:text-start">Visited Movies</h2>
      {visitedMoviesArr && visitedMoviesArr.length > 0 ? (
        <SlideMenu>
          {visitedMoviesArr.map((movie, index) => {
            return <MovieCard key={index} movieObject={movie} />;
          })}
        </SlideMenu>
      ) : (
        <div className="min-h-32">You have not visited any movies yet!</div>
      )}
    </>
  );
}
