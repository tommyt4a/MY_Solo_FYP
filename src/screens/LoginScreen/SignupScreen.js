import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import LoginScreen from './LoginScreen';

import firebase from 'firebase';
import 'firebase/firestore';





export default class SignupScreen extends React.Component {
  state={
    account:"",
    password:"",
    displayname:"",
    hkid:""
  }

  

  signupuser = () => {
    if(this.state.displayname === '' || this.state.account === ''|| this.state.password === ''|| this.state.confirmpassword === ''|| this.state.hkid === '') 
    {
      Alert.alert('請輸入所有欄位')
    } else if(this.state.password!=this.state.confirmpassword) {
      Alert.alert('請確認密碼')
    }else if (this.state.account.length < 8){
    Alert.alert('帳號長度不足')
    }else if (this.state.password.length < 6){
      Alert.alert('密碼長度不足')
    }else if (this.state.displayname.length < 8){
      Alert.alert('顯示名稱長度不足')
    }else{
     firebase.firestore().collection('user').add({
    account: this.state.account,
    displayname: this.state.displayname,
    password: this.state.password,
    hkid: this.state.hkid,
  

  }).then(() => {
    Alert.alert('成功註冊');
  });

  
  };


  }
  



  

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>SignUp</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="顯示名稱(最少8個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({displayname:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="帳號(最少8個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({account:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="密碼(最少6個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="確認密碼(最少6個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({confirmpassword:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="香港身份證號碼..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({hkid:text})}
            
            maxLength={11}/>
        </View>
        
        
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.signupuser()}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(LoginScreen)}>
          <Text style={styles.signupText}>Back To Login</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
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
