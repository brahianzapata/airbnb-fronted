import React from 'react'

export const CardDetail = ({id, image, description,
    place, score, users}) =>(
    <article className="card-detail">
        <img src={image}/>
        <p>
            {description}
        </p>
    </article>
)