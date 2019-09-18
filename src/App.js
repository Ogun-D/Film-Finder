import React from 'react';
import './css/App.css';

import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import SelectedMovie from './components/SelectedMovie';
import MovieCard from './components/MovieCard';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movies: [],
      selectedMovie: {},
    };
  }

  handleChange = (event) => {
    this.setState({search: event});
  }

  search = (type, query) => {
    let url = `http://www.omdbapi.com/?apikey=924ba45c&${type}=${query}`

    if (type === 's') {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.Search,
            selectedMovie: {}
          })
        )
    } else
      fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.setState({selectedMovie: data}))
        // .then(console.log(this.state.selectedMovie))

  }

  render() {
      // console.log(this.state.movies)
    return (
      <div className="app-container">
        <SearchBar
          onValueChange={this.search}
        />

        <div className="display-container">
          {this.state.selectedMovie.hasOwnProperty('Title') ? <MovieCard movie={this.state.selectedMovie} /> : false}

          <MovieList movies={this.state.movies} newSearch={this.search} />
        </div>

      </div>
    );
  }
}

export default App;
