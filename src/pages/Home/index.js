import React from 'react'
import ListOfMovies from 'components/ListOfMovies'

export default function Home() {

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