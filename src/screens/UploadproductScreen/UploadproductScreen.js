import React, { useEffect , useState} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Platform, TextInput, } from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen/HomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import storage from '@react-native-firebase/storage';

import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import 'firebase/firestore';

function MyComponent () {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};


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
    }
  };

  return (
    <View style={styles.imageset}>
      
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 150 }} />}
      <View style={{marginTop: 10, marginBottom:10}}>
        <Button title="請選擇你的圖片"  onPress={pickImage} />
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
    productprive:'',
    productdescription:'',
    
    
  }

  

  

  

  

  islogin = () =>{
    if(this.state.token==1){
      return(
        <ScrollView>
          <View style={styles.container}>
          <ImagePickerExample/>

          <MyComponent/>

          <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="物品名稱..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productname:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="價錢..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productprive:text})}/>
        </View>
        <View style={styles.inputView2} >
          <TextInput  
            multiline = {true}
            style={styles.inputText}
            placeholder="物品描述..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({roductdescription:text})}/>
        </View>
         </View>

        </ScrollView>

        
        
        
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
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputView2:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:100,
    marginBottom:20,
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