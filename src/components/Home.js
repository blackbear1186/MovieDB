import React from "react";
import SlideShow from './SlideShow';
import Genres from './Genres'
import TrendingPersons from './TrendingPersons';

const Home = ({ pops, genres, persons }) => {

  return (
    <div style={{width: '1000px'}} className="container">
     <SlideShow pops={pops}/>
     <ul><Genres genres={genres} /></ul>
     <h3 className='trending'>Trending persons of the week</h3>

     <TrendingPersons persons={persons} />
    </div>
  );
};

export default Home;
