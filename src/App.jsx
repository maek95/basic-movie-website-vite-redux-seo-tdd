
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import MoviePage from './routes/MoviePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTMDBPopularMovies, setPopularMoviesFromLocalStorage } from './redux/PopularMoviesSlice'
import AboutPage from './routes/AboutPage'
import MyPage from './routes/MyPage'
import { setVisitedMoviesFromLocalStorage } from './redux/VisitedMoviesSlice'

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const popularMoviesLocalStorage = localStorage.getItem("popularMovies"); // just used to check if popularMovies item exists, if it doesnt we fetch popular movies from the API
 
        // sometimes localStorage stores 'undefined' as a String...
      if (popularMoviesLocalStorage && popularMoviesLocalStorage !== "undefined" && popularMoviesLocalStorage !== "null") {
        console.log("popularMovies found in localStorage, dispatching to redux, skipping fetch from TMDB API");
        dispatch(setPopularMoviesFromLocalStorage());
      } else {
        dispatch(fetchTMDBPopularMovies()); // 'await' not needed because it is an asyncThunk function...?
      }

      const visitedMoviesFromLocalStorage = localStorage.getItem("visitedMovies");

      if (visitedMoviesFromLocalStorage && visitedMoviesFromLocalStorage !== "undefined" && visitedMoviesFromLocalStorage !== "null") {
        console.log("visitedMovies found in localStorage, dispatching to redux");
        dispatch(setVisitedMoviesFromLocalStorage());
      } else {
        console.log("visitedMovies in localStorage is empty or doesn't exist");
      }

    }
  }, []) // fetch popular movies once when project mounts, and if any page is refreshed

 return (
  <>
    <Routes> {/* react-helmet-async ?   global meta data in index.html, but can have specific metadata on MoviePage for example */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
    </Routes>
  </>
 )
}

export default App
