import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTeams } from '../actions/TeamActions';
import _ from 'lodash';
import TeamItem from './TeamItem';

class HomePage extends Component{

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

    renderRow(team){
        // Return here a single row
        console.log(team)
        return <TeamItem team={team} />
    }
    render(){
        return(
            <ScrollView>
                <Text>This is HomePage</Text>
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