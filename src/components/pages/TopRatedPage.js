import React from 'react'
import StarRating from '../Stars/StarRating'

const TopRatedPage = ({items}) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='container'>
    <div className='row'>
      {items.map(item => (
        <div className='col-md-3 mt-3'>
          <img className='img-fluid poster-card' src={poster + item.poster_path} alt={item.title}></img>
          <p className='mt-2'>IMDB Rating: {item.vote_average}</p>
          <StarRating value={item.vote_average}/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TopRatedPage
