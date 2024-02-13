import React, { useState,useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // function fetchMoviesHandler() {
  //   fetch(" https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           openingText: movie.opening_crawl,
  //           releaseDate: movie.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  //http request by using async await function
  const fetchMoviesHandler=useCallback(async()=> {
    setIsLoading(true);
    try {
      const response = await fetch(" https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Error found in the path of api.");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);

    }
  },[])

  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : (
          <p>No movie found.</p>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
