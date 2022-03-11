import React, { useState, useEffect} from 'react';
import MoviePoster from 'components/content/MoviePoster'
import getMovies from 'services/serviceGetMovies';

import './ListOfMovies.css'

export default function ListOfMovies () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
            .then(movies => {
                setMovies(movies)
            })
    }, [setMovies])

    return (
        <div className="listOfMovies">
            {
                movies.map(({id, title, posterUrl, vote_average}) => 
                    <MoviePoster
                        id={id}
                        key={id}
                        title={title}
                        posterUrl={posterUrl}
                        votes={vote_average}>
                    </MoviePoster>
                )
            }
        </div>
        
    )
}