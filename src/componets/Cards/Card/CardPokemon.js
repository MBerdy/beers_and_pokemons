import React from 'react';

import classes from './Card.module.css'
const CardPokemon = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Name}>
                <p>Name:</p>
                <h3>{props.name}</h3>
            </div>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Weight: </strong>{props.weight}</p>
        </div>
    )
}

export default CardPokemon;