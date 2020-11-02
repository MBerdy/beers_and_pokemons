import React from 'react';

import classes from './ItemDescr.module.css';
import Button from '../UI/Button/Button';

const PokemonDescr = (props) => {
    return (
        <div className={classes.ItemDescr}>
            <div className={classes.Name}>
                <p>Pokemon Name:</p>
                <h3>{props.fullDescr.name}</h3>
            </div>
            <p><strong>Base Experiense: </strong>{props.fullDescr.base_experience}</p>
            <p><strong>Height:</strong> {props.fullDescr.height}</p>
            <p><strong>Weight:</strong> {props.fullDescr.weight}</p>
            <p><strong>Abilities</strong> {props.fullDescr.abilities.map(i => (
                <span key={i.ability.name}>{i.ability.name}</span>
            ))}</p>
            <Button clicked={props.goBack}>Go back to Search Page</Button>
        </div>
    )
}

export default PokemonDescr 