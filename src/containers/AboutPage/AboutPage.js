import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Vision from '../../components/About/Vision/Vision';
import Mission from '../../components/About/Mission/Mission';
import classes from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return (
            <Auxiliary>
                <div className={classes.AboutPage}>
                    <Vision/>
                    <Mission/>
                </div>
            </Auxiliary>
        )
    }
}

export default AboutPage;