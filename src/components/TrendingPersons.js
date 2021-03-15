import React from "react";

const TrendingPersons = ({ persons }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (

    <div className="row">
      {persons.slice(0, 4).map((person) => (
        <div key ={person.id} className="col-md-3">
          <img className='img-fluid mb-1' src={poster + person.profile_path}></img>
          <p className='text-left'><strong>{person.name}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPersons;
