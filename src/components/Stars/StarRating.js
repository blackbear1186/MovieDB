import React from "react";

const StarRating = ({ value, color='yellow' }) => {
  const Star = () => {
    return (
      <div className='rating'>
        <span>
          <i style={{color}}
            className={
              value >= 1 
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 2 
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 6
              ? 'fas fa-star'
              : value >= 5.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 7
              ? 'fas fa-star'
              : value >= 6.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 8
              ? 'fas fa-star'
              : value >= 7.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 9
              ? 'fas fa-star'
              : value >= 8.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 10
              ? 'fas fa-star'
              : value >= 9.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
            }></i>
        </span>
      </div>
    )
  }
  Star()
  return (
    <div>
      <Star value={value} />
    </div>
  );
};

export default StarRating;
