import React from "react";
import SlideShow from './SlideShow';
import Genres from './Genres'

const Home = ({ pops, genres }) => {

  return (
    <div style={{width: '1000px'}}className="container">
     <SlideShow pops={pops}/>
     <ul><Genres genres={genres} /></ul>
    </div>
  );
};

export default Home;
