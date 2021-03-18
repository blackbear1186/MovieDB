import React from "react";
import StarRating from "./Stars/StarRating";
import AddFavorites from "./AddFavorites";

const TopRatedMovies = ({ value, items, handleFavoriteClick }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container-fluid">
      <div className="row">
        {items.slice(0, 4).map((item) => (
          <div key={item.id} className="col-md-3 mt-3">
            <div className="image-container">
              <img
                className="img-fluid poster-card"
                src={poster + item.poster_path}
                alt={item.title}
              ></img>
              <div
                onClick={() => handleFavoriteClick(item)}
                className="overlay"
              >
                <AddFavorites />
              </div>
            </div>
            <p className='link'>IMDB Rating: {item.vote_average}</p>

            <StarRating value={item.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
