import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';



 

class ProfileScreen extends React.Component{
  state={
    useraccount:''
    
  }

  _load = async () =>{
    var value = await AsyncStorage.getItem('useraccount');
    if(value!==null){
      this.setState({useraccount: value});
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

                </View>

                <View style={styles.product}>
                  
                </View>
                  
                <Text>aaa{this.state.useraccount}</Text>
                
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

})

  export default ProfileScreen;