import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen/HomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import storage from '@react-native-firebase/storage';
import firebase from 'firebase';
import 'firebase/firestore';





 

class UploadproductScreen extends React.Component{
  
  state ={
    username: '',
    useraccount:'',
    activeindex: 0,
    token: 0,
    token2:0,
    number: 1,
    refreshing: false,
    
    
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
            <Text style={styles.text}>上架你的物品</Text>
         </View>
        
        
      )

    }else{
      return(
        <ScrollView style={styles.scroll} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
          
          <View style={styles.loginbutton}>
          <Text>請先前往登入</Text>
          <Text>(如已登入，請刷新畫面)</Text>
          <TouchableOpacity style={styles.gobutton} onPress={()=>this.props.navigation.navigate(LoginScreen)}>
            <Text>前往</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

      )
      

    }
  }

loadcheck = async () =>{
  var check = await AsyncStorage.getItem('token');
     
    this.setState({token: check});
    
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
    
      
    }
}

  
_onRefresh() {
  this.setState({refreshing: true});
  this.load().then(() => {
    this.setState({refreshing: false});
  });
}
  

  
  
  componentDidUpdate(){
    if(this.state.number== 0){
      
      this.setState({number: 1})
      this.load();
    }
  }
  
/*componentDidMount(){
  
  const circle = () =>{
    this.loadcheck()
  }
  setInterval(circle,2000)


}*/
     
    render(){
     


      

        return(
          <SafeAreaView style={{flex: 1}}>
            {this.islogin()}
          </SafeAreaView>

          
           
        )
    }
}

const styles = StyleSheet.create({
  scroll:{
    
    marginTop:200
    
  },
  container: {
    marginTop:50,
    flex:1,
    
    
    
   
  },
  logout:{
    color: 'red',
  },
  text:{
    fontSize: 20,
    alignItems: 'center',
    

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

  export default UploadproductScreen;