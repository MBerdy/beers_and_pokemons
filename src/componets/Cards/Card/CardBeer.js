import React from 'react';

import classes from './Card.module.css'
const CardBeer = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Name}>
                <p>Name:</p>
                <h3>{props.name}</h3>
            </div>
            <p><strong>Tagline: </strong>{props.tagline}</p>
            <p><strong>First Brewed:</strong> {props.firstBrewed}</p>
        </div>
    )
}

export default CardBeer; 