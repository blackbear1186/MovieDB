import React from "react";
import StarRating from "./Stars/StarRating";

const TopRated = ({ items, value }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
   
    <div className="row">
      {items.slice(0, 4).map((item) => (
        <div className="col-md-3" key={item.id}>
          <div className="card">
            <img
              className="img-fluid"
              src={poster + item.poster_path}
              alt={item.title}
            ></img>
          </div>
          <div className='mt-3 text-left'>
            <p className='p-heading'><strong>{item.title}</strong></p>
            <p className='p-heading'><strong>Rated: {item.vote_average}</strong></p>
            <StarRating className='rating' value={item.vote_average} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
