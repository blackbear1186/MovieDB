import React from "react";
import StarRating from "./Stars/StarRating";
import AddFavorites from "./AddFavorites";

const PopularMovies = ({ value, pops, handleFavoriteClick }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container-fluid">
      <div className="row">
        {pops.slice(0, 4).map((pop) => (
          <div key={pop.id} className="col-md-3 mt-3">
            <div className="image-container">
              <img
                className="img-fluid poster-card"
                src={poster + pop.poster_path}
                alt={pop.title}
              ></img>
              <div onClick={() => handleFavoriteClick(pop)} className="overlay">
                <AddFavorites />
              </div>
            </div>
            <p className='link'>IMDB Rating: {pop.vote_average}</p>
            <StarRating value={pop.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
