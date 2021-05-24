import React from 'react';

import classes from './Headerbar.module.css';
import Logo from '../Logo/Logo';

const headerbar = (props) => (
    <header className={classes.Headerbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={classes.Title}>
            <h1>Chinese American Parent Association of Frederick County</h1>
            <h1>马里兰费郡华裔家长联合会</h1>
        </div>
    </header>
)

export default headerbar;