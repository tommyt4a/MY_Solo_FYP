import React from 'react';
import { Text, View, Image, StyleSheet , TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductList from './ProductList'
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import { Alert } from 'react-native';


class ProductListDetail extends React.Component{
    render(){
        const {productname , productdescription , productprice, producttype , 
            getmethod , imageurl , productid, ownername  } = this.props.route.params
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
                <View style={styles.description}>
                <Text>描述:</Text>
                <Text style={styles.text} numberOfLines={5}>{productdescription}</Text>

                </View>
                
                
                <View style={styles.buttonstyle}>
                <TouchableOpacity style={styles.button1}  onPress={()=>this.delproduct(productid )} >
                    <Text>收藏物品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate('modifyproduct', {productname: productname , productdescription: productdescription 
                , productprice: productprice, producttype: producttype , 
            getmethod: getmethod , imageurl: imageurl , productid: productid})}>
                    <Text>私訊聊天</Text>
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