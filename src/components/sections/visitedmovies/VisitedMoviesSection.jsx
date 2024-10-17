import { useSelector } from "react-redux";
import SlideMenu from "../SlideMenu";
import MovieCard from "../../MovieCard";
import { useEffect } from "react";

export default function VisitedMoviesSection() {
  const { visitedMoviesArr } = useSelector((state) => state.visitedMovies);

  /* useEffect(() => {
    console.log("visitedMoviesArr:", visitedMoviesArr);
    
  }, [visitedMoviesArr]) */

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
