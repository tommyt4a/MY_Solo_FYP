import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen/HomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import firebase from 'firebase';
import 'firebase/firestore';





 

class ProfileScreen extends React.Component{
  
  state ={
    username: '',
    useraccount:'',
    activeindex: 0,
    token: 0,
    token2:0,
    number: 1,
    
    
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

  islogin = () =>{
    if(this.state.token==1){
      return(

        <View style={styles.container}>
            <View style={styles.settinghead}>
                <TouchableOpacity style={styles.settingbutton} onPress={() => this.logout()}>
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
        
        
      )

    }else{
      return(
        <View style={styles.loginbutton}>
          <Text>請先前往登入</Text>
          <TouchableOpacity style={styles.gobutton} onPress={()=>this.props.navigation.navigate(LoginScreen)}>
            <Text>前往</Text>
          </TouchableOpacity>
        </View>

      )
      

    }
  }

loadcheck = async () =>{
  var check = await AsyncStorage.getItem('token');
     
    this.setState({token: check});
    console.log(check)
}
  

  load = async () =>{
    
      var value = await AsyncStorage.getItem('useraccount');
    if(value!==null){
      
      this.setState({useraccount: value});
      
      firebase.firestore().collection('user').doc(value).get().then((doc)=>{
        if(doc.exists){
          
         this.setState({username: doc.get('displayname')})
 
        }
 
     })
     var check = await AsyncStorage.getItem('token');
     
    this.setState({token: check});
    console.log(check)
      
    }
}

  

  logout = async () =>{
    await AsyncStorage.setItem('token','0')
    this.setState({number: 0})
    console.log(this.state.number)
    //this.props.navigation.navigate(HomeScreen)
  }

  
  
  componentDidUpdate(){
    if(this.state.number== 0){
      
      this.setState({number: 1})
      this.load();
    }
  }
  
componentDidMount(){
  
  const circle = () =>{
    this.loadcheck()
  }
  setInterval(circle,3000)


}
     
    render(){
     


      

        return(
          <SafeAreaView style={{flex: 1}}>
            {this.islogin()}
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
  loginbutton:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gobutton:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  }

})

  export default ProfileScreen;