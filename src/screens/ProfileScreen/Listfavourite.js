import React, { useState, useEffect } from 'react';
import {  FlatList, View, Text, StyleSheet,Image,ScrollView, RefreshControl} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Listfavourite() {
  
  const [product, setproduct] = useState([]); // Initial empty array of users
  
  


  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('product')
      .onSnapshot(querySnapshot => {
        const product = [];
  
        querySnapshot.forEach(documentSnapshot => {
          product.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setproduct(product);
        
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  
  return (
   

    
    <FlatList
      data={product}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity>
           <View style={styles.fullbutton}>
            

            
           <View style={styles.halfbutton1}>
             <Image source={{ uri: item.imageurl }} style={{ width: 100, height: 100 }}/>
           </View>
           
          <View style={{flexDirection:'row'}}>
          <View style={styles.halfbutton2}>
          <Text>交易方式: </Text>
          <Text >物品名稱: </Text>
          <Text>價錢: </Text>
          <Text >描述: </Text>
         
          </View>
          
           <View style={styles.halfbutton3}>
          <Text>{item.getmethod}</Text>
          <Text numberOfLines= {1}>{item.productname}</Text>
          <Text>${item.productprice}</Text>
          <Text numberOfLines= {1}>{item.productdescription}</Text>
          </View>


          </View>

            

          </View>
          </TouchableOpacity>
          
        </View>
        
        
        
      )}
    />
  );


}

const styles = StyleSheet.create({
  fullbutton:{
    flexDirection: 'row',
    flex: 1 ,
    marginTop:10,
    
    
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

})