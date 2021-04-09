/*import React from 'react';
import { Text, View, StyleSheet , Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';

class Fire extends React.Component{
    state={
        username:'',
        useraccount:'',
        messages:[]
    }

    get uid(){
        var value = AsyncStorage.getItem('useraccount');
        return value

    }

    get ref() {
        return firebase.database().ref('messages');
      }
    
      parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
          _id,
          timestamp,
          text,
          user,
        };
        return message;
      };
    
      on = callback =>
        this.ref
          .limitToLast(20)
          .on('child_added', snapshot => callback(this.parse(snapshot)));
    
      get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
      }
      // send the message to the Backend
      send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
            timestamp: this.timestamp,
          };
          this.append(message);
        }
      };
    
      append = message => this.ref.push(message);
    
      // close the connection to the Backend
      off() {
        this.ref.off();
      }
    
      
    

    

    render(){
        return(
            <View style={{flex:1}}>
            <View style={styles.text}>
                
                
                
            </View>

            </View>
            
        )
    }
}
Fire.shared = new Fire();

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

export default Fire;*/