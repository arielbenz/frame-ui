import { useEffect, useState } from 'react';
import getMovies from 'services/serviceGetMovies';

export function useMovieList({ movieList } = {}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies({ movieList: movieList, page: 2 })
            .then(movies => {
                setMovies(movies)
            })
    }, [movieList])

    return { movies }
}