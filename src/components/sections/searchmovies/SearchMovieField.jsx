import { useEffect, useState } from "react"
import { querySearchMovie } from "../../../api/apiMovieQuery";
import MovieCard from "../../MovieCard";
import SlideMenu from "../SlideMenu";

export default function SearchMovieField() {

  const [queryInput, setQueryInput] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  function handleChange(e) {
    setQueryInput(e.target.value)
  }

  useEffect(() => {
   
    async function queryAndSaveResults() {

      console.log("queryInput:", queryInput);
      
      const results = await querySearchMovie(queryInput);
      setMovieResults(results);
    }
    queryAndSaveResults();

  }, [queryInput])

 /*  useEffect(() => {
    console.log("movieResults: ", movieResults);
    
  }, [movieResults]) */

  return (
    <>
      <input placeholder="Search for a movie..." id="movieSearch" className="p-4 w-64 md:w-80 lg:w-96 text-lg mb-4" type="text" onChange={handleChange} />
        {movieResults && movieResults.length > 0 && <SlideMenu> 
        {movieResults.map((movie) => {
          return <MovieCard movieObject={movie}/>
        })}
        </SlideMenu>}
    </>
  )
}