import { Helmet } from "react-helmet-async";
import PopularSection from "../components/sections/popular/PopularSection";
import FavouritesSection from "../components/sections/favourites/FavouritesSection";
import SearchMovieField from "../components/sections/searchmovies/SearchMovieField";
import NavBar from "../components/sections/navbar/NavBar";


export default function HomePage() {

/*   useEffect(() => {
    // nameless async function...
    (async () => {

       console.log(await getTMDBPopularMovies());
    } )();
  }, []); */

  return (
    <div className="min-h-dvh z-40">
      <Helmet> {/* is it unnecessary to use Helmet on HomePage, could just place this in the head of index.html ? */}
          <title>Movies Startpage</title>
          <meta property="description" content="Startpage of basic-movie-page using TMDB API" />
          <meta property="og:title" content="Movies - HomePage" />
          <meta property="og:description" content="view movies using TMDB API" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
          <meta property="twitter:title" content="Movies - Home" />
          <meta property="twitter:description" content="view movies using TMDB API" />
          <meta property="twitter:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
        </Helmet>      
      {/* TODO: import NavBar with the search-bar... fetch specific movies from the API */}
      <NavBar/>

      <main className="p-4">

        
      <h1 className="text-center">Movie Website</h1>
      <div className="block min-h-[500px] text-center"> {/* text-center places input-field in center */}
        <SearchMovieField/> 
        
      </div>
      <div className="w-full bg-[#121212]">
       
        <PopularSection/>
      </div>
      <div className="w-full">

        <FavouritesSection/>
      </div>
      </main>

      
    </div>
  )
}