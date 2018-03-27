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
                    <Image style={{width: 100, height: 100}} source={logo} />
                    <Text>{ name }</Text>
                    <Text>{ shortName }</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TeamItem;