import React, { useState } from 'react';
import { MOVIE_LISTS } from 'utils/settings'

import './ListSelection.css'

export default function ListSelection({ initialList = 'originals' }) {
    
    const [movieList, setMovieList] = useState('originals')

    const handleChangeListMovies = (evt) => {
        setMovieList(evt.target.value)
    }

    const keyLists = Object.keys(MOVIE_LISTS);

    return (
        <>
            <div className='list-selection'>
                <h3>Movie list:</h3>
                <select value={movieList} onChange={handleChangeListMovies}>
                    <option disabled>List</option>
                    {
                        keyLists.map((item) => (
                            <option key={item} value={item}>{MOVIE_LISTS[item]}</option>
                        ))
                    }
                </select>
            </div>
        </>
    );
}
