import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';




 

class ProfileScreen extends React.Component{
  state={
    username: '',
    useraccount:''
    
  }

  _load = async () =>{
    var value = await AsyncStorage.getItem('useraccount');
    if(value!==null){
      this.setState({useraccount: value});
      
      firebase.firestore().collection('user').doc(value).get().then((doc)=>{
        if(doc.exists){
          
         this.setState({username: doc.get('displayname')})
 
        }
 
     })
     
      
    }

     
      
    
    
  }
  
  
componentDidMount(){
this._load();
}

      
    
      
    render(){

      

      

      

        return(
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.user}>
                <Text style = {styles.username}>Username: {this.state.username}</Text>
                <Text style = {styles.useraccount}>Account: {this.state.useraccount}</Text>

                </View>

                <View style={styles.product}>
                  
                </View>
                  
                
                
            </View>

          </SafeAreaView>

          
           
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
  user:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product:{
    flex:3,
  },
  username:{
    fontSize: 20,
    
  },
  useraccount:{
    fontSize: 10,
    
  },

})

  export default ProfileScreen;