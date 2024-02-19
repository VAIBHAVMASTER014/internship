import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = ({movies}) => {
  console.log("in movielist:",movies)
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((item) => (
        <Movie
          key={item.id}
          item = {item}
          // title={title}
          // releaseDate={releaseDate}
          // openingText={openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
