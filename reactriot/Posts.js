import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

export default class Posts extends Component{

static navigationOptions = {
    tabBarLabel: 'Posts',
  };

 render() {
 	const { navigate } = this.props.navigation

 		return(
 				<View style={styles.container}>
 				<Text>Coming Soon</Text>
 				</View>
 				 		)
 	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#7EFFDB"
  },
 
  });
