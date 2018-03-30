import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import  TabMenu from './components/TabMenu';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key="main" title="La Liga BBVA" component={TabMenu} />
            </Scene>
        </Router>
    )
}

export default RouterComponent;