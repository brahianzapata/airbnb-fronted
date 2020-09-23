import React from 'react';
import {Score} from './Score'
import { Link } from 'react-router-dom';

export const Housing = ({id, image, description,
    place, score, users}) => (
        <section className="housing">
            <Link className='link-global-housing'  to={`/detail/${id}`}>
                <img src={image}/>
                <div>
                    <h3>{description}</h3>
                    <h6>{place}</h6>
                    <Score score={score} users={users}/>
                </div>
            </Link>  
        </section>
)