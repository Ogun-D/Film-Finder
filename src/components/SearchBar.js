import React from 'react';
import '../css/SearchBar.css'

class SearchBar extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const search = document.querySelector('.song-search');
    this.props.onValueChange(search.value);
  }

  render() {
    return(
      <div className="search-bar">

        <form className="song-selector" onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Search for a Song"
            className="song-search"
          />
          <button type="submit">Find this Song</button>
        </form>

      </div>
    )
  }
}

export default SearchBar;
