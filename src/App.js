import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
// import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

// const apiKey = "590deb377ecf6a1f707d345ad65b5e98";
// const url = "https://api.themoviedb.org/3";
// const popularMovies = `${url}/movie/popular`;
// const topRated = `${url}/movie/top_rated`;
// const movieUrl = `${url}/movie`;
// const genreUrl = `${url}/genre/movie/list`;
// const moviesUrl = `${url}/discover/movie`;
// const trendingPerson = `${url}/trending/person/week`;

function App() {
  const [pops, setPop] = useState([]);
  const [genres, setGenre] = useState([]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchPop = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/popular?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setPop(data.data.results);
      console.log(data.data.results);
    };
    const fetchTopRated = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/top_rated?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      // setItems(data.data.results)
      // console.log(data)
    };
    const fetchGenres = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/genre/movie/list?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setGenre(data.data.genres);
      console.log(data.data.genres);
    };
    const fetchDiscoverMovies = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/discover/movie?&api_key=590deb377ecf6a1f707d345ad65b5e98"
      );
      setMovieItems(data.data.results);
      console.log(data.data.results);
    };

    fetchDiscoverMovies();
    fetchGenres();
    fetchTopRated();
    fetchPop();
  }, []);

  return (
    <div className="App">
     
            <Home pops={pops} genres={genres} />
            <MovieList movieItems={movieItems} />
          
    </div>
  );
}

export default App;
