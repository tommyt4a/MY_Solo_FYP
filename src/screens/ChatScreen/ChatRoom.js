import React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fire from './Fire'
import firebase from 'firebase';
import 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component{
    state={
        messages:[],
        username:'',
        useraccount:'',
    }


    get user() {
        return {
          name: this.state.username,
          _id: Fire.shared.uid,
        };
      }
   
      componentDidMount() {
        const {username, useraccount  } = this.props.route.params
        this.setState({username: username})
        this.setState({useraccount: useraccount})
        Fire.shared.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        );
      }

      componentWillUnmount() {
        Fire.shared.off();
      }

    

    

    render(){
    ;
        return(
            <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
            
        )}
    
}

const styles = StyleSheet.create({
   

})

export default ChatRoom;