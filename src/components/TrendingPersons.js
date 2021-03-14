import React from "react";

const TrendingPersons = ({ persons }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="container-person">
      {persons.slice(0, 4).map((person) => (
        <div className="person">
          <img
            style={{ width: "150px" }}
            className="person-img"
            src={poster + person.profile_path}
            alt={person.name}
          ></img>
          <p style={{ color: "white" }}>
            <strong>{person.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPersons;
