import React, { useContext } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import LoginScreen from './LoginScreen'
import firebase from 'firebase';
import 'firebase/firestore';


class ForgotScreen extends React.Component{
    state={
        password:"",
        hkid:"",
      }

      forgotpw = () => {
        if(this.state.hkid === '' )
        {
           Alert.alert('請輸入香港身份證號碼')     
        } else
        {
            firebase.firestore().collection('user').where("hkid", '==',this.state.hkid ).get().then(querySnapshot => {
                if (querySnapshot.size===1){
                    firebase.firestore().collection('user').where("hkid", '==',this.state.hkid ).get().then(querySnapshot => {
                        querySnapshot.forEach(documentSnapshot => {
                            Alert.alert("你的密碼為:",documentSnapshot.data().password);
                            console.log(documentSnapshot.data().password)
                        })
                        
                        

                    })
                    }})

        }
    }

    render(){
        return(
            <View style={styles.container}>
                
                <Text style={styles.text}>請輸入你的香港身份證號碼以獲得密碼</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="香港身份證..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({hkid:text})}/>
                </View>
                
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.forgotpw()}>
                    <Text style={styles.loginText}>確認</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate(LoginScreen)}>
                    <Text style={styles.signupText}>返回登入頁面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
        marginBottom:20,

    },

    inputView:{
        width:"50%",
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
})