import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
  } from 'react-native';
  import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
  import FacebookTabBar from './common/FacebookTabBar';
  import TeamListPage from './TeamListPage';
  import LeagueTable from './LeagueTable';

class TabMenu extends Component{
    
    render(){
        return(
          <View style={{flex:1}}>
            <ScrollableTabView
            style={{}}
            initialPage={0}
            renderTabBar={() => <FacebookTabBar />}>
                <TeamListPage tabLabel="soccer-field" />
                <LeagueTable tabLabel="account" />
                <ScrollView tabLabel="file-account" style={styles.tabView}>
                  <View style={styles.card}>
                    <Text>Messenger</Text>
                  </View>
                </ScrollView>
            </ScrollableTabView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    navBg:{
      backgroundColor:"#c11f1e",
      width:Dimensions.get('window').width,
      height:20,
    },
    nav:{
      backgroundColor:"#e32524",
      width:Dimensions.get('window').width,
      height:55,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingTop:15,
      paddingLeft:20,
      paddingRight:10,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
    },
    tabs: {
      height: 45,
      flexDirection: 'row',
      paddingTop: 5,
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: 'rgba(0,0,0,0.05)',
      backgroundColor:"#e32524"
    },
    icon: {
      position: 'absolute',
      top: 0,
      left: 35,
    },
    img: {
      width:375,
      height: 550,
    },
    title:{
      color:"#fff",
      fontSize:20,
    },
    iconContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:60,
    }
  });
  

export default TabMenu;