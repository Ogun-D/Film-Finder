import React from 'react';
import SelectedMovie from './SelectedMovie';
import '../css/MovieCard.css'

const MovieCard = (props) => {
  return(
    <div className="movie-card">
      <SelectedMovie
        id={props.movie.imdbID}
        key={props.movie.imdbID}
        src={props.movie.Poster}
        alt={props.movie.Title}
        title={props.movie.Title}
        year={props.movie.Year}
        actors={props.movie.Actors}
        director={props.movie.Director}
        imdbRating={props.movie.imdbRating}
        plot={props.movie.Plot}
        runtime={props.movie.Runtime}

      />
    </div>
  )
}

export default MovieCard;
