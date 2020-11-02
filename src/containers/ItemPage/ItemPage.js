import React from 'react';

import axios from 'axios';
import BeerDescr from '../../componets/ItemDescr/BeerDescr';
import PokemonDescr from '../../componets/ItemDescr/PokemonDescr';
import Spinner from '../../componets/UI/Spinner/Spinner';
import ErrorMessage from '../../componets/UI/ErrorMessage/ErrorMessage';

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            itemDescr : null,
            isLoading: true, 
            error: false
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const item = {};
        for (let param of query.entries()) {
            item[param[0]] = param[1];
        }
        console.log(item);

        if(item.type === 'beer') {
            axios.get(`https://api.punkapi.com/v2/beers?beer_name=${item.name}`)
            .then(res => this.setState({itemDescr: {
                ...res.data[0],
                type: 'beer'
            }, isLoading: false}))
            .catch(error => this.setState({error: true}))
        }

        if(item.type === 'pokemon') {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}/`)
            .then(res => this.setState({itemDescr: {
                ...res.data,
                type: 'pokemon'
            }, isLoading: false}))
            .catch(error => this.setState({error: true}))            
        }
    }

    goBackHandler = () =>{
        this.props.history.goBack()
    }

    render() {
        console.log(this.state.error)
        let page ;
        if(this.state.isLoading) {
            page = <Spinner />
        }
        else if (!this.state.loading) {
            page = this.state.itemDescr.type === 'beer' ? ( <BeerDescr 
                                fullDescr ={this.state.itemDescr}
                                goBack ={this.goBackHandler} />) : (<PokemonDescr
                                fullDescr ={this.state.itemDescr}
                                goBack ={this.goBackHandler} />)
                                }
        return (
            <div>
               {this.state.error ? <ErrorMessage /> : page}
            </div>
        )
    }
}

export default ItemPage