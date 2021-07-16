import React from 'react';

import classes from './Home.module.css';

const home = (props) => {
    return (
        <div className={classes.Home}>
            <h3 className={classes.Title}>{props.letter.title}</h3>
            <article className={classes.Content}>{props.letter.content}</article>
        </div>
    )
}

export default home;