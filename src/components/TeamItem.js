import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, ActivityIndicator} from 'react-native';
import { thumbnails } from '../Util/Logo';

class TeamItem extends Component{

    render(){
        const { crestURL, name, shortName, code } = this.props.team;
        let logo = thumbnails[code];
        return(
            <TouchableWithoutFeedback>
                <View style={{flexDirection:'row', alignSelf: 'stretch'}}>
                    <View>
                        <Image 
                            style={{flex:1, height: 50, width: 50, alignSelf: 'stretch'}} 
                            source={logo} 
                            resizeMode="contain"/>
                    
                    </View>
                    <View>
                        <Text>{ name }</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TeamItem;