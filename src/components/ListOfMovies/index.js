import React, { useState, useEffect} from 'react';
import Movie from 'components/Movie'
import getMovies from 'services/getMovies';

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
                movies.map(({id, title, posterUrl}) => 
                    <Movie
                        id={id}
                        key={id}
                        title={title}
                        posterUrl={posterUrl}>
                    </Movie>
                )
            }
        </div>
        
    )
}