import React from 'react';

import classes from './Vision.module.css';

const vision = (props) => {
    return (
        <div className={classes.Vision}>
            <h3 className={classes.Title}>Vision:</h3>
            <div className={classes.Content}>For every resident in Frederick County and every family in Frederick County public schools to be equally represented in the community and to have equitable access to services and resources.</div>
        </div>
    )
}

export default vision;