import React from 'react';
import { Text, View ,Image, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UploadproductScreen from './UploadproductScreen'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'



class productview extends React.Component{
    
        state={
          imageuri:'',
          username:'',
          useraccount:'',
        }
      

getpicture = async () =>{
    var image = await AsyncStorage.getItem('productpreviewpicture');
    if(image!=null){
        this.setState({imageuri: image})
    console.log(this.state.imageuri)
}

var value = await AsyncStorage.getItem('useraccount');
    if(value!==null){
        console.log(value)
        firebase.firestore().collection('user').doc(value).get().then((doc)=>{
            if(doc.exists){
              
             this.setState({username: doc.get('displayname')})
             console.log(this.state.username)
     
            }
     
         })
    }
      
      
    }
    

componentDidMount(){
  
    this.getpicture()
  
  
  }

  addproduct = async () =>{
    var date = moment().format('YYYY/MM/DD')
    const {productname , productdescription , productprice, producttype , 
        getmethod  } = this.props.route.params
    const fileextension = this.state.imageuri.split('.').pop();
    console.log(fileextension)
    var uuid = uuidv4();
    const filename = `${uuid}.${fileextension}`
    console.log(filename)
    const response = await fetch(this.state.imageuri)
    
    const blob = await response.blob()

    await firebase.storage().ref(filename).put(blob);

    const url = await firebase.storage().ref(filename).getDownloadURL();
    console.log(url)
    var value = await AsyncStorage.getItem('useraccount');
    this.setState({useraccount: value});
    
    var uuid1 = uuidv4();
    await firebase.firestore().collection('product').doc(uuid1).set({
         
        productid: uuid1,
        productname: productname,
        productprice: productprice,
        producttype: producttype,
        productdescription: productdescription,
        getmethod: getmethod,
        owneraccount: this.state.useraccount,
        ownername: this.state.username,
        imageurl: url,
        //imageid: filename,
        createat: date
    }).then(()=>{
        Alert.alert("成功上架")
        this.props.navigation.navigate(UploadproductScreen)
    })
    


  }

    render(){
        const {productname , productdescription , productprice, producttype , 
            getmethod  } = this.props.route.params
        return(
            <View style={styles.container}>
                
                <Image source={{ uri: this.state.imageuri }} style={{ width: 250, height: 150 }}/>

                
                
                <View style={styles.productcontainer}>
                
                <View style={styles.product}>
                <Text style={styles.text}>物品種類:{producttype}     </Text>
                <Text style={styles.text}>交易方式:{getmethod}</Text>
                </View>


                <Text style={styles.text}>賣家: {this.state.username}</Text>
                <Text style={styles.text}>物品名稱: {productname}</Text>
                <Text style={styles.text}>價錢: ${productprice}</Text>
                <View style={styles.description}>
                <Text>描述:</Text>
                <Text style={styles.text} numberOfLines={5}>{productdescription}</Text>

                </View>
                
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={styles.three}onPress={()=>this.props.navigation.navigate(threed)}>
                        <Text>開啟3D模型</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.buttonstyle}>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate(UploadproductScreen)}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => this.addproduct()}>
                    <Text>確認並上架物品</Text>
                </TouchableOpacity>

                </View>
                
                

                </View>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    three:{
        borderWidth:1,
        borderColor:'black',
        marginTop:10,
        height:30,
        width:110,
        alignItems: 'center',
        justifyContent:'center',
    },
    description:{
        flexDirection: 'row',
        maxWidth:220,
        maxHeight:300,
        alignItems: 'center',
    },
    button1:{
        borderWidth:1,
        height:30,
        width:110,
        marginTop:10,
        marginRight:20,
        alignItems: 'center', 
        justifyContent: 'center',

    },
    buttonstyle:{
        flexDirection: 'row',
        
    },
    
    text:{
        marginRight:5,
        marginLeft:5,
        marginTop:3,
    },
    productcontainer:{
        borderWidth:1,
        flex:1,
        alignItems: 'center', 
        width:300,
        maxHeight:300,
        marginTop:5,
    },
    button2:{
        borderWidth:1,
        height:30,
        width:110,
        marginTop:10,
        marginLeft:20,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    product:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    container: {
        marginTop:50,
        flex:1,
        alignItems: 'center', 
        
       

       
      },

})

export default productview;
