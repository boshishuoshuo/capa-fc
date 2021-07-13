import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './NewsPage.module.css';

class NewsPage extends Component {
    render() {
        return (
            <Auxiliary>
                <div className={classes.NewsPage}>
                    <h2>News Updates</h2>
                    <div>This is News Page</div>
                </div>
            </Auxiliary>
            
        )
    }
}

export default NewsPage;