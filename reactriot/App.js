import React, { Component } from 'react'
import { TabNavigator } from "react-navigation"
import {
  View,
  StyleSheet,
  Dimensions
} from "react-native"
import Login from './Login'
import Posts from './Posts'

const MainScreenNavigator = TabNavigator({
  Initial: { screen: Login },
 Posts : { screen: Posts}
  
}, {
  navigationOptions: {
  tabBarVisible: false,

 },
  swipeEnabled:false,

 
});

 export default class App extends Component{

 

  render() {
   
    return(
    <View style={styles.container}>
    
      <MainScreenNavigator style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: "center",
    //justifyContent: "center",
    backgroundColor:"#7EFFDB"
  },
 
  });

