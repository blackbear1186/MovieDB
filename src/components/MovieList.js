import React from "react";
// import { Link } from "react-router-dom";
// import { Card } from 'react-bootstrap'

const MovieList = ({ movieItems }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie-genre">
      {movieItems.slice(0, 4).map((item) => (
         
      <img src={poster + item.poster_path} alt=""></img>

      
      ))}

      
    </div> 
  );
};

export default MovieList;
