import React from "react";
import SlideShow from "./SlideShow";
import Genres from "./Genres";
import TrendingPersons from "./TrendingPersons";
import TopRated from "./TopRated";

const Home = ({ pops, genres, persons, items }) => {
  return (
    <div className="container">
      <SlideShow pops={pops} />
      <ul>
        <Genres genres={genres} />
      </ul>
      <h3 className="heading">Trending persons of the week</h3>
      <TrendingPersons persons={persons} />
      <h3 className='heading'>Top Rated Movies</h3>
      <TopRated items={items} />
    </div>
  );
};

export default Home;
