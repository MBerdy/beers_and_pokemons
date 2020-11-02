import React from 'react';

import classes from './ItemDescr.module.css';
import Button from '../UI/Button/Button';

const BeerDescr = (props) => {
    return (
        <div className={classes.ItemDescr}>
            <div className={classes.Name}>
                <p>Beer Name:</p>
                <h3>{props.fullDescr.name}</h3>
            </div>
            <p><strong>Tagline: </strong>{props.fullDescr.tagline}</p>
            <p><strong>First Brewed:</strong> {props.fullDescr.first_brewed}</p>
            <p><strong>Food Pairing:</strong> {props.fullDescr.food_pairing.map(i => (
                <span key={i}> {i} </span>
            ))}</p>
            <Button clicked ={props.goBack}>Go back to Search Page</Button>
        </div>
    )
}

export default BeerDescr