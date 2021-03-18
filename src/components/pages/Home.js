import React, {useState, useEffect} from 'react';
import PopularMovies from '../PopularMovies'
import TopRatedMovies from '../TopRatedMovies'
import { Link } from 'react-router-dom';
import TrendingPersons from '../TrendingPersons';
import FavoritesTab from '../FavoritesTab'

 
const Home = ({pops, items, persons}) => {

  const [favorites, setFavorites] = useState([])

  const saveToLocalStorage = items => {
    // convert object to json string
    localStorage.setItem('react-movie-app', JSON.stringify(items))
  }

  const addFavoriteMovie = (movie) => {
    const newFavorite = [...favorites, movie];
    setFavorites(newFavorite)
    saveToLocalStorage(newFavorite)
  }
  const removeFavoriteMovie = (movie) => {
    const newFavorite = favorites.filter(favorite => 
      favorite.id !== movie.id
    )
    setFavorites(newFavorite)
    // remove movie from local storate pass filtered movie into saveToLocalStorage()
    saveToLocalStorage(newFavorite)
  }
  useEffect(() => {
    // create movie favorite object to have movies appear when refreshed, convert json string to object
    const movieFavoritesSaved = JSON.parse(
      localStorage.getItem('react-movie-app')
    )
    setFavorites(movieFavoritesSaved)
  }, [])
  return (
    <div className='container'>
      <h3 className='fav-heading text-left mt-3'>Favorites</h3>
      <FavoritesTab handleFavoriteClick={removeFavoriteMovie} favorites={favorites} />
      <h3 className='fav-heading text-left mt-3'>
        <Link className='heading-link'  to='/popular'>Popular Movies</Link>
      </h3>
      <PopularMovies handleFavoriteClick={addFavoriteMovie} pops={pops}/>
      <h3 className='text-left mt-3'>
        <Link className='heading-link' to='/top-rated'>Top Rated Movies</Link>
      </h3>
      <TopRatedMovies handleFavoriteClick={addFavoriteMovie} items={items}/>
      <h3 className='heading-link text-left mt-3'>Trending Persons of the week</h3>
      <TrendingPersons persons={persons}/>
    </div>
  )
}

export default Home
