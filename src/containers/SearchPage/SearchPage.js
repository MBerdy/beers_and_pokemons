import React from 'react';

import SearchBar from '../../componets/SearchBar/SearchBar';
import Cards from '../../componets/Cards/Cards';
import ResultList from '../../componets/ResultList/ResultList';
import axios from 'axios'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: null
        }
    }
    searchResultsChangedHandler = (e) => {
        const text = e.target.value;
        let modifiedValue = text.trim().toLowerCase().split(' ').join('_');
        let urlForPokemons = `https://pokeapi.co/api/v2/pokemon/${modifiedValue}/`;
        let urlForBeers = `https://api.punkapi.com/v2/beers?beer_name=${modifiedValue}`;

        Promise.allSettled([axios.get(urlForPokemons), axios.get(urlForBeers)])
            .then((results) => {
                const searchData = []
                results.map(el => {
                    if (el.status === 'fulfilled' && el.value.data.name) {
                        return searchData.push({
                            name: el.value.data.name,
                            type: 'pokemon'
                        })
                    } else if (el.status === 'fulfilled' && el.value.data.length !== 0) {
                        for (let i = 0; i < el.value.data.length; i++) {
                            searchData.push({
                                name: el.value.data[i].name,
                                type: 'beer'
                            })
                        }
                    }
                })
                return searchData
            })
            .then(resData => this.setState({ searchResult: resData }))
    }


    render() {

        return (
            <React.Fragment>
                <SearchBar
                    changed={this.searchResultsChangedHandler}/>
                {this.state.searchResult ? <ResultList searchResults={this.state.searchResult} /> : null}
                <Cards beers={this.props.beers} pokemons={this.props.pokemons} />

            </React.Fragment>

        )
    }
}

export default SearchPage