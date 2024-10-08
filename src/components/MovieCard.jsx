import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavourites, removeFromFavourites } from "../redux/FavouritedMoviesSlice";

export default function MovieCard({movieObject}) {

  const { favouritedMoviesArr } = useSelector(state => state.favouritedMovies)
  const [isFavourited, setIsFavourited] = useState(false);
  const dispatch = useDispatch();

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
    <div className="border-[0.5px] border-solid border-white p-4 w-32 h-96 break-words flex flex-col justify-between">
      <h3>title: {movieObject.title}</h3>
      <img src={`${movieObject.poster_path && `${baseImageUrl}${movieObject.poster_path}`}`} alt="" />
      {!isFavourited ? <button onClick={() => {
        dispatch(addToFavourites(movieObject))
      }}>Add</button> : <button onClick={() => {
        dispatch(removeFromFavourites(movieObject.id))
      }}>Remove</button>}
    </div>
  )
}