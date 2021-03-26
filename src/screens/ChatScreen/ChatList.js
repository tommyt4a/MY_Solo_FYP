import React from 'react';
import { Text, View, StyleSheet , Button, FlatList, Image, RefreshControl} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native';

class ChatList extends React.Component{
    state={
        chatroomlist:[],
        useraccount:'',
        refreshing: false,
    }

    _onRefresh() {
      this.setState({refreshing: true});
      firebase.firestore().collection('user')
    .doc(`${this.state.useraccount}`).collection('message')
    .onSnapshot(querySnapshot => {
      const chatroom = [];
  
      querySnapshot.forEach(documentSnapshot => {
        chatroom.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      console.log(chatroom)
        this.setState({chatroomlist: chatroom})
        
        
      })
      
        this.setState({refreshing: false});
      
    }

    getuser=async()=>{
        var value = await AsyncStorage.getItem('useraccount');
        this.setState({useraccount: value})
        console.log(this.state.useraccount)
        
       
    firebase.firestore().collection('user')
    .doc(`${this.state.useraccount}`).collection('message')
    .onSnapshot(querySnapshot => {
      const chatroom = [];
  
      querySnapshot.forEach(documentSnapshot => {
        chatroom.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      console.log(chatroom)
        this.setState({chatroomlist: chatroom})
        
        
      })
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
              <View style={styles.top}>
                <Text style={{fontSize:20}}>聊天室</Text>
              </View>
            <FlatList
      data={this.state.chatroomlist}
      renderItem={({ item }) => (
        <View style={{ height: 120, flex: 1, marginLeft:10, justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChatRoom',{useraccount: this.state.useraccount, chatroomid: item.chatroomid , target: item.target})}>
              <View style={{flexDirection:'row' , width:'100%'}}>
                <Image source={{ uri: item.imageurl }} style={{ width: 100, height: 100 }}/>
              <View style={{marginLeft:10}}>
              <Text>物品名稱: {item.productname}</Text>
                <Text>對象: {item.target}</Text>

              </View>

              </View>
              
            
               

            </TouchableOpacity>
        </View>
        
         
        
      )}
    />
            </ScrollView>
            
            
        )
    }
}

const styles = StyleSheet.create({
  top:{
    marginTop:50,
    alignItems: 'center', 
    justifyContent: 'center',
  },
    button:{
        marginTop:5,
    },
    text:{
        marginTop:250,
        alignItems: 'center', 
        justifyContent: 'center',
    },


})

export default ChatList;