import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/news">News</NavigationItem>
    </ul>
);

export default navigationItems;