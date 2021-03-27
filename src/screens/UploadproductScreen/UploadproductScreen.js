import React, { useEffect , useState, useRef} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Platform, TextInput, } from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen/HomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import storage from '@react-native-firebase/storage';
import ActionSheet from "react-native-actions-sheet";
import productview from './productview'
import { EventRegister } from 'react-native-event-listeners'
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  
} from 'react-native-popup-menu';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import 'firebase/firestore';







 function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      AsyncStorage.setItem('productpreviewpicture',result.uri)

    }
  }

  return (
    <View style={styles.imageset}>
      
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 150 }} />}
      <View style={{marginTop: 10, marginBottom:10}}>
        <Button title="請選擇物品的圖片"  onPress={pickImage} />
      </View>
      
    </View>
  );
}









class UploadproductScreen extends React.Component{
  
  state ={
    username: '',
    useraccount:'',
    activeindex: 0,
    token: 0,
    token2:0,
    number: 1,
    refreshing: false,
    productname:'',
    productprice:'',
    productdescription:'',
    producttype:'',
    getmethod:'',
    loginstate:'',
    
    
  }

  

  islogin = () =>{

    //if(this.state.token==1){
      return(
        <MenuProvider>
        <ScrollView>
          <View style={styles.container}>
          <ImagePickerExample/>
          <View style={{flexDirection:'row'}}>
          <Menu >
  <MenuTrigger text='選擇物品種類:  '  />
  <MenuOptions  >
    <MenuOption onSelect={()=>this.setState({producttype: '家具'})} text='家具'/>
    <MenuOption onSelect={()=>this.setState({producttype: '電器'})} text='手機'/>
    
    <MenuOption onSelect={()=>this.setState({producttype: '電腦'})} text='電腦' />
    <MenuOption onSelect={()=>this.setState({producttype: '手機'})} text='手機' />
    <MenuOption onSelect={()=>this.setState({producttype: '模型'})} text='模型' />
    <MenuOption onSelect={()=>this.setState({producttype: '玩具'})} text='玩具' />
    <MenuOption onSelect={()=>this.setState({producttype: '手作'})} text='手作' />
    <MenuOption onSelect={()=>this.setState({producttype: '書本'})} text='書本' />
    <MenuOption onSelect={()=>this.setState({producttype: '光碟'})} text='光碟' />
    <MenuOption onSelect={()=>this.setState({producttype: '衣服'})} text='衣服' />
    <MenuOption onSelect={()=>this.setState({producttype: '鞋類'})} text='鞋類' />
    <MenuOption onSelect={()=>this.setState({producttype: '飾物'})} text='飾物' />
  </MenuOptions>
  
</Menu>
<Text>{this.state.producttype}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Menu >
  <MenuTrigger text='選擇交易方式:  ' />
  <MenuOptions  >
    <MenuOption onSelect={()=>this.setState({getmethod: '面交'})} text='面交'/>
    <MenuOption onSelect={()=>this.setState({getmethod: '郵寄'})} text='郵寄'/>
    
    <MenuOption onSelect={()=>this.setState({getmethod: '可議'})} text='可議' />
    
  </MenuOptions>
  
</Menu>
<Text>{this.state.getmethod}</Text>
          </View>
         
          
          <View style={styles.inputView} >
          <TextInput  
          ref={input => { this.textInput1 = input }}
            style={styles.inputText}
            placeholder="物品名稱..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productname:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            ref={input => { this.textInput2 = input }}
            style={styles.inputText}
            placeholder="價錢..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productprice:text})}/>
        </View>
        <View style={styles.inputView2} >
          <TextInput  
           ref={input => { this.textInput3 = input }}
            multiline = {true}
            style={styles.inputText}
            placeholder="物品描述..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productdescription:text})}/>
        </View>
        <View style={styles.submitbutton}>
          <TouchableOpacity style={styles.submit} onPress={()=>this.submitproduct()}  >
            <Text>預覽</Text>

          </TouchableOpacity>
        </View>
         </View>

        </ScrollView>
        
        </MenuProvider>
        
        
        
      )

   // }
    /*else{
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
      

    }*/
  }

  checkloginwhenbutton = async()=>{
    var check = await AsyncStorage.getItem('token');
     this.setState({token: check});
     if(this.state.token!== '1'){
       Alert.alert('請先前往個人資料頁面登入')
     }
  }

  submitproduct = () =>{
    this.checkloginwhenbutton()
    if(this.state.productname === '' || this.state.productprice === ''||this.state.producttype === ''||this.state.getmethod === '')
    {
      Alert.alert('請最少輸入物品種類，交易方式，物品名稱，價錢');
    }else if(isNaN(this.state.productprice)){
      Alert.alert("請於價錢欄位輸入數字");
    }else{
      this.textInput1.clear()
    this.textInput2.clear()
    this.textInput3.clear()
    this.setState({producttype: ''})
    this.setState({getmethod: ''})
    this.props.navigation.navigate('productview' , 
            {productname: this.state.productname , productdescription: this.state.productdescription , productprice: this.state.productprice , producttype: this.state.producttype , 
            getmethod: this.state.getmethod })

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
    
    if(this.state.loginstate== 0){
      
      this.setState({loginstate: 1})
      this.load();
    }
  }
  
componentDidMount(){
  

}

componentWillUnmount() {
  this.listener = EventRegister.addEventListener('uselogin',(loginstate) =>{
    this.setState({loginstate: loginstate})
    console.log(loginstate)
})
}


componentWillUnmount() {
  EventRegister.removeEventListener(this.listener)
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
  
  submit:{
    
    borderColor:"#fb5b5a",
   
    borderWidth:1,
    height:40,
    width:50,
    alignItems:"center",
    justifyContent:"center",
    
   
  },
  submitbutton:{
    marginTop:10,
    marginLeft: 300,

  },
  typebutton:{
    marginBottom:10,

  },
  inputView:{
    marginTop:10,
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    
    justifyContent:"center",
    padding:20
  },
  inputView2:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:100,
    marginTop:10,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:100,
    color:"#003f5c"
  },
  imageset:{
     
    alignItems: 'center', 
    justifyContent: 'center'

  },
  scroll:{
    
    marginTop:200
    
  },
  container: {
    marginTop:50,
    flex:1,
    alignItems: 'center', 
    
    
    
   
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