import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import PopularPage from "./components/pages/PopularPage";
import TopRatedPage from "./components/pages/TopRatedPage";


function App() {
  const [pops, setPops] = useState([]);
  const [persons, setPersons] = useState([]);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([])

  const saveToLocalStorage = items => {
    // convert object to json string
    localStorage.setItem('react-movie-app', JSON.stringify(items))
  }
  const addFavoriteMovie = (movie) => {
    const newFavorite = [...favorites, movie];
    setFavorites(newFavorite)
    saveToLocalStorage(newFavorite)
  }
 
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

    const fetchTrendingPersons = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/trending/person/week?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setPersons(data.data.results);
      console.log(data)
    };

    fetchTrendingPersons();
    fetchTopRated();
    fetchPop();
  }, []);

  useEffect(() => {
    // create movie favorite object to have movies appear when refreshed, convert json string to object
    const movieFavoritesSaved = JSON.parse(
      localStorage.getItem('react-movie-app')
    )
    setFavorites(movieFavoritesSaved)
  }, [])

  return (
    <div className="App">
      <Switch>
        <Nav />
        <Route exact path="/">
          <Home pops={pops} items={items} persons={persons}/>
        </Route>
        <Route path="/popular">
          <PopularPage handleFavoriteClick={addFavoriteMovie} favorites={favorites} pops={pops}/>
        </Route>
        <Route path="/top-rated">
          <TopRatedPage handleFavoriteClick={addFavoriteMovie} favorites={favorites} items={items}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
