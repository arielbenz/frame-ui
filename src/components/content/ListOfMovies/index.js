import React from 'react';
import MoviePoster from 'components/content/MoviePoster'

import './ListOfMovies.css'

export default function ListOfMovies ({ movies }) {

    return (
        <div className='listOfMovies'>
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