import React from 'react'
import StarRating from './Stars/StarRating';

const TopRatedMovies = ({value, items}) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='container-fluid'>
      <div className='row'>
        {items.slice(0, 4).map(item => (
          <div className='col-md-3 mt-3'>
             <img
              className="img-fluid mb-3 poster-card"
              src={poster + item.poster_path}
              alt={item.title}
            ></img>
            <p>IMDB Rating: {item.vote_average}</p>

            <StarRating value={item.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies
