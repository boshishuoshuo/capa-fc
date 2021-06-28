import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <nav>
        <NavigationItems />
    </nav>
);

export default toolbar;