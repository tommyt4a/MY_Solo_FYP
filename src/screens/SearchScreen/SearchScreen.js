import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar, StyleSheet, View, TextInput , SafeAreaView, FlatList, Image, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import 'firebase/firestore';



class SearchScreen extends React.Component{
    
    state={
        search:'',
        order:'',
        way:'',
        product:[],
        value:'',
        findproduct:[],
        
        
    }
    

    
    componentDidMount(){
        firebase.firestore()
    .collection('product')
    //.orderBy(this.state.order,this.state.way)
    .onSnapshot(querySnapshot => {
      const getproduct = [];
  
      querySnapshot.forEach(documentSnapshot => {
        getproduct.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
        this.setState({product: getproduct , findproduct: getproduct})
        console.log(this.state.product)
      })
    }

    
    searching() {
        console.log(this.state.search)
        firebase.firestore()
    .collection('product')
    //.orderBy(this.state.order,this.state.way)
    .onSnapshot(querySnapshot => {
      const getproduct = [];
  
      querySnapshot.forEach(documentSnapshot => {
        getproduct.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
        this.setState({product: getproduct})
        console.log(this.state.product)
      })
        
         
        
      }

      searchFilterFunction = (text) => {
        this.setState({
          value: text,
        });
        console.log(this.state.value)
        
    
        const newData = this.state.findproduct.filter(item => {
          const itemData = item.productname;
          const textData = text;
    
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          product: newData,
        });
        console.log(this.state.product)
      };


      renderHeader = () => (
        <View style={styles.header}>
        <View style={styles.searchbar}>
            <TouchableOpacity >
            <MaterialCommunityIcons name="magnify" style={{fontSize:24,}}/>
            </TouchableOpacity>
            
            <TextInput style={{fontSize:24, marginLeft: 10, marginRight: 'auto', }}  
            placeholder='輸入物品名稱搜尋'
            onChangeText={text => this.searchFilterFunction(text)}
            />
            
        </View>
        
</View>
        
      )


    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                

        <FlatList
      data={this.state.product}
      renderItem={({ item }) => (
        
         
        <View style={{ height: 120, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <TouchableOpacity >
           <View style={styles.fullbutton}>
            

            
           <View style={styles.halfbutton1}>
             <Image source={{ uri: item.imageurl }} style={{ width: 100, height: 100 }}/>
           </View>
           
          <View style={{flexDirection:'row'}}>
          <View style={styles.halfbutton2}>
          <Text>交易方式: </Text>
          <Text>物品種類: </Text>
          <Text >物品名稱: </Text>
          <Text>價錢: </Text>
          <Text>描述: </Text>
         
          </View>
          
           <View style={styles.halfbutton3}>
          <Text>{item.getmethod}</Text>
          <Text>{item.producttype}</Text>
          <Text numberOfLines= {1}>{item.productname}</Text>
          <Text>${item.productprice}</Text>
          <Text numberOfLines= {1}>{item.productdescription}</Text>
          </View>


          </View>

            

          </View>
          </TouchableOpacity>
          
        </View>
        
        
        
      )}
      ListHeaderComponent={this.renderHeader}
    />


            </SafeAreaView>
        )
    }
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
    header: {
        marginTop: StatusBar.currentHeight,
        height: 60,
        //padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    searchbar: {
        height: 40,
        backgroundColor: 'white',
        padding: 6,
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        elevation: 3,
    },
});

export default SearchScreen;