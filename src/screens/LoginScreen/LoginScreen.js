import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import SignupScreen from './SignupScreen';
import ForgotScreen from './ForgotScreen';
import HomeScreen from '../HomeScreen/HomeScreen'

import firebase from 'firebase';
import 'firebase/firestore';


 class LoginScreen extends React.Component {
  state={
    account:"",
    password:""
  }

  loginuser = () =>{
    if(this.state.account === '' || this.state.password === ''){
      Alert.alert('請輸入所有欄位');
    }else{firebase.firestore().collection('user').doc(this.state.account).get().then((doc) => {
      if (!doc.exists){
        Alert.alert("帳號不存在，請重新輸入");
    }else (firebase.firestore().collection('user').doc(this.state.account).get().then((doc) =>{
      {
        if(doc.get('password')!=this.state.password){
          Alert.alert("密碼錯誤，請重新輸入");

        }else{
          
          
          this.props.navigation.navigate(HomeScreen)
          
        }
        
      }
    }))
        
    
  })}

    }
  

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>TradeYourSelf</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Account..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({account:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(ForgotScreen)}>
          <Text style={styles.forgot}>忘記密碼?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.loginuser()}>
          <Text style={styles.loginText}>登入</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(SignupScreen)}>
          <Text style={styles.signupText}>註冊</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#a9a9a9",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  forgot:{
    color:"#003f5c",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"#003f5c"
  }
});

export default LoginScreen;

