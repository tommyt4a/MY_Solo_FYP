import React from 'react';
import { Alert } from 'react-native';
import { Text, View, StyleSheet , Button, ScrollView, RefreshControl} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatList from './ChatList'
import ChatRoom from './ChatRoom'
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from 'firebase';
import 'firebase/firestore';

class ChatScreen extends React.Component{
    state={
        useraccount:'',
        uername:'',
        token:'',
        refreshing: false,
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.getuser().then(() => {
          this.setState({refreshing: false});
        });
      }
 

    getuser = async () =>{
        var check = await AsyncStorage.getItem('token');
        console.log(check)
        this.setState({token: check})
        console.log(this.state.token)
    }

    checklogin = async () =>{
        if(this.state.token != 1){
            Alert.alert('請先到個人資料登入，如已登入，請刷新畫面')

        }else if(this.state.token == 1){
            var value = await AsyncStorage.getItem('useraccount');
            console.log(value)
    if(value!=null){
      
      this.setState({useraccount: value});
        }

        firebase.firestore().collection('user').doc(value).get().then((doc)=>{
            if(doc.exists){
              
             this.setState({username: doc.get('displayname')})
             console.log(this.state.username)
            }
     
         })

         this.props.navigation.navigate('ChatList', {username: this.state.username , useraccount: this.state.useraccount})
    }
    }

    componentDidMount(){
        this.getuser()
    }

    render(){
        return(
            <ScrollView style={styles.scroll1} refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }>
            <View style={{flex:1}}>
            <View style={styles.text}>
                <Text>請小心你的個人資料</Text>
                <View style={{marginTop:5,}}>
                <Button title='開始聊天' style={styles.button} onPress={()=>this.checklogin()}>
              
              </Button>

                </View>
               
                
            </View>

            </View>
            
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        marginTop:5,
    },
    text:{
        marginTop:250,
        alignItems: 'center', 
        justifyContent: 'center',
    },


})

export default ChatScreen;
