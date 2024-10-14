import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavourites, removeFromFavourites } from "../redux/FavouritedMoviesSlice";
import { Link } from "react-router-dom";

export default function MovieCard({movieObject}) {

  const { favouritedMoviesArr } = useSelector(state => state.favouritedMovies)
  const [isFavourited, setIsFavourited] = useState(false);
  const dispatch = useDispatch();

  console.log("movieObject: ", movieObject);
  

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  if (!movieObject || !favouritedMoviesArr) {
    <div>
      Loading movie...
    </div>
  }
  
  useEffect(() => {
    // Use .some() when you only care about whether the condition is met by any element in the array, without needing to know which element it is.
    // Use .find() when you need to retrieve the actual element that meets the condition.
    const isFavourite = favouritedMoviesArr.some(favourite => favourite.id == movieObject.id) 
    setIsFavourited(isFavourite);
  }, [favouritedMoviesArr])
 
  return ( 
      <div className="border-[0.5px] border-solid border-white  p-4 w-32 h-96 break-words flex flex-col justify-between">
        {/* // MovieLink class is just for Cypress to easily find a link to a detailed movie page */}
        <Link className="flex flex-col MovieLink box-border  w-32 text-inherit no-underline hover:text-inherit hover:opacity-55" to={`/movie/${movieObject.id}`}>
          <h3 className="whitespace-normal break-words font-semibold sliced-text h-14 w-full">{movieObject.title}</h3>
          <img className="h-40 w-32 object-cover" src={`${movieObject.poster_path ? `${baseImageUrl}${movieObject.poster_path}`: `${movieObject.backdrop_path ? `${baseImageUrl}${movieObject.backdrop_path}`: "/clapperboard-movie-placeholder.png"}`}`} alt="" />
        </Link>
       
        {!isFavourited ? <button onClick={() => {
          dispatch(addToFavourites(movieObject))
        }}>Add</button> : <button onClick={() => {
          dispatch(removeFromFavourites(movieObject.id))
        }}>Remove</button>}
      </div>
  )
}