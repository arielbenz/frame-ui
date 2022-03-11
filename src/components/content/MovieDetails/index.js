import React, { useState, useEffect } from 'react';
import getSingleMovie from 'services/serviceGetSingleMovie'

import './MovieDetails.css'

export default function MovieDetails({ id }) {

    const [movie, setMovie] = useState({})

    useEffect(() => {
        getSingleMovie({ id: id }).then(movie => {
            setMovie(movie)
        })
    }, [id])

    return (
        <div className='MovieDetails'>
            <figure className='MovieDetails-poster'>
                <img loading='lazy' alt={movie.original_title} src={movie.poster} />
            </figure>
            <div className='MovieDetails-content'>
                <h2>{movie.original_title}</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}