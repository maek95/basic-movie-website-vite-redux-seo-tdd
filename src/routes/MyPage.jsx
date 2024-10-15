import { Helmet } from "react-helmet-async";
import BackButton from "../components/BackButton";
import FavouritesSection from "../components/sections/favourites/FavouritesSection";
import NavBar from "../components/sections/navbar/NavBar";
import VisitedMoviesSection from "../components/sections/visitedmovies/VisitedMoviesSection";

export default function MyPage() {


  return (
    <div className="min-h-dvh z-40">
       <Helmet> {/* NOTE: robots.txt has removed mypage from crawling, so meta-tags here are kinda useless? */}
          <title>Movies About page</title>
          <meta property="description" content="My Page of basic-movie-page using TMDB API" />
          <meta property="og:title" content="Movies - My Page" />
          <meta property="og:description" content="My page - show my favourites and more" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
          <meta property="twitter:card" content="summary_large_image"/> {/* The summary_large_image option tells Twitter to show a large preview image. */}
          <meta property="twitter:title" content="Movies - MyPage" />
          <meta property="twitter:description" content="My page - show my favourites" />
          <meta property="twitter:image" content={`${import.meta.env.VITE_HOST}/basic-movie-page-logo.png`} />
        </Helmet>    
      
      <NavBar/>
      <main className="p-4">

        <BackButton/>
        <h1 className="text-center">My Page</h1>
        <VisitedMoviesSection/>
        <FavouritesSection/>
      </main>
    </div>
  )
}