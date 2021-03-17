import React from "react";
import StarRating from "../Stars/StarRating";

const PopularPage = ({ pops }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container">
      <div className="row">
        {pops.map((pop) => (
          <div key={pop.id} className="col-md-3 mt-3">
            <img
              className="img-fluid poster-card"
              src={poster + pop.poster_path}
              alt={pop.title}
            ></img>
            <p className="mt-2">IMDB Rating: {pop.vote_average}</p>

            <StarRating value={pop.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
