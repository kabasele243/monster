import React from 'react';
import './card-styles.css';

export const Card = ({monster}) => {
    return (
        <div className='card-container'>
             <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=160x160`}/>
             <h2>{monster.name}</h2>
             <p>{monster.email}</p>
        </div>
    )
}