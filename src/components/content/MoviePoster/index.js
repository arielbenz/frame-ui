import React from "react";
import { Link } from 'react-router-dom'
import './MoviePoster.css'

export default function MoviePoster({ id, title, posterUrl, votes }) {
    return (
        <div className='Movie'>
            <h4>{title}</h4>
            <h4>Votes {votes}</h4>
            <Link className='Movie-poster' to={`/movie/${id}`}>
                <img loading='lazy' src={posterUrl} alt={title} />
            </Link>
        </div>
    );
}