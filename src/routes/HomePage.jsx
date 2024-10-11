import { Helmet } from "react-helmet-async";
import PopularSection from "../components/sections/popular/PopularSection";
import FavouritesSection from "../components/sections/favourites/FavouritesSection";
import SearchMovieField from "../components/sections/searchmovies/SearchMovieField";


export default function HomePage() {

/*   useEffect(() => {
    // nameless async function...
    (async () => {

       console.log(await getTMDBPopularMovies());
    } )();
  }, []); */

  return (
    <>
      <Helmet> {/* is it unnecessary to use Helmet on HomePage, could just place this in the head of index.html ? */}
          <title>Movies Startpage</title>
          <meta name="description" content="Startpage of my basic movie page using TMDB API" />
          <meta property="og:title" content="Movies - HomePage" />
          <meta property="og:description" content="view movies using TMDB API" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
          <meta name="twitter:title" content="Movies - Home" />
          <meta name="twitter:description" content="view movies using TMDB API" />
          <meta name="twitter:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
          <link rel="canonical" href={`${import.meta.env.VITE_HOST}/order`} />
        </Helmet>      
      {/* TODO: import NavBar with the search-bar... fetch specific movies from the API */}
        
      <h1>Movie Website</h1>
      <div className="block min-h-[420px]">
        <SearchMovieField/> 
        
      </div>
      <div className="">
       
        <PopularSection/>
        <FavouritesSection/>
      </div>
      
    </>
  )
}