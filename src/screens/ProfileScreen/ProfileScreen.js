import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';




 

class ProfileScreen extends React.Component{
  
  state ={
      username: '',
    useraccount:'',
    activeindex: 0
    
  }

  segmentClicked = (index)=>{
    this.setState({activeindex: index})
  }

  rendersection =()=>{
    if(this.state.activeindex == 0)
    {
      return(
        <View>
          <Text>我的物品</Text>
        </View>
      )
    }else if(this.state.activeindex == 1)
    {
      return(
        <View>
          <Text>我的收藏</Text>
        </View>
      )
    }
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
              <View style={styles.settinghead}>
                <TouchableOpacity style={styles.settingbutton}>
                  <Text style={styles.logout}>登出</Text>
                </TouchableOpacity>

              </View>
                <View style={styles.user}>
                <Text style = {styles.username}>Username: {this.state.username}</Text>
                <Text style = {styles.useraccount}>Account: {this.state.useraccount}</Text>

                </View>

              <View style={{flex:4}}>
                <View style={styles.button}>
                  
                  <TouchableOpacity 
                  transparent 
                  onPress ={()=> this.segmentClicked(0)}
                  active={this.state.activeindex==0}

                  
                  >
                    <Text style={[this.state.activeindex == 0 ? {color:'black'} : {color:'grey'}]}>我的物品</Text>

                  </TouchableOpacity>

                  <TouchableOpacity 
                  transparent 
                  onPress ={()=> this.segmentClicked(1)}
                  active={this.state.activeindex==1}>
                  <Text style={[this.state.activeindex == 1 ? {color:'black'} : {color:'grey'}]}>我的收藏</Text>

                  </TouchableOpacity>
                  </View>
                  {this.rendersection()}

              </View>
                
                  
                
                
            </View>

          </SafeAreaView>

          
           
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex:1,
    
    
    
   
  },
  logout:{
    color: 'red',
  },
  settingbutton:{
    marginLeft: 300
    

  },
  user:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderRightColor: 'red',
    borderLeftColor: 'red',
    borderTopColor: 'red',
    borderBottomColor: 'red',

    
  },
  username:{
    fontSize: 20,
    
  },
  useraccount:{
    fontSize: 10,
    
  },

})

  export default ProfileScreen;