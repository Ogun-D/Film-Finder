import React from 'react';
import './css/App.css';

import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movies: [],
    };
  }

  handleChange = (event) => {
    this.setState({search: event});
  }

  search = (query) => {
    let url = `http://www.omdbapi.com/?apikey=924ba45c&s=${query}`

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
      // .then(console.log('hi bro'))

  }

  render() {
      // console.log(this.state.movies)
    return (
      <div className="app-container">
        <SearchBar
          onValueChange={this.search}
        />

        <MovieList movies={this.state.movies} />

      </div>
    );
  }
}

export default App;
