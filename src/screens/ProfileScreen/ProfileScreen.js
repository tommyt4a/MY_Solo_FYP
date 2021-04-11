import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, FlatList} from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen/HomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import { EventRegister } from 'react-native-event-listeners'
import Listfavourite from './Listfavourite'
import Listdetail from './Listdetail'
import threed from '../3D/threed'

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'


 

class ProfileScreen extends React.Component{
  
  state ={
    username: '',
    useraccount:'',
    activeindex: 0,
    token: 0,
    token2:0,
    number: 1,
    refreshing: false,
    product: [],
    favourite:[],
    
    
  }

  

  

  segmentClicked = (index)=>{
    this.setState({activeindex: index})
  }



  rendersection =()=>{
    if(this.state.activeindex == 0)
    {
      return(
        <ScrollView style={styles.scroll1} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <View>
        <FlatList
      data={this.state.product}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity style={{borderWidth:1, alignItems: 'center',
  justifyContent: 'center', marginTop:5}} onPress={()=>this.props.navigation.navigate('Listdetail' , {productname: item.productname 
            , productprice: item.productprice , producttype: item.producttype , productdescription: item.productdescription , getmethod: item.getmethod 
            , imageurl: item.imageurl, productid: item.productid , createat: item.createat, ownername: item.ownername})}>
           <View style={styles.fullbutton}>
            

            
           <View style={styles.halfbutton1}>
             <Image source={{ uri: item.imageurl }} style={{ width: 100, height: 100 }}/>
           </View>
           
          <View style={{flexDirection:'row'}}>
          <View style={styles.halfbutton2}>
          <Text>交易方式: </Text>
          <Text>物品種類: </Text>
          <Text >物品名稱: </Text>
          <Text>價錢: </Text>
          
          <Text>描述: </Text>
         
          </View>
          
           <View style={styles.halfbutton3}>
          <Text>{item.getmethod}</Text>
          <Text>{item.producttype}</Text>
          <Text numberOfLines= {1}>{item.productname}</Text>
          <Text>${item.productprice}</Text>
          
          <Text numberOfLines= {1}>{item.productdescription}</Text>
          </View>


          </View>

            

          </View>
          </TouchableOpacity>
          
        </View>
        
        
        
      )}
    />
          
        </View>
       </ScrollView>

        
      )
    }else if(this.state.activeindex == 1)
    {
      return(
        <ScrollView style={styles.scroll1} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <View>
        <FlatList
      data={this.state.favourite}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity style={{borderWidth:1, alignItems: 'center',
  justifyContent: 'center', marginTop:5}} onPress={()=>this.props.navigation.navigate('favouritedetail' , { productid: item.productid
            , useraccount: item.useraccount, ownername: item.ownername , productid: item.productid, productname: item.productname, ownername: item.ownername })}>
           <View style={styles.fullbutton}>
            

            
           <View style={styles.halfbutton1}>
             <Image source={{ uri: item.imageurl }} style={{ width: 100, height: 100 }}/>
           </View>
           
          <View style={{flexDirection:'row'}}>
          <View style={styles.halfbutton2}>
          <Text>交易方式: </Text>
          
          <Text >物品名稱: </Text>
          <Text>價錢: </Text>
          <Text>賣家: </Text>
          <Text>描述: </Text>
         
          </View>
          
           <View style={styles.halfbutton3}>
          <Text>{item.getmethod}</Text>
          
          <Text numberOfLines= {1}>{item.productname}</Text>
          
          <Text>${item.productprice}</Text>
          <Text>{item.ownername}</Text>
          
          <Text numberOfLines= {1}>{item.productdescription}</Text>
          </View>


          </View>

            

          </View>
          </TouchableOpacity>
          
        </View>
        
        
        
      )}
    />
          
        </View>
       </ScrollView>

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
        
        
        <ScrollView style={styles.scroll} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
          
          <View style={styles.loginbutton}>
          <Text>請先前往登入</Text>
          <Text>(如已登入，請向下拉動刷新畫面)</Text>
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

  

  logout = async () =>{
    await AsyncStorage.setItem('token','0')
    this.setState({number: 0})
    this.setState({useraccount:''})
    this.setState({product:[]})
    this.setState({favourite:[]})
    
    
    this.props.navigation.navigate(HomeScreen)
  }

  loadfavourite= async()=>{
    var value = await AsyncStorage.getItem('useraccount');
    console.log(value)
    
    firebase.firestore()
  .collection('user').doc(value).collection('favouriteproduct').where('useraccount','==',value)
  .onSnapshot(querySnapshot => {
    const getfavourite = [];

    querySnapshot.forEach(documentSnapshot => {
      getfavourite.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });
    console.log(getfavourite)
      this.setState({favourite: getfavourite})
    })
    

  }
  
  componentDidUpdate(){
    
    if(this.state.number== 0){
      
      this.setState({number: 1})
      this.load();
      this.loadproduct();
    }
    if(this.state.refreshing===true){
      
      this.loadproduct();
      this.loadfavourite()
    }
  }
  
componentDidMount(){
  
  this.load()
  
  this.loadproduct()

  this.loadfavourite()
    
  

}

loadproduct = async () =>{
  var value = await AsyncStorage.getItem('useraccount');
    if(value!==null){
      
      this.setState({useraccount: value});}

  this.subscriber = firebase.firestore()
  .collection('product').where("owneraccount", '==', this.state.useraccount)
  .onSnapshot(querySnapshot => {
    const getproduct = [];

    querySnapshot.forEach(documentSnapshot => {
      getproduct.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });
      this.setState({product: getproduct})
    })
}





_onRefresh() {
  this.setState({refreshing: true});
  this.load().then(() => {
    this.setState({refreshing: false});
  });
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
  scroll1:{

  },
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
  },
  fullbutton:{
    flexDirection: 'row',
    flex: 1 ,
    marginTop:10,
    
    
  },
  halfbutton1:{
    
    marginLeft:20,
    justifyContent: 'center',
    

  },

  halfbutton2:{
    alignItems: 'flex-end', 
    justifyContent: 'center',
    width:100,
    

  },
  halfbutton3:{
    alignItems: 'flex-start', 
    justifyContent: 'center',
    width:100,
    
    
  },

})

  export default ProfileScreen;