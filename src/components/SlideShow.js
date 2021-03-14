import React from "react";
import Carousel from "react-bootstrap/Carousel";

const SlideShow = ({ pops }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="carousel">
      <Carousel indicators={false}>
        {pops.map((pop) => (
          <Carousel.Item key={pop.title} interval={3000}>
            <img
              className="d-block w-100"
              src={poster + pop.backdrop_path}
              alt={pop.title}
            />
            {/* <h3 style={{color: 'whitesmoke'}}>{pop.title}</h3> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideShow;
