import React from 'react';
import PopularMovies from '../PopularMovies'
import TopRatedPage from './TopRatedPage';
import TopRatedMovies from '../TopRatedMovies'


const Home = ({pops, items}) => {
  return (
    <div className='container-fluid'>
      <h3 className='text-left mt-3'>Popular Movies</h3>
      <PopularMovies pops={pops} />
      <h3 className='text-left mt-3'>Top Rated Movies</h3>
      <TopRatedMovies items={items}/>
    </div>
  )
}

export default Home
