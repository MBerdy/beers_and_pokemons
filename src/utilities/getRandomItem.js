import axios from 'axios';

export const getRandomBeers = (url, from, to, beers, resolve, reject) => {
    axios.get(url)
        .then(response => {
            const retrivedBeers = beers.concat(response.data);
            ++from
            if (from < to) {
                getRandomBeers(url, from, to, retrivedBeers, resolve, reject)
            } else {
                resolve(retrivedBeers)
            }
        })
        .catch(error => {
            reject('Something went wrong...');
        })
}


export const getRandomPokemons = (url, from, to, pokemons, resolve, reject) => {
    let id = Math.floor(Math.random() * 890);
    axios.get(url + id + "/")
        .then(response => {
            const retrivedPokemons = pokemons.concat(response.data);
            ++from
            if (from < to) {
                getRandomPokemons(url, from, to, retrivedPokemons, resolve, reject)
            } else {
                resolve(retrivedPokemons)
            }
        })
        .catch(error => {
            reject('Something went wrong...');
        })
}

