import React from 'react';

import classes from './Footbar.module.css';

const footbar = (props) => (
    <footer className={classes.Footbar}>
        <div className={classes.Contact}>
            <p>Contact:</p>
            <p>(240)706-3005</p>
            <p>chineseamericanparents@gmail.com</p>
            <p>&copy; 2021 CAPA-FC</p>
        </div>
    </footer>
)

export default footbar;