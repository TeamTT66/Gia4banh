/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Slideshow from 'react-native-image-slider-show';
import {createStackNavigator} from 'react-navigation'
import Trangchu from './Components/Trangchu'
import Danhmucsp from './Components/Danhmucsp'
import Gialanbanh from './Components/Gialanbanh'
export default class App extends Component {
  static navigationOptions = { header: null }
  render() {
    return (
        <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Trangchu: Trangchu,
  Gialanbanh: Gialanbanh,
  Danhmucsp: Danhmucsp,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
