
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import MoviePage from './routes/MoviePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTMDBPopularMovies } from './redux/PopularMoviesSlice'

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {

    // fetch popular movies once when project mounts, and if any page is refreshed
    // 'await' not needed because it is an asyncThunk function...
    // TODO: store in localStorage and don't re-fetch if popularMovies exists in localStorage? 
    dispatch(fetchTMDBPopularMovies()); 

  }, [])

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
