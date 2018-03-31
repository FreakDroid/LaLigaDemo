import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getTeams } from '../actions/TeamActions';
import _ from 'lodash';
import TeamItem from './TeamItem';

class TeamListPage extends Component{

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
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow }
                    enableEmptySections={true}
                    renderSeparator={ (sectionId, rowId) => <View key={rowId} style={style.separator} />}
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

const style = StyleSheet.create({
    /*
     * Removed for brevity
     */
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
  });

export default connect(mapStateToProps, {getTeams} )(TeamListPage);