import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, RefreshControl,} from 'react-native';
import SearchBar from '../../common/SearchBar';
import LoginScreen from '../LoginScreen/LoginScreen';

import SignupScreen from '../LoginScreen/SignupScreen';
import HomeScreen from '../HomeScreen/HomeScreen'
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  
} from 'react-native-popup-menu';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import ProductListDetail from './ProductListDetail';




class ProductList extends React.Component {
    state={
        producttype:'',
        product: [],
        order:'createat',
        way:'asc',
        order1:'時間',
        way1:'升序',
        refreshing: false,
       
        
    }

    _onRefresh() {
      this.setState({refreshing: true});
      firebase.firestore()
  .collection('product').where("producttype", '==', this.state.producttype)
  .orderBy(this.state.order,this.state.way)
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
      
        this.setState({refreshing: false});
      
    }

    componentDidMount(){
        const { producttype , 
        } = this.props.route.params
        
        this.setState({producttype: producttype})
          
         firebase.firestore()
  .collection('product').where("producttype", '==', producttype)
  
  .orderBy(this.state.order,this.state.way)
  .onSnapshot(querySnapshot => {
    const getproduct = [];

    querySnapshot.forEach(documentSnapshot => {
      getproduct.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });
      this.setState({product: getproduct})
      this.setState({producttype: producttype})
    })

    }



  

    render(){
        
        return(
            <SafeAreaView style={{flex: 1}}>
              <MenuProvider>
               <View style={styles.container}>
                 <View style={{flexDirection:'row'}}> 
                <TouchableOpacity style={styles.goback} onPress={()=>this.props.navigation.navigate(HomeScreen)}>
                    <Text>返回上一頁</Text>
                </TouchableOpacity>
                
                  <View style={styles.menu1}>
                  
                  <Menu >
  <MenuTrigger text='排列順序: '  />
  <MenuOptions  >
    <MenuOption onSelect={()=>this.setState({order: 'createat', order1:'時間'})} text='時間'/>
    <MenuOption onSelect={()=>this.setState({order: 'productprice', order1:'價錢'})} text='價錢'/>
    
    
    </MenuOptions>
  
</Menu>
<Text >{this.state.order1}</Text>
</View>
<View style={styles.menu2}>
<Menu >
  <MenuTrigger text='升降序: '  />
  <MenuOptions  >
    <MenuOption onSelect={()=>this.setState({way: 'asc', way1:'升序'})} text='升序'/>
    <MenuOption onSelect={()=>this.setState({way: 'desc', way1:'降序'})} text='降序'/>
    
    
    </MenuOptions>
  
</Menu>
<Text >{this.state.way1}</Text>
</View>
</View>



                  <ScrollView style={styles.scroll} refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
                
               <FlatList
      data={this.state.product}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity style={{borderWidth:1, alignItems: 'center',
  justifyContent: 'center', marginTop:5}} onPress={()=>this.props.navigation.navigate('ProductListDetail',{producttype: item.producttype , productname: item.productname 
  , productdescription: item.productdescription , productprice: item.productprice , ownername: item.ownername, imageurl: item.imageurl , getmethod: item.getmethod })}>
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
    </ScrollView>
                
                </View>
                </MenuProvider>
            </SafeAreaView>
        )
        }
}


const styles = StyleSheet.create({
  menu2:{
    left:60,
    marginTop: 25,
    flexDirection:'row',
    borderWidth:1,
    alignItems: 'center',
  justifyContent: 'center',
  width:100,
  },
  menu1:{
    left:50,
    marginTop: 25,
    flexDirection:'row',
    borderWidth:1,
    alignItems: 'center',
  justifyContent: 'center',
  width:100,
  },
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
