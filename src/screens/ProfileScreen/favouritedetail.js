import React from 'react';
import { Text, View, Image, StyleSheet , TouchableOpacity } from 'react-native';
import ProfileScreen from './ProfileScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import { Alert } from 'react-native';


class favouritedetail extends React.Component{

    state={
        createat:'',
        getmethod:'',
        imageurl:'',
        ownername:'',
        productdescription:'',
        productname:'',
        productprice:'',
        producttype:'',
        useraccount:'',
        owneraccount:'',

    }

    buildchat = async()=>{
        const {productid,owneraccount} = this.props.route.params
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
         .set({chatroomid: chatroomid, target: this.state.ownername, productname: this.state.productname, imageurl: this.state.imageurl})
         firebase.firestore().collection('user').doc(this.state.owneraccount).collection('message').doc(chatroomid)
         .set({target: this.state.username , chatroomid: chatroomid,productname: this.state.productname, imageurl: this.state.imageurl}).then(()=>{
             Alert.alert('聊天室成功建立');
         })
 
        }
 
     })
            
           
          }
        })

    }

    delfavourite =  (productid,useraccount) =>{
        
        firebase.firestore()
        .collection('user')
        .doc(useraccount)
        .collection('favouriteproduct')
        .doc(productid)
        .delete()
        .then(() => {
          Alert.alert("已成功取消收藏");
          this.props.navigation.navigate(ProfileScreen)
        });
        
    }

    componentDidMount(){
        const {productid } = this.props.route.params
        console.log(productid)
        firebase.firestore().collection('product').where('productid','==',productid).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                this.setState({creatat: documentSnapshot.data().createat})
                
                this.setState({getmethod: documentSnapshot.data().getmethod})
                this.setState({imageurl: documentSnapshot.data().imageurl})
                this.setState({ownername: documentSnapshot.data().ownername})
                this.setState({productdescription: documentSnapshot.data().productdescription})
                this.setState({productname: documentSnapshot.data().productname})
                this.setState({producttype: documentSnapshot.data().producttype})
                this.setState({productprice: documentSnapshot.data().productprice})
                this.setState({owneraccount: documentSnapshot.data().owneraccount})
                this.setState({createat: documentSnapshot.data().createat})
                
                
            })
            
            

        })
    }

    render(){
        const {productid , useraccount} = this.props.route.params
        
        
            

            
        return(
            <View style={styles.container}>
                
                <Image source={{ uri: this.state.imageurl }} style={{ width: 250, height: 150 }}/>

                
                
                <View style={styles.productcontainer}>
                
                <View style={styles.product}>
                <Text style={styles.text}>物品種類:{this.state.producttype}</Text>
                <Text style={styles.text}>交易方式:{this.state.getmethod}</Text>
                </View>


                
                <Text style={styles.text}>物品名稱: {this.state.productname}</Text>
                <Text style={styles.text}>價錢: ${this.state.productprice}</Text>
                <Text style={styles.text}>建立於: {this.state.createat}</Text>
                <View style={styles.description}>
                <Text>描述:</Text>
                <Text style={styles.text} numberOfLines={5}>{this.state.productdescription}</Text>

                </View>
                
                
                <View style={styles.buttonstyle}>
                <TouchableOpacity style={styles.button1}  onPress={()=>this.delfavourite(productid, useraccount )} >
                    <Text>取消收藏</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={()=>this.buildchat()}>
                    <Text>與賣家建立聊天</Text>
                </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={styles.three}onPress={()=>this.props.navigation.navigate(threed)}>
                        <Text>開啟3D模型</Text>
                    </TouchableOpacity>

                </View>
                
                

                </View>

                <TouchableOpacity style={{alignContent:'center'}} onPress={()=> this.props.navigation.navigate(ProfileScreen)}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
                
                
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

export default favouritedetail;
