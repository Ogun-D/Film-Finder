import React from 'react';
import '../css/SearchBar.css'

class SearchBar extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const search = document.querySelector('.movie-search');

    if (search.value === '') {
      alert("Please Enter a Film")
    } else
    this.props.onValueChange('s', search.value);
  }

  render() {
    return(
      <div className="search-bar">

        <form className="movie-selector" onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Search for a Film"
            className="movie-search"
          />
          <button type="submit" className="sub-button">Find Film!</button>
        </form>

      </div>
    )
  }
}

export default SearchBar;
