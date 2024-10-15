import { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../MovieCard";
import SlideMenu from "../SlideMenu";

export default function PopularSection() {

  const { popularMoviesArr } = useSelector(state => state.popularMovies)

  useEffect(() => {

    console.log("popularMoviesArr:", popularMoviesArr);
  }, [popularMoviesArr])

  if (!popularMoviesArr || popularMoviesArr.length < 1) {
    <>
      <div>
        Loading popular movies...
      </div>
    </>
  }
  
  return (
    <>
      <h2 className="text-center md:text-start">Popular Movies</h2>
      <SlideMenu>
        {popularMoviesArr.map((movie, index) => {
          return (
            <MovieCard key={index} movieObject={movie}/>
          )
        })}
      </SlideMenu>
    </>
  )
}