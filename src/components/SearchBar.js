import React from 'react';
import '../css/SearchBar.css'

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  handleSubmit = (event) => {
    event.preventDefault();

    const search = document.querySelector('.song-search');
    console.log(search.value);
  }

  handleChange = (event) => {
    this.props.onValueChange(event.target.value);
  }

  render() {
    const search = this.props.search;
    return(
      <div className="search-bar">

        <form className="song-selector" onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Search for a Song"
            className="song-search"
            value={search}
            onChange={this.handleChange} />
          <button type="submit">Find this Song</button>
        </form>

      </div>
    )
  }
}

export default SearchBar;
