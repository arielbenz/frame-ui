import React from "react";
import { Link } from 'react-router-dom'
import './MoviePoster.css'

export default function MoviePoster({ id, title, posterUrl, votes }) {
    return (
        <div className='Movie'>
            <Link className='Movie-poster' to={`/movie/${id}`}>
                <img loading='lazy' src={posterUrl} alt={title} />
                <div className="Movie-info">
                    <div>
                        <h3>{title}</h3>
                        <h3>{votes}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}