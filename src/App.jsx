
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import MoviePage from './routes/MoviePage'
import { useEffect } from 'react'
import AboutPage from './routes/AboutPage'
import MyPage from './routes/MyPage'
import { usePopulateFavouritedMoviesArr, usePopulatePopularMoviesArr, usePopulateVisitedMoviesArr } from './utils/populateArrays'

function App() {

  // have to extract custom hooks before useEffect, to adhere to React Hooks
  const populatePopularMoviesArr = usePopulatePopularMoviesArr();
  const populateVisitedMoviesArr = usePopulateVisitedMoviesArr();
  const populateFavouritedMoviesArr = usePopulateFavouritedMoviesArr();

  // TODO: move this to respective components instead? But that can lead to very repetitive code, why not just place here?
  useEffect(() => {
    populatePopularMoviesArr(); // from localStorage OR fetch from API if empty.
    populateVisitedMoviesArr(); // from localStorage
    populateFavouritedMoviesArr(); // from localStorage
  }, [populatePopularMoviesArr, populateVisitedMoviesArr, populateFavouritedMoviesArr]);

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
