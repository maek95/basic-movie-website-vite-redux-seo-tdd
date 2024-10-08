import { useEffect, useState } from "react"
import {  getTMDBPopularMovies } from "../api/apiPopularMovies";
import { useSelector } from "react-redux";
import PopularSlideMenu from "../components/slidemenus/PopularSlideMenu";
import FavouritesSlideMenu from "../components/slidemenus/FavouritesSlideMenu";


export default function HomePage() {


  const { popularMoviesArr } = useSelector(state => state.popularMovies);
  const { favouritedMoviesArr } = useSelector(state => state.favouritedMovies);


/*   useEffect(() => {
    // nameless async function...
    (async () => {

       console.log(await getTMDBPopularMovies());
    } )();
  }, []); */

  useEffect(() => {
    console.log("favouritedMoviesArr:", favouritedMoviesArr);
    
  }, [favouritedMoviesArr])
  

  return (
    <>
   
        
      <h1>Vite + React movie website</h1>
      <div className="">
       
        <PopularSlideMenu/>
        <FavouritesSlideMenu/>
      </div>
      
    </>
  )
}