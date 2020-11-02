import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import MainPage from './containers/MainPage/MainPage';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter basename='/beers_and_pokemons'>
          <MainPage />
        </BrowserRouter>
    
    )
  }


}
export default App;
