import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Headerbar from '../../components/Headerbar/Headerbar';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Headerbar />
            </Auxiliary>
        )
    }
}

export default Layout;