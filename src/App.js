import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PopularMovies from "./components/PopularMovies";
import Nav from "./components/Nav";
import {
  BrowserRouter,
  BrowserRouter as Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import PopularPage from "./components/pages/PopularPage";
import TopRatedPage from "./components/pages/TopRatedPage";

function App() {
  const [pops, setPops] = useState([]);
  const [movieItems, setMovieItems] = useState([]);
  const [persons, setPersons] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchPop = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/popular?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setPops(data.data.results);
      console.log(data);
    };
    const fetchTopRated = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/top_rated?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setItems(data.data.results);
      console.log(data);
    };

    const fetchDiscoverMovies = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/discover/movie?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setMovieItems(data.data.results);
      console.log(data.data.results);
    };
    const fetchTrendingPersons = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/trending/person/week?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setPersons(data.data.results);
      // console.log(data.data.results)
    };

    fetchTrendingPersons();
    fetchDiscoverMovies();
    fetchTopRated();
    fetchPop();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Nav />

        <Route exact path="/" component={Home}>
          <Home pops={pops} items={items}/>
        </Route>
        <Route path="/popular" component={PopularPage}>
          <PopularPage pops={pops}/>
        </Route>
        <Route path="/top-rated" component={TopRatedPage}>
          <TopRatedPage items={items}/>
        </Route>
      </Switch>
      {/* <PopularMovies pops={pops} /> */}
      {/* <h3 className="heading">Trending persons of the week</h3>
    <TrendingPersons persons={persons} />
    <h3 className='heading'>Top Rated Movies</h3>
    <TopRated items={items} /> */}
    </div>
  );
}

export default App;
