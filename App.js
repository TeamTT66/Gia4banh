/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,Image,Button,ScrollView, Picker,creactestackNavigator,Text, View} from 'react-native';






type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flexDirection:'column'}}>
      <ScrollView>
         <Text style={{color:'#000000', fontWeight:'bold'}}>Danh mục sản phẩm</Text>
         <View style={{flexDirection:'row',paddingTop:10}}>
            <View style={{width:'50%', paddingLeft:10}}>
                <TouchableOpacity>
                 <Image source={require('./image/audi.png')} styles={{paddingTop:100,fontSize:18}}  />
                  <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Audi</Text>
                </TouchableOpacity>   
            </View>
            <View style={{width:'50%', paddingLeft:15, paddingRight:10}}>
            <TouchableOpacity>
              <Image source={require('./image/bvm.png')} styles={{paddingTop:100,fontSize:18}}  />
              <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>BVM</Text>
              </TouchableOpacity>   
            </View>                  
        </View>         
        <View style={{flexDirection:'row',paddingTop:10}}>
      
            <View style={{width:'50%', paddingLeft:10}}>
            <TouchableOpacity>
                 <Image source={require('./image/chevrolet.png')} styles={{paddingTop:100,fontSize:18}}  />
                  <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>chevrolet</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'50%', paddingLeft:15, paddingRight:10}}>
            <TouchableOpacity>
              <Image source={require('./image/ford.png')} styles={{paddingTop:100,fontSize:18}}  />
              <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Ford</Text>
            </TouchableOpacity>
            </View>          
        </View>
          <View style={{flexDirection:'row',paddingTop:10}}>
      
            <View style={{width:'50%', paddingLeft:10}}>
            <TouchableOpacity>
                 <Image source={require('./image/honda.png')} styles={{paddingTop:100,fontSize:18}}  />
                  <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Honda</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'50%', paddingLeft:15, paddingRight:10}}>
            <TouchableOpacity>
              <Image source={require('./image/hyundai.png')} styles={{paddingTop:100,fontSize:18}}  />
              <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Hyundai</Text>
            </TouchableOpacity>
            </View>          
        </View>
        <View style={{flexDirection:'row',paddingTop:10}}>
      
            <View style={{width:'50%', paddingLeft:10}}>    
            <TouchableOpacity>    
                 <Image source={require('./image/kia.png')} styles={{paddingTop:100,fontSize:18}}  />
                  <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>KIA</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'50%', paddingLeft:15, paddingRight:10}}>
            <TouchableOpacity>
              <Image source={require('./image/mazda.png')} styles={{paddingTop:100,fontSize:18}}  />
              <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Mazda</Text>
            </TouchableOpacity>
            </View>          
        </View>
        <View style={{flexDirection:'row',paddingTop:10}}>
      
            <View style={{width:'50%', paddingLeft:10}}>    
            <TouchableOpacity>    
                 <Image source={require('./image/mercedes.png')} styles={{paddingTop:100,fontSize:18}}  />
                  <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Mercedes</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'50%', paddingLeft:15, paddingRight:10}}>
            <TouchableOpacity>
              <Image source={require('./image/mitsubishi.png')} styles={{paddingTop:100,fontSize:18}}  />
              <Text style={{color:'#000000', fontWeight:'bold',textAlign:'center'}}>Mitsubishi</Text>
            </TouchableOpacity>
            </View>          
        </View>
        </ScrollView>
      </View>

      
    
    );
  }
}


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
