import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './HomePage.module.css';
import Home from '../../components/Home/Home';

const letter = {
    title: 'A letter to Chinese American Parents',
    content: `Dear Chinese American Parents,

The Chinese American Parent Association of Frederick County (CAPA-FC) was founded in April, 2021. The initial ideas are to encourage Chinese American parents to participate more in the school and community activities, to help create a safe and positive growing environment for Chinese American students, and to advocate for the underrepresented groups.

CAPA-FC is a non profit organization, and its operation is fully dependent on the generous contribution of the CAPA-FC members. We believe that no one can do everything, but everyone can do something.

The near goals of CAPA-FC are

1. To promote the Spring Festival as a school holiday for Frederick county public schools;
2. To include the history of Asian American in the school curriculum;
3. To increase the amount of Chinese books in the Frederick county publish libraries

Please join us.

Ru Yan
    `
}


class HomePage extends Component {
    render() {
        return (
            <Auxiliary>
                <div className={classes.HomePage}>
                    <Home letter={letter}/>
                </div>
            </Auxiliary>
        )
    }
}

export default HomePage;