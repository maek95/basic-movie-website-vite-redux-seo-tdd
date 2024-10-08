
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import MoviePage from './routes/MoviePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTMDBPopularMovies, setPopularMoviesFromLocalStorage } from './redux/PopularMoviesSlice'

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (typeof window !== "undefined") {

      if (localStorage.getItem("popularMovies")) {
        console.log("popularMovies found in localStorage, skipping fetch from TMDB API");
        dispatch(setPopularMoviesFromLocalStorage());
      } else {
        dispatch(fetchTMDBPopularMovies()); // 'await' not needed because it is an asyncThunk function...
      }
    }
  }, []) // fetch popular movies once when project mounts, and if any page is refreshed

 return (
  <>
    <Routes> {/* react-helmet-async ?   global meta data in index.html, but can have specific metadata on MoviePage for example */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
    </Routes>
  </>
 )
}

export default App
