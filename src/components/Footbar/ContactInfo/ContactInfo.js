import React from 'react';

import classes from './ContactInfo.module.css';

const contactInfo = (props) => (
    <div className={classes.ContactInfo}>
        <div>{props.method}</div>
        <div className={classes.Content}>{props.content}</div>
    </div>
);

export default contactInfo;