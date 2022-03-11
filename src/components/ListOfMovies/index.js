import React, { useState, useEffect} from 'react';
import Movie from 'components/Movie'
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
                    <Movie
                        id={id}
                        key={id}
                        title={title}
                        posterUrl={posterUrl}
                        votes={vote_average}>
                    </Movie>
                )
            }
        </div>
        
    )
}