import React from 'react';

import capafcLogo from '../../assets/images/capafc_rec.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={capafcLogo} alt="CAPA-FC"/>
    </div>
)

export default logo;