import React from 'react';
import Movie from './Movie';

import '../css/MovieList.css'

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map(movie =>
        <Movie
          id={movie.imdbID}
          key={movie.imdbID}
          src={movie.Poster}
          alt={movie.Title}
          title={movie.Title}
          year={movie.Year}
          selectedMovie={props.newSearch}
        />
      )}
    </div>
  )

}


export default MovieList;
