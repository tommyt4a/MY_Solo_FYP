import React from 'react';
import { Text, View ,Image, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileScreen from './ProfileScreen'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import modifyproduct from './modifyproduct';

class updateproductview extends React.Component{
    state={
        imageuri:'',
        productname:'',
        productprice:'',
        productdescription:'',
        producttype:'',
        getmethod:'',   
        imageurl:'',
        productid:'',
        ownername:'',
        

    }

    getpicture = async () =>{
        var image = await AsyncStorage.getItem('updateproductpreviewpicture');
        if(image!=null){
            this.setState({imageuri: image})
        console.log(this.state.imageuri)
    

    }else{
        this.setState({imageuri: this.state.imageurl})
    }}
    
    updateproduct = async()=>{
        const fileextension = this.state.imageuri.split('.').pop();
    console.log(fileextension)
    var uuid = uuidv4();
    const filename = `${uuid}.${fileextension}`
    console.log(filename)
    const response = await fetch(this.state.imageuri)
    
    const blob = await response.blob()

    await firebase.storage().ref(filename).put(blob);

    const url = await firebase.storage().ref(filename).getDownloadURL();
    this.setState({imageuri: url})
    
        firebase.firestore().collection('product').doc(this.state.productid).update({
            productname: this.state.productname,
            productdescription: this.state.productdescription,
            productprice: this.state.productprice,
            producttype: this.state.producttype,
            getmethod: this.state.getmethod,
            imageurl: this.state.imageuri,
            
        }).then(() => {
            Alert.alert('成功修改');
            this.props.navigation.navigate(ProfileScreen)
          });


    }
    
          
          
        

        componentDidMount(){
            const {productname , productdescription , productprice, producttype , 
                getmethod , imageurl , productid , ownername } = this.props.route.params   
            this.setState({productname: productname}) 
            this.setState({productdescription: productdescription})
            this.setState({productprice: productprice})
            this.setState({producttype: producttype})
            this.setState({getmethod: getmethod}) 
            this.setState({imageurl: imageurl})
            this.setState({productid: productid}) 
            this.setState({ownername: ownername}) 

    this.getpicture()

        }

   
    render(){
        
        return(
            <View style={styles.container}>
                
                <Image source={{ uri: this.state.imageuri }} style={{ width: 250, height: 150 }}/>

                
                
                <View style={styles.productcontainer}>
                
                <View style={styles.product}>
                <Text style={styles.text}>物品種類:{this.state.producttype}     </Text>
                <Text style={styles.text}>交易方式:{this.state.getmethod}</Text>
                </View>


                <Text style={styles.text}>賣家: {this.state.ownername}</Text>
                <Text style={styles.text}>物品名稱: {this.state.productname}</Text>
                <Text style={styles.text}>價錢: ${this.state.productprice}</Text>
                <View style={styles.description}>
                <Text>描述:</Text>
                <Text style={styles.text} numberOfLines={5}>{this.state.productdescription}</Text>

                </View>
                
                
                <View style={styles.buttonstyle}>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate(modifyproduct)}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => this.updateproduct()}>
                    <Text>確認並修改物品</Text>
                </TouchableOpacity>

                </View>
                
                

                </View>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default updateproductview;
