/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabMenu from './src/components/TabMenu';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';



export default class App extends Component{
  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
    return (

      <Provider store={store}>
          <View style={{flex:1}}>
            <View>
              <Text>La Liga</Text>
            </View>
            <TabMenu />
          </View>
      </Provider>
    );
  }
}