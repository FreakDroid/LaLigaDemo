import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, StyleSheet } from 'react-native';
import { getLeagueTable } from '../actions/TeamActions';
import { connect } from 'react-redux';

class LeagueTable extends Component{

    componentWillMount(){

    }

    componentWillReceiveProps(){

    }

    LeagueTableDataSource({ leaguePositions }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(leaguePositions);
    }

    render(){
        return(
            <View>

            </View>
        )
    }
}