import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    console.log(props)
    return (
    <div className="card-list">
        {
            props.monsters.map( monster => 
                <h2 key={monster.id}>{monster.name}</h2>
            )
        }
    </div>
    )
}