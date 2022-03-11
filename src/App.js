import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import NavLink from 'components/structure/NavLink'
import { ROUTES } from 'utils/settings'

import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import MovieDetailsPage from 'pages/MovieDetailsPage'
import ErrorPage from 'pages/ErrorPage';

import 'styles/App.css';

/**
 * Main function app
 * @returns 
 */
export default function App() {

    return (
        <div className="App">

            <header className="App-header">
                <Link to={`${ROUTES.home}`}>
                    <figure className="App-logo">
                        <img alt="Frame logo" src="/frame-logo.png" />
                    </figure>
                </Link>

                <nav>
                    <ul>
                        <li><NavLink to={`${ROUTES.home}`}>Home</NavLink></li>
                        <li><NavLink to={`${ROUTES.about}`}>About</NavLink></li>
                    </ul>
                </nav>

            </header>

            <Routes>
                <Route path={`${ROUTES.home}`} element={ <HomePage/> }></Route>
                <Route path={`${ROUTES.about}`} element={ <AboutPage/> }></Route>
                <Route path={`${ROUTES.movieDetail}`} element={ <MovieDetailsPage/> }></Route>
                <Route path={`${ROUTES.error}`} element={ <ErrorPage/> }></Route>
            </Routes>      

        </div>
    );
}
