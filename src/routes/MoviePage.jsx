import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/apiMovieDetails";
import MovieCard from "../components/MovieCard";
import BackButton from "../components/BackButton";
import NavBar from "../components/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addToVisitedMovies } from "../redux/VisitedMoviesSlice";

export default function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const dispatch = useDispatch();
/*   const visitedMoviesArr = useSelector(
    (state) => state.visitedMovies.visitedMoviesArr
  ); */

  useEffect(() => {
    async function fetchDetails() {
      const movieObject = await getMovieDetails(id);
      if (movieObject) {
        setMovieDetails(movieObject);

        dispatch(addToVisitedMovies(movieObject)); // addToVisitedMovies also checks for duplicates
      }
    }
    fetchDetails();
  }, []);

  useEffect(() => {
    console.log("movieDetails:", movieDetails);
  }, [movieDetails]);

  // JSON-LD for better google search (rich snippets in search engine result). Nextjs' Metadata API does not include JSON-LD
  // "This structured data improves the chances of your site appearing in rich results (e.g., star ratings, images, and reviews) in search engine results, making your page more attractive to users."
  useEffect(() => {
    if (movieDetails) {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Movie",
        name: movieDetails.title,
        image: movieDetails.poster, // Poster image URL
        description: movieDetails.overview,
        datePublished: movieDetails.release_date,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: movieDetails.voteAverage,
          bestRating: "10",
          ratingCount: movieDetails.voteCount,
        },
        /* "director": { // different fetch
          "@type": "Person",
          "name": credits.director, // Director name
        },
        "actor": credits.actors.map((actor) => ({
          "@type": "Person",
          "name": actor.name,
        })), */
        genre: movieDetails.genres?.join(", ") || "", // no genres exist in movieDetails objects at the moment.
        duration: `PT${movieDetails.runtime}M`, // ISO 8601 duration format
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      // Clean up the script when the component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [movieDetails]); // credits should also be a trigger if used later!

  if (!movieDetails) {
    return (
      <div className="h-lvh w-full justify-center items-center">
        <h1>Loading Movie Details...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-dvh z-40">
      <Helmet> {/* these meta-tags won't actually work because VITE is client-side. So when linking this page in e.g. Slack it will not show these meta-tags, but if you inspect element the page they will be shown... Nextjs solves this automatically because they are Server-side */}
        {" "}
        <title>{movieDetails.title}</title>
        <meta name="description" content={`${movieDetails.overview}`} />
        <meta property="og:title" content={`${movieDetails.title}`} />{" "}
        {/* not different from <title>, still needed? */}
        <meta
          property="og:description"
          content={`Read about ${movieDetails.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${movieDetails.poster}`} />
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* The summary_large_image option tells Twitter to show a large preview image. */}
        <meta
          name="twitter:description"
          content={`Read about ${movieDetails.title}`}
        />
        <meta name="twitter:image" content={`${movieDetails.poster}`} />{" "}
        {/* hopefully not too large image? */}
      </Helmet>
      <NavBar />

      <main className="p-4">
        <BackButton />

        <h1 className="text-center md:text-start">{movieDetails.title}</h1>
        <div className="flex gap-4 md:gap-12 flex-col md:flex-row">
          <div className="flex justify-center">
            <MovieCard movieObject={movieDetails} />
          </div>
          <div className="w-full md:w-96 ">
            <h3>Release Date</h3>
            <p>{movieDetails.release_date}</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <span>rating: {movieDetails.vote_average}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

/* 
Recommended Image Size for Open Graph and Twitter
Open Graph (og:image):

Recommended Size: At least 1200 x 630 pixels.
Aspect Ratio: 1.91:1.
This size ensures that the image looks good on larger devices and is still clear when displayed as a thumbnail.
Twitter Image (twitter:image):

Recommended Size: At least 800 x 418 pixels.
Aspect Ratio: 1.91:1.
Twitter will display the image as a summary card, so following this size will make it look the best. */
