import React, { useEffect , useState, useRef} from 'react';
import { Text, View, Button, Alert , SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Platform, TextInput, } from 'react-native';

import storage from '@react-native-firebase/storage';
import Listdetail from './Listdetail'
import AsyncStorage from '@react-native-async-storage/async-storage';


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
import 'firebase/firebase-storage'


function ImagePickerExample() {
    const [image, setImage] = useState(null);
    
    useEffect(() => {
      
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
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
       await AsyncStorage.setItem('updateproductpreviewpicture',result.uri)
       console.log(result.uri)
  
      }
    }
  
    return (
      <View style={styles.imageset}>
        
        {image && <Image source={{ uri: image }} style={{ width: 250, height: 150 }} />}
        <View style={{marginTop: 10, marginBottom:10}}>
            <Text>如果不選擇圖片，可以跳過選擇圖片</Text>
          <Button title="請選擇物品的圖片"  onPress={pickImage} />
        </View>
        
      </View>
    );
  }


class modifyproduct extends React.Component{
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
        imageurl:'',
        productid:'',
      }

      

      componentDidMount(){
        const {productname , productdescription , productprice, producttype , 
            getmethod , imageurl , productid  } = this.props.route.params   
        this.setState({productname: productname}) 
        this.setState({productdescription: productdescription})
        this.setState({productprice: productprice})
        this.setState({producttype: producttype})
        this.setState({getmethod: getmethod}) 
        this.setState({imageurl: imageurl})
        this.setState({productid: productid}) 

    }

    render(){
        
        
            
        return(
           
        <MenuProvider>
        <ScrollView>
          <View style={styles.container}>
          <ImagePickerExample/>
          <View style={{flexDirection:'row'}}>
          <Menu >
  <MenuTrigger text='選擇物品種類:  '  />
  <MenuOptions  >
    <MenuOption onSelect={()=>this.setState({producttype: '電腦'})} text='電腦'/>
    <MenuOption onSelect={()=>this.setState({producttype: '手機'})} text='手機'/>
    
    <MenuOption onSelect={()=>this.setState({producttype: '家電'})} text='家電' />
    <MenuOption onSelect={()=>this.setState({producttype: '玩具'})} text='玩具' />
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
            onChangeText={text => this.setState({productname: text})}
            value={this.state.productname}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            ref={input => { this.textInput2 = input }}
            style={styles.inputText}
            placeholder="價錢..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productprice:text})}
            value={this.state.productprice}/>
        </View>
        <View style={styles.inputView2} >
          <TextInput  
           ref={input => { this.textInput3 = input }}
            multiline = {true}
            style={styles.inputText}
            placeholder="物品描述..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productdescription:text})}
            value={this.state.productdescription}/>
        </View>
        <View style={styles.twobutton}>
          <View style={styles.submitbutton}>
          <TouchableOpacity style={styles.submit} onPress={()=>this.props.navigation.navigate('updateproductview' , 
            {productname: this.state.productname , productdescription: this.state.productdescription , productprice: this.state.productprice , producttype: this.state.producttype , 
            getmethod: this.state.getmethod, imageurl: this.state.imageurl , productid: this.state.productid })}  >
            <Text>修改預覽</Text>

          </TouchableOpacity>
         </View>
          <View style={styles.gobackbutton}>
            <TouchableOpacity style={styles.submit} onPress={()=>this.props.navigation.navigate(Listdetail)}>
              <Text>返回上一頁</Text>

            </TouchableOpacity>

          </View>

        
        
        </View>
        
         </View>

        </ScrollView>
        
        </MenuProvider>
           
        )
    }
}

const styles = StyleSheet.create({
  gobackbutton:{
    right:250,
    marginTop:10,
  },
  twobutton:{
    flexDirection: 'row',
  },
  
    submit:{
      
      borderColor:"#fb5b5a",
     
      borderWidth:1,
      height:40,
      width:100,
      alignItems:"center",
      justifyContent:"center",

      
     
    },
    submitbutton:{
      marginTop:10,
      marginLeft: 250,
  
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
      height:90,
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

export default modifyproduct;
