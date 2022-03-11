import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import NavLink from 'components/NavLink'

import Home from 'pages/Home'
import About from 'pages/About'
import Movie from 'pages/Movie'
import Error from 'pages/Error';

import 'styles/App.css';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Frame logo" src="/frame-logo.png" />
          </figure>
        </Link>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>

      </header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/movie/:id' element={<Movie/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>      

    </div>
  );
}

export default App;
