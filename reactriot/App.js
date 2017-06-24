import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {
  Kaede
} from 'react-native-textinput-effects';



 export default class App extends Component{

 

  render() {
    return(
    <View style={styles.container}>
   <Kaede
    style={styles.input}     
    label={'Name'}
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{ color: 'white',backgroundColor:'#9896F1' }}
    inputStyle={{ color: '#EDB1F1' }}
        borderColor={'red'}
  />
   <Kaede
    style={styles.inputmail}     
    label={'Email'}
     autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{ color: 'white',backgroundColor:'#9896F1' }}
    inputStyle={{ color: '#EDB1F1' }}
    keyboardType="email-address"
  />
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
  input: {

    marginTop:250,
  },
   inputmail: {

    marginTop:5
  }
  
  });

