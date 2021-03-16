import React from "react";
import StarRating from "./Stars/StarRating";

const PopularMovies = ({ value, pops }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container-fluid">
      <div className="row">
        {pops.slice(0, 4).map((pop) => (
          <div className="col-md-3 mt-3">
            <img
              className="img-fluid mb-3 poster-card"
              src={poster + pop.poster_path}
              alt={pop.title}
            ></img>
            <p>IMDB Rating: {pop.vote_average}</p>

            <StarRating value={pop.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
