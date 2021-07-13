import React from 'react';

import classes from './Mission.module.css';

const mission = (props) => {
    return (
        <div className={classes.Mission}>
            <h3 className={classes.Title}>Mission:</h3>
            <div className={classes.Content}>To advance, empower and unite the Chinese and other immigrants in Frederick County by advocating for the underrepresented, leading in civic activities, promoting greater community engagement, and supporting integration into the larger community.</div>
        </div>
    )
}

export default mission;