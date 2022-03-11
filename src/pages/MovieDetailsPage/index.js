import { useParams } from "react-router-dom"
import MovieDetails from 'components/content/MovieDetails'

export default function MovieDetailsPage() {

    const { id } = useParams();

    return (
        <>
            <div className="App-wrapper">
                <div className="App-main">
                    <MovieDetails id={id}></MovieDetails>
                </div>
            </div>
        </>
    )
}