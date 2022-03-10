import React from "react";
import './Movie.css'

export default function Movie({ id, title, posterUrl }) {
    return (
        <div className='Movie'>
            <h4>{id} - {title}</h4>
            <img loading='lazy' src={posterUrl} alt={title} />
        </div>
    );
}