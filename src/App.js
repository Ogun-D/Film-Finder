import React from 'react';
import './css/App.css';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  handleChange = (event) => {
    this.setState({search: event});
  }

  render() {
    const search = this.state.search;
    return (
      <div className="app-container">
        <SearchBar
          search={search}
          onValueChange={this.handleChange}
        />

      </div>
    );
  }
}

export default App;
