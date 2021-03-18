import React from 'react';


const TrendingPersons = ({persons}) => {

  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='container'>
      <div className='row'>
        {persons.slice(0, 4).map(person => (
          <div key={person.id} className='col-md-3 mt-3 mb-3'>
            <img
              className='img-fluid profile-img'
              src={poster + person.profile_path}
              alt={person.name}
              ></img>
              <p className='link mt-3'><strong>{person.name}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingPersons
