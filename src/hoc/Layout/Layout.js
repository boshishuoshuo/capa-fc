import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Headerbar from '../../components/Headerbar/Headerbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Headerbar />
                <Toolbar />
            </Auxiliary>
        )
    }
}

export default Layout;