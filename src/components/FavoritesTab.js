import React from 'react'
import RemoveFavorites from './RemoveFavorites'
import StarRating from './Stars/StarRating'

const FavoritesTab = ({favorites, handleFavoriteClick}) => {
  const poster = "https://image.tmdb.org/t/p/original/";
  
  return (
    <div className="container-fluid">
      
      <div className="row">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="col-md-3 mt-3">
            <div className='image-container'>

            <img
              className="img-fluid poster-card"
              src={poster + favorite.poster_path}
              alt={favorite.title}
            ></img>
            <div onClick={() => handleFavoriteClick(favorite)} className='overlay'>
              <RemoveFavorites />
            </div>
            </div>
            <p className='link'>IMDB Rating: {favorite.vote_average}</p>
            <StarRating value={favorite.vote_average} />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default FavoritesTab
