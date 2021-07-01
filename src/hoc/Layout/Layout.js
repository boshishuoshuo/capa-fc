import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Headerbar from '../../components/Headerbar/Headerbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footbar from '../../components/Footbar/Footbar';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Headerbar />
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
                <Footbar />
            </Auxiliary>
        )
    }
}

export default Layout;