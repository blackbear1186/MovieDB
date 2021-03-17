import React, {useState} from 'react';
import PopularMovies from '../PopularMovies'
import TopRatedMovies from '../TopRatedMovies'
import { Link } from 'react-router-dom';
import TrendingPersons from '../TrendingPersons';

 
const Home = ({pops, items, persons}) => {

  const [favorites, setFavorites] = useState([])

  const addFavoriteMovie = (movie) => {
    const newFavorite = [...favorites, movie];
    setFavorites(newFavorite)
  }
  return (
    <div className='container'>
      <h3 className='text-left'>Favorites</h3>
      <PopularMovies pops={favorites}/>
      <h3 className='text-left mt-3'>
        <Link to='/popular'>Popular Movies</Link>
      </h3>
      <PopularMovies handleFavoriteClick={addFavoriteMovie} pops={pops}/>
      <h3 className='text-left mt-3'>
        <Link to='/top-rated'>Top Rated Movies</Link>
      </h3>
      <TopRatedMovies items={items}/>
      <h3 className='text-left mt-3'>Trending Persons of the week</h3>
      <TrendingPersons persons={persons}/>
    </div>
  )
}

export default Home
