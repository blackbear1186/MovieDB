import React from "react";
import { FaStar, FaStarHalf, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

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
     {/* <FaStar color={value >= 1 ? 'red' :  <FaStarHalf  /> }/>
     <FaStar color={value >= 2 ? 'red' :  <FaStarHalf  /> }/>
     <FaStar color={value >= 3 ? 'red' :  <FaStarHalf  /> }/>
     <FaStar color={value >= 4 ? 'red' :  <FaStarHalf /> } /> */}
     {/* <FaStar color={value >= 5 ? 'red' : value >= 4.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />}/>
     <FaStar color={value >= 6 ? 'red' : value >= 5.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />} />
     <FaStar color={value >= 7 ? 'red' : value >= 6.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />} />
     <FaStar color={value >= 8 ? 'red' : value >= 7.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />} />
     <FaStar color={value >= 9 ? 'red' : value >= 8.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />} />
     <FaStar color={value >= 10 ? 'red' : value >= 9.5 ? <FaStarHalfAlt color='red' /> : <FaRegStar />} /> */}
      <Star value={value} />
    </div>
  );
};

export default StarRating;
