import React from 'react'
import ListOfMovies from 'components/content/ListOfMovies'

export default function HomePage() {

  return (
    <>
        <title>Home | Frame</title>
      
        <div className="App-wrapper">
            <div className="App-main">
                <div className="App-results">
                    <ListOfMovies></ListOfMovies>
                </div>
            </div>
        </div>
    </>
  )
}