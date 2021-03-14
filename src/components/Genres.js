import React from 'react'

const Genres = ({genres}) => {
  return (
    <div className='genres'>
      {genres.map(genre => (
        <li key={genre.id}>
          <button style={{color: 'white'}}type='button' className='genre-button'>
            {genre.name}
          </button>
        </li>
      ))}
      
    </div>
  )
}

export default Genres
