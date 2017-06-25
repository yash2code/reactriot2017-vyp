import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  LayoutAnimation
} from "react-native";
import {
  Kaede
} from 'react-native-textinput-effects';
import Button from 'react-native-micro-animated-button';

const colors = {
  blue: '#4285f4',
  gray: '#d8d8d8',
  grayDark: '#444',
  green: '#0f9d58',
  red: '#db4437',
  white: 'white'
};
export default class Login extends Component{

constructor(props) {
  super(props);
  console.log(this.props)

  this.state = {
    success:true,
    name:'',
    email:''
  };
}



componentWillMount() {
    StatusBar.setHidden(true, 'fade');
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

fun(){
  var name=this.state.name
  var email = this.state.email
 if(typeof name==='string' && name.length>0 && email.length>10 )
  {console.log('success');}
else
{this.setState({success: false})}
}

 

  render() {
    const {success} = this.state
    const {navigate} = this.props.navigation
    console.log(navigate)
    return(
    <View >
    
   <Kaede
    style={styles.input}     
    label={'Name'}
    autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{ color: 'white',backgroundColor:'#9896F1' }}
    inputStyle={{ color: '#EDB1F1' }}
    borderColor={'red'}
    onChangeText={(name) => this.setState({name})}
  />
   <Kaede
    style={styles.inputmail}     
    label={'Email'}
     autoCapitalize={'none'}
    autoCorrect={false}
    labelStyle={{ color: 'white',backgroundColor:'#9896F1' }}
    inputStyle={{ color: '#EDB1F1' }}
    keyboardType="email-address"
    onChangeText={(email) => this.setState({email})}
  />
  <View style={{alignItems: "center"}}>
   <Button
          
          foregroundColor={colors.blue}
          label="Enter"
          noFill
          onPress={() => {
            this.fun();
            const success = this.state.success;
            if(success)
            {this.b8.success()}
            else{this.b8.error();
            this.setState({success: false})}
          }}
          onSecondaryPress={() => {
            this.b8.reset();
           // this.setState({ success: false });
          }}
          ref={ref => (this.b8 = ref)}
         
          successColor={colors.blue}
          successIconColor={colors.blue}
          successIconName="thumbs-up"
          errorIconName="remove"
          errorIconColor={colors.red}
          onSuccess={() => this.props.navigation.navigate('Posts')}
        />

        {success===false &&
          <Text style={{ color:  '#EDB1F1', marginLeft: 10 }}>
            Oops! Please fill the form 
          </Text>}
  
    </View>
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