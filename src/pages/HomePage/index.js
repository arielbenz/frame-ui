import React from 'react'
import ListOfMovies from 'components/content/ListOfMovies'
import ListSelection from 'components/content/ListSelection'
import { useMovieList } from 'hooks/useMovieList'

export default function HomePage() {

    const movieList = 'popular'
    const { movies } = useMovieList({ movieList })

    return (
        <>
            <title>Home | Frame</title>
      
            <div className="App-wrapper">
                <div className="App-main">
                    <ListSelection></ListSelection>
                    <div className="App-results">
                        <ListOfMovies movies={ movies }></ListOfMovies>
                    </div>
                </div>
            </div>
        </>
    )
}