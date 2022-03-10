import React from 'react';
import ListOfMovies from 'components/ListOfMovies'

import 'styles/App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <figure className="App-logo">
          <img alt="Frame logo" src="/framelogo.png" />
        </figure>
      </header>

      <ListOfMovies></ListOfMovies>

    </div>
  );
}

export default App;
