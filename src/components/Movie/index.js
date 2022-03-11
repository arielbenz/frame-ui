import React from "react";
import { Link } from 'react-router-dom'
import './Movie.css'

export default function Movie({ id, title, posterUrl, votes }) {
    return (
        <div className='Movie'>
            <h4>{title}</h4>
            <h4>Votes {votes}</h4>
            <Link to={`/movie/${id}`}>
                <img loading='lazy' src={posterUrl} alt={title} />
            </Link>
        </div>
    );
}