import React from 'react';
import '../css/SelectedMovie.css'


const SelectedMovie = (props) => {
  const src = props.src;
  const title = props.title;
  const year = props.year;
  const actors = props.actors;
  const pic = 'https://images.unsplash.com/photo-1558544097-065d1a4471a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80';
  const director = props.director;
  const imdb = props.imdbRating;
  const plot = props.plot;
  const runtime = props.runtime;

  return(
    <div className="selected-movie">
      <div className="poster">
        <img src={src === "N/A" ? pic : src} alt={title} />
      </div>
      <div className="info">
        <p className="one-title">{title} ({year})</p>
        <p className="runtime"><strong>Runtime:</strong> {runtime}</p>
        <p className="director"><strong>Director:</strong> {director}</p>
        <p className="actors"><strong>Stars:</strong> {actors}</p>
        <p className="imdb"><strong>IMDb Rating:</strong> {imdb}/10</p>
        <p className="plot">{plot}</p>
      </div>
    </div>
  )
}

export default SelectedMovie;

// class SelectedMovie extends React.Component {
//   render() {
//     return(
//       <div className="selected-movie">

//       </div>
//     )
//   }
// }
