import React from 'react';
import '../css/Movie.css'
// import App from '../App.js'

class Movie extends React.Component {


  handleClick = () => {
    const title = this.props.title;
    this.props.selectedMovie('t', title);
    // console.log(this);
  }

  render() {
    const src = this.props.src;
    const title = this.props.title;
    const year = this.props.year;
    const pic = 'https://images.unsplash.com/photo-1558544097-065d1a4471a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80'
    return(
      <div className="movie" onClick={this.handleClick}>
        <img src={src === "N/A" ? pic : src} alt={title} />
        <div className="movie-info">
          <p className="movie-title">{title} ({year})</p>
        </div>
      </div>
    )
  }
}

export default Movie;
