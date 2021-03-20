import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import SearchBar from '../../common/SearchBar';
import LoginScreen from '../LoginScreen/LoginScreen';

import SignupScreen from '../LoginScreen/SignupScreen';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'




class ProductList extends React.Component {
    state={
        producttype:'',
        product: [],
    }

    componentDidMount(){
        const { producttype , 
        } = this.props.route.params
        
        this.setState({producttype: producttype})
          
         firebase.firestore()
  .collection('product').where("producttype", '==', producttype)
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

    render(){
        
        return(
            <SafeAreaView style={{flex: 1}}>
               <View style={styles.container}>
                <TouchableOpacity style={styles.goback}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
               <FlatList
      data={this.state.product}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity style={{borderWidth:1, alignItems: 'center',
  justifyContent: 'center', marginTop:5,}}>
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
            </SafeAreaView>
        )
        }
}


const styles = StyleSheet.create({
    goback:{
        marginTop: 25,
        right:5,
        borderWidth:1,
        width:80,
        alignItems: 'center',
  justifyContent: 'center',

    },
    iconbutton:{
    width: 100,
    height: 100,
},
container:{
    marginHorizontal:10,
    marginVertical: 30,
},
scroll1:{

},
scroll:{
  
  marginTop:200
  
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
}
)


export default ProductList;
