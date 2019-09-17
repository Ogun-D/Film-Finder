import React from 'react';
import './css/App.css';

import SearchBar from './components/SearchBar';

class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <SearchBar value="Goodbye" />

      </div>
    );
  }
}

export default App;
