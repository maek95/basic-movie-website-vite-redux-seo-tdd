import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import NavBar from "../components/sections/navbar/NavBar";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {

  const { popularMoviesArr } = useSelector(state => state.popularMovies)

  const [popularImgSrcArr, setPopularImgSrcArr] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    
    if (popularMoviesArr && popularMoviesArr.length > 0) {

      console.log(popularMoviesArr);

      // if-statement so we stop populating popularImgSrcArr once it has copied all the imgSrc in popularMoviesArr.
      // Otherwise we might get duplicates during re-render
      if (popularImgSrcArr.length < popularMoviesArr.length && popularImgSrcArr.length < 10) { 

        popularMoviesArr.map((movie, index) => {
          if (index < 10) {
            setPopularImgSrcArr(prevArr => [...prevArr, baseImageUrl + movie.poster_path])
          }
        })
      }
    }
  }, [popularMoviesArr])
  
  useEffect(() => {
    console.log("popularImgSrcArr:", popularImgSrcArr);

  }, [popularImgSrcArr])

  return (
    <div className="min-h-dvh">
      <Helmet> {/* is it unnecessary to use Helmet on HomePage, could just place this in the head of index.html ? */}
          <title>Movies About page</title>
          <meta name="description" content="About basic-movie-page - a movie page using TMDB API" />
          <meta property="og:title" content="Movies - AboutPage" />
          <meta property="og:description" content="Read about us - movie page using TMDB API" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
          <meta name="twitter:card" content="summary_large_image"/> {/* The summary_large_image option tells Twitter to show a large preview image. */}
          <meta name="twitter:title" content="Movies - About" />
          <meta name="twitter:description" content="About us - movie page using TMDB API" />
          <meta name="twitter:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
        </Helmet>    
      <NavBar/>
      <main className="p-4">


        <BackButton/>
        <h1 className="text-center">About Us</h1>
      <h2 className="text-center">Amazing website by maek95</h2>


      <div className="flex w-full flex-wrap justify-center ">
        {popularImgSrcArr && popularImgSrcArr.length > 0 && popularImgSrcArr.map((movieImgSrc, index) => {
          /* object-cover so we this section can be h-96 and be covered with pictures - without runing aspect ratio! */
            return <img key={index} className="w-32 h-auto object-cover" src={movieImgSrc} alt="movie img" />
        })} 
      </div>

      <div className="flex justify-center px-8 gap-4 mt-12">
        <img src="/tmdb_logo.svg" className="h-12"/>
        <p className="text-base sm:text-lg lg:text-xl">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
      </main>


    </div>
  )
}