import React from 'react';
import { Text, View, StyleSheet , Button, FlatList,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native';

class ChatList extends React.Component{
    state={
        chatroomlist:[],
        useraccount:'',
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
            <ScrollView>
            <FlatList
      data={this.state.chatroomlist}
      renderItem={({ item }) => (
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
                <Text>{item.target}</Text>

            </TouchableOpacity>
        </View>
        
         
        
      )}
    />
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

export default ChatList;