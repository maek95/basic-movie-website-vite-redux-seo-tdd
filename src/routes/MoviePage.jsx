import { useState } from "react"
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function MoviePage() { 
  const { id } = useParams(); /* TODO: use id to send a GET request to TMDB API for more info */ 
                                /* Technically I could extract the movie object from my PopularMovieArr or FavouritedMovieArr... if that is what ill only use...?   */
  const [count, setCount] = useState(0)
  
    return (
      <>
        <Helmet> {/* TODO:  */}
          <title>movieid</title>
          <meta name="description" content="Secure your copy of The Silencer game by pre-ordering today!" />
          <meta property="og:title" content="Pre-order - The Silencer" />
          <meta property="og:description" content="Secure your copy of The Silencer game by pre-ordering today!" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Pre-order - The Silencer" />
          <meta name="twitter:description" content="Secure your copy of The Silencer game by pre-ordering today!" />
          <link rel="canonical" href="http://localhost:5173/order" />
        </Helmet>          
        <h1>Vite + React</h1>
        <div className=" text-red-500">
          <button onClick={() => setCount((count) => count + 1)}>
            movie id: {id}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
}