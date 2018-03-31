import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import  TabMenu from './components/TabMenu';
import TeamDetailPage from './components/TeamDetailPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key="main" title="La Liga BBVA" component={TabMenu} />
                <Scene key="teamDetail" title="Team" component={TeamDetailPage} />
            </Scene>
        </Router>
    )
}

export default RouterComponent;