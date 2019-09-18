import React from 'react';
import './css/App.css';

import SearchBar from './components/SearchBar';


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
    // console.log(this.search('hello'))
    // this.search(this.state.search)
  }

  search = (query) => {
    let url = `http://www.omdbapi.com/?apikey=924ba45c&s=${query}`

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))

  }

  render() {
    // const search = this.state.search;
      console.log(this.state.movies)
    return (
      <div className="app-container">
        <SearchBar
          // search={this.handleChange}
          onValueChange={this.search}
        />

      </div>
    );
  }
}

export default App;
