import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Utilities from '../../utilities/getRandomItem';
import SearchPage from '../SearchPage/SearchPage';
import ItemPage from '../ItemPage/ItemPage';
import Spinner from '../../componets/UI/Spinner/Spinner';
import ErrorMessage from '../../componets/UI/ErrorMessage/ErrorMessage';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomBeers: null,
            randomPokemons: null,
            isLoading: true,
            error: false,
        }
    }
    componentDidMount() {
        let fetchPokemons = new Promise((resolve, reject) => {
            Utilities.getRandomPokemons("https://pokeapi.co/api/v2/pokemon/", 0, 6, [], resolve, reject)
        })
        let fetchBeers = new Promise((resolve, reject) => {
            Utilities.getRandomBeers('https://api.punkapi.com/v2/beers/random', 0, 6, [], resolve, reject)
        })

        Promise.all([fetchBeers, fetchPokemons])
        .then(res => {
            this.setState({randomBeers: res[0], randomPokemons: res[1], isLoading: false })
        })
        .catch(error => this.setState({error: true}))
    }

    render() {
        let page;
        if (this.state.isLoading) {
            page = <Spinner />
        } else if (!this.state.isLoading) {
            page =(<Switch>
                <Route path='/' 
                       exact 
                       render={(props) => <SearchPage {...props} beers={this.state.randomBeers} pokemons={this.state.randomPokemons} />} />
                <Route path='/:name' component={ItemPage} />
            </Switch>)
        }
        return (
            <div>
                {this.state.error ? <ErrorMessage /> : page}
            </div>

        )
    }
}

export default HomePage;