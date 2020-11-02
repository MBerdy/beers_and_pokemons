import React from 'react';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    return(
        <input 
            className={classes.SearchBar} 
            type="text" 
            placeholder="Search"  
            value ={props.value}
            onChange={(e) => props.changed(e)}/>
    )

}

export default SearchBar;