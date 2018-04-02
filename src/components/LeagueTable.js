import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import { getLeagueTable } from '../actions/TeamActions';
import { connect } from 'react-redux';

class LeagueTable extends Component{

    componentWillMount(){
        this.props.getLeagueTable();
        this.LeagueTableDataSource(this.props);

    }

    componentWillReceiveProps(nextProps){
        // this.props.getLeagueTable();
        this.LeagueTableDataSource(nextProps);
    }

    LeagueTableDataSource({ leaguePositions }){
        console.log('Data souce', leaguePositions);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(leaguePositions);
    }
    
    renderRow(team){

        return <View>
                    <Text>{team.teamName}</Text></View>
    }

    render(){
        return(
            <ScrollView>
                <ListView dataSource={this.dataSource}
                        renderRow={this.renderRow}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return { leaguePositions : state.teams.positions }
}

export default connect(mapStateToProps, { getLeagueTable })(LeagueTable);