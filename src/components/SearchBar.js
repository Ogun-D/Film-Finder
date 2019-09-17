import React from 'react';
import '../css/SearchBar.css'

class SearchBar extends React.Component {

  render() {
    return(
      <div className="search-bar">

        <form className="song-selector" onSubmit={} >
          <input type="text" placeholder="Search for a Song" className="song-search" />
          <button type="submit">Find this Song</button>
        </form>

      </div>
    )
  }
}

export default SearchBar;
