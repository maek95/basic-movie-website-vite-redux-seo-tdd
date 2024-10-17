import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../MovieCard";
import SlideMenu from "../SlideMenu";
import { setPopularMoviesFromLocalStorage } from "../../../redux/PopularMoviesSlice";

export default function PopularSection() {
  const { popularMoviesArr } = useSelector((state) => state.popularMovies);

  /* useEffect(() => {

    console.log("popularMoviesArr:", popularMoviesArr);
  }, [popularMoviesArr]) */

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(setPopularMoviesFromLocalStorage());
  }, []);


  if (!popularMoviesArr || popularMoviesArr.length < 1) {
    <>
      <div>Loading popular movies...</div>
    </>;
  }

  return (
    <>
      <h2 className="text-center md:text-start">Popular Movies</h2>
      <SlideMenu>
        {popularMoviesArr.map((movie, index) => {
          return <MovieCard key={index} movieObject={movie} />;
        })}
      </SlideMenu>
    </>
  );
}
