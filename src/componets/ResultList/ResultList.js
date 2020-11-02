import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './ResultList.module.css';

class ResultList extends React.Component {

    selectedItemHandler(el) {
        let name = el.name;
        const queryParams = [];
        for(let i in el) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(el[i]))
        }
        const queryString = queryParams.join('&');    

        this.props.history.push({
            pathname: '/' + name,
            search: '?' + queryString
        })
    }

    render() {
        let resultsList;
        if (this.props.searchResults) {
            resultsList = this.props.searchResults.map(el => (
                <li 
                    key={el.name}
                    onClick ={() =>this.selectedItemHandler(el)}>{el.name} [{el.type}]</li>
            ))
        }

        return (
            <div>
                <ul className={classes.ResultList}>
                    {resultsList}
                </ul>
            </div>
        )
    }


}

export default withRouter(ResultList);