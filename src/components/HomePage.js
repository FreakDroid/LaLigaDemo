import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, RefreshControl, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTeams } from '../actions/TeamActions';
import _ from 'lodash';
import TeamItem from './TeamItem';

class HomePage extends Component{

    state = { showLoading: true };

    componentWillMount(){
        this.props.getTeams();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
        
    }

    createDataSource({ teams }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(teams)
    }

    componentDidMount(){
        this.setState({ showLoading: false});
    }

    renderRow(team){
        // Return here a single row
        console.log(team)
        return <TeamItem team={team} />
    }
    render(){
        return(
            <ScrollView>
                <ActivityIndicator animating={this.state.showLoading} size="large" color="#0000ff"/>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow }
                    enableEmptySections={true}
                >

                </ListView>
                
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    console.log ( "Mapstatetoprops ", state.teams);
   return { teams: state.teams }
}

export default connect(mapStateToProps, {getTeams} )(HomePage);