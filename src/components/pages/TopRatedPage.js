import React from "react";
import StarRating from "../Stars/StarRating";
import AddFavorites from '../AddFavorites'

const TopRatedPage = ({ items, handleFavoriteClick }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-3 mt-3">
            <div className="image-container">
              <img
                className="img-fluid poster-card"
                src={poster + item.poster_path}
                alt={item.title}
              ></img>
              <div onClick={() => handleFavoriteClick(item)} className="overlay">
                <AddFavorites />
              </div>
            </div>
            <p className="link mt-2">IMDB Rating: {item.vote_average}</p>
            <StarRating value={item.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
