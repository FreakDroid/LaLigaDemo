import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, ActivityIndicator} from 'react-native';
import { thumbnails } from '../Util/Logo';
import { Actions } from 'react-native-router-flux';

class TeamItem extends Component{

    onPress(){
        Actions.teamDetail();
    }

    render(){
        const { crestURL, name, shortName, code } = this.props.team;
        let logo = thumbnails[code];
        return(
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{flexDirection:'row', alignSelf: 'stretch', padding:5}}>
                    <View>
                        <Image 
                            style={{flex:1, height: 50, width: 50, alignSelf: 'stretch'}} 
                            source={logo} 
                            resizeMode="contain"/>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', padding:5 }}>
                        <Text>{ name }</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TeamItem;