import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import { thumbnails } from '../Util/Logo';

class TeamItem extends Component{

    render(){
        const { crestURL, name, shortName, code } = this.props.team;
        let logo = thumbnails[code];
        return(
            <TouchableWithoutFeedback>
                <View>
                    <Image style={{flex:1, height: 100, width: 100, alignSelf: 'stretch',}} source={logo} resizeMode="contain"/>
                    <Text>{ name }</Text>
                    <Text>{ shortName }</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TeamItem;