import React from 'react';

import CardBeer from './Card/CardBeer';
import CardPokemon from './Card/CardPokemon';
import classes from './Cards.module.css';

const Cards = (props) => {
    let beerCards;
    if(props.beers) {
        beerCards = props.beers.map(beer => (
            <CardBeer 
                key = {beer.id}
                name ={beer.name}
                tagline ={beer.tagline}
                firstBrewed = {beer.first_brewed} />
        ))
    }
    let pokemonCards;
    if(props.pokemons) {
        pokemonCards = props.pokemons.map(pokemon => (
            <CardPokemon 
                key = {pokemon.id}
                name ={pokemon.name}
                height={pokemon.height}
                weight ={pokemon.weight} />
        ))
    }
    return (
        <div className={classes.Cards} >
            {pokemonCards}
            {beerCards}            
        </div>
    )
}

export default Cards