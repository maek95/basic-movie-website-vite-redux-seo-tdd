import { useEffect, useState } from "react"
import { querySearchMovie } from "../../../api/apiMovieQuery";
import MovieCard from "../../MovieCard";
import SectionLayout from "../SectionLayout";

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

  useEffect(() => {
    console.log("movieResults: ", movieResults);
    
  }, [movieResults])

  return (
    <>
      <input className="p-4 w-96 text-lg" type="text" onChange={handleChange} />
      <br/>
        <SectionLayout> {/* TODO: make a scrollable drop-down instead */}
        {movieResults && movieResults.length > 0 && movieResults.map((movie) => {
          return <MovieCard movieObject={movie}/>
        })}
        </SectionLayout>
    </>
  )
}