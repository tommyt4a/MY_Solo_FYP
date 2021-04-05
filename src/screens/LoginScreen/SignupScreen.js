import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView  } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from '../HomeScreen/HomeScreen';



import firebase from 'firebase';
import 'firebase/firestore';






export default class SignupScreen extends React.Component {
  state={
    account:'',
    password:'',
    displayname:'',
    hkid:''
  }

  
  

  signupuser = () => {
    if(this.state.displayname === '' || this.state.account === ''|| this.state.password === ''|| this.state.confirmpassword === ''|| this.state.hkid === '') 
    {
      Alert.alert('請輸入所有欄位')
    } 
    else if(this.state.password!=this.state.confirmpassword) {
      Alert.alert('請確認密碼')
    }
    else if (this.state.account.length < 8){
    Alert.alert('帳號長度不足')
    }
    else if (this.state.password.length < 6){
      Alert.alert('密碼長度不足')
    }
    
    else {firebase.firestore().collection('user').doc(this.state.account).get().then((doc) => {
      if (doc.exists){
        Alert.alert("帳號己存在");
    }
      else {firebase.firestore().collection('user').where("hkid", '==',this.state.hkid ).get().then(querySnapshot => {
        if (querySnapshot.size!=0){
          Alert.alert("身份證己存在");
        }else {firebase.firestore().collection('user').where("displayname", '==',this.state.displayname ).get().then(querySnapshot => {
          if (querySnapshot.size!=0){
            Alert.alert("顯示名稱己存在");
          }
        else{
          firebase.firestore().collection('user').doc(this.state.account).set({
         
         displayname: this.state.displayname,
         password: this.state.password,
         hkid: this.state.hkid,
       
     
       }).then(() => {
        this.textInput1.clear()
    this.textInput2.clear()
    this.textInput3.clear()
    this.textInput4.clear()
    this.textInput5.clear()
    
         
         Alert.alert("成功註冊，請登入");

       });};
    })}})
    


  }})}}
  
  



  

  render(){
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView >
      <View style={styles.container}>
         
        <Text style={styles.logo}>註冊</Text>
        <View style={styles.inputView} >
          <TextInput  
          ref={input => { this.textInput1 = input }}
            style={styles.inputText}
            placeholder="顯示名稱..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({displayname:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
          ref={input => { this.textInput2 = input }}
            style={styles.inputText}
            placeholder="帳號(最少8個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({account:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            ref={input => { this.textInput3 = input }}
            style={styles.inputText}
            placeholder="密碼(最少6個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
          ref={input => { this.textInput4 = input }}
            style={styles.inputText}
            placeholder="確認密碼(最少6個字元)..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({confirmpassword:text})}
            maxLength={20}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
          ref={input => { this.textInput5 = input }}
            style={styles.inputText}
            placeholder="香港身份證號碼..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({hkid:text})}
            
            maxLength={11}/>
        </View>
        
        
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.signupuser()}>
          <Text style={styles.loginText}>註冊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(LoginScreen)}>
          <Text style={styles.signupText}>返回登入頁面</Text>
        </TouchableOpacity>
        

  
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
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
    marginTop:30,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"#003f5c"
  },
  scrollview:{
    
    
  },
});
