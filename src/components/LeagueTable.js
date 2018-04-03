import React, { Component } from 'react';
import { View, ScrollView, Text, ListView, StyleSheet, Platform } from 'react-native';
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

    renderHeader(){
        return(
            <View style={styles.header_style}>
            <Text style={{ color: '#fff', fontSize: 22, padding: 7}}> ListView Header </Text>
            <Text style={{ color: '#fff', fontSize: 22, padding: 7}}> ListView Header 2  </Text>
          </View>
        )
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.header_style}>
                    <Text style={{ color: '#fff', fontSize: 22, padding: 7}}> ListView Header </Text>
                    <Text style={{ color: '#fff', fontSize: 22, padding: 7}}> ListView Header 2  </Text>
                </View>
                <ListView dataSource={this.dataSource}
                        renderRow={this.renderRow}
                        enableEmptySections={true}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return { leaguePositions : state.teams.positions }
}

const styles = StyleSheet.create({
 
    MainContainer :{
    
      justifyContent: 'center',
      flex:1,
      paddingTop: (Platform.OS == 'ios' ? 20 : 0)
    },
    
    rowViewContainer: 
    {
    
       padding: 10,
       fontSize: 18,
       height: 44,
    
    },
    
    header_style:{
    
       width: '100%', 
       height: 45, 
       backgroundColor: '#E91E63',
       flexDirection: 'row',
    }
   });

export default connect(mapStateToProps, { getLeagueTable })(LeagueTable);