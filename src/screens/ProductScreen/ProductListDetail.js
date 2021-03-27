import React from 'react';
import { Text, View, Image, StyleSheet , TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductList from './ProductList'
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import { Alert } from 'react-native';
import moment from 'moment'


class ProductListDetail extends React.Component{
    state={
        useraccount:'',
        token:'',
        productid:'',
        username:'',
    }

    checklogin = async () =>{
        var check = await AsyncStorage.getItem('token');
        this.setState({token: check});

    }

    

    componentDidMount(){
        this.checklogin()
    }

    buildchat = async () =>{
        const{productid, owneraccount, ownername, productname, imageurl} = this.props.route.params
        if(this.state.token !=1){
            Alert.alert('請先到個人資料登入')
        }else {
            var value = await AsyncStorage.getItem('useraccount');
        this.setState({useraccount: value});
        
        const chatroomid = `${productid}.${this.state.useraccount}`
        console.log(chatroomid)
        firebase.firestore().collection('chatroom').doc(chatroomid).get().then((doc) => {
            if (doc.exists){
              Alert.alert('聊天室已存在，請到「聊天」尋找對話');
          }else{
              
      firebase.firestore().collection('user').doc(this.state.useraccount).get().then((doc)=>{
        if(doc.exists){
          
         this.setState({username: doc.get('displayname')})
         firebase.firestore().collection('chatroom').doc(chatroomid).set({})
         firebase.firestore().collection('user').doc(this.state.useraccount).collection('message').doc(chatroomid)
         .set({chatroomid: chatroomid, target: ownername, productname: productname, imageurl: imageurl})
         firebase.firestore().collection('user').doc(owneraccount).collection('message').doc(chatroomid)
         .set({target: this.state.username , chatroomid: chatroomid,productname: productname, imageurl: imageurl}).then(()=>{
             Alert.alert('聊天室成功建立');
         })
 
        }
 
     })
            
           
          }
        })
        //firebase.firestore().collection('user').doc(this.state.useraccount).collection('message').doc(chatroomid).set({chatroomid: chatroomid})
        }
        
    }

   addfavourite= async()=>{
    var value = await AsyncStorage.getItem('useraccount');
    this.setState({useraccount: value});
       console.log(this.state.useraccount)
        const {productid ,productname , productdescription , productprice, producttype , 
            getmethod , imageurl ,  ownername}=this.props.route.params
            firebase.firestore().collection('user').doc(this.state.useraccount).collection('favouriteproduct').doc(productid).get().then((doc) => {
                if (doc.exists){
                  Alert.alert("已存在收藏中");
              }else{
                firebase.firestore().collection('user').doc(this.state.useraccount).collection('favouriteproduct').doc(productid).set({
                    producttype: producttype,
                    productprice: productprice,
                    productname: productname,
                    productdescription: productdescription,
                    imageurl: imageurl,
                    getmethod: getmethod,
                    productid: productid,
                    useraccount: this.state.useraccount,
                })
                Alert.alert('已收藏')
              }
           
       
        
    })
}

    render(){
        const {productname , productdescription , productprice, producttype , 
            getmethod , imageurl ,  ownername , createat } = this.props.route.params
        return(
            <View style={styles.container}>
                
                <Image source={{ uri: imageurl }} style={{ width: 250, height: 150 }}/>

                
                
                <View style={styles.productcontainer}>
                
                <View style={styles.product}>
                <Text style={styles.text}>物品種類:{producttype}</Text>
                <Text style={styles.text}>交易方式:{getmethod}</Text>
                </View>


                
                <Text style={styles.text}>物品名稱: {productname}</Text>
                <Text style={styles.text}>價錢: ${productprice}</Text>
                <Text style={styles.text}>賣家: {ownername}</Text>
                <Text style={styles.text}>建立於: {createat}</Text>
                <View style={styles.description}>
                <Text>描述:</Text>
                <Text style={styles.text} numberOfLines={5}>{productdescription}</Text>

                </View>
                
                
                <View style={styles.buttonstyle}>
                <TouchableOpacity style={styles.button1}  onPress={()=>this.addfavourite()} >
                    <Text>收藏物品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={()=>this.buildchat()}>
                    <Text>與賣家建立聊天</Text>
                </TouchableOpacity>

                </View>
                
                

                </View>

                <TouchableOpacity style={{alignContent:'center'}} onPress={()=> this.props.navigation.navigate(ProductList)}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
                
                
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

export default ProductListDetail;
