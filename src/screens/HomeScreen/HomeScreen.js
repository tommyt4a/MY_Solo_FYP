import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, Button } from 'react-native';
import SearchBar from '../../common/SearchBar';
import HomeRecommendation from './HomeRecommendation';
import { TouchableOpacity } from 'react-native'
import ProductList from '../ProductScreen/ProductList';
import { createStackNavigator } from "@react-navigation/stack";





class HomeScreen extends React.Component{
state={
    producttype:'',
}



    render(){
        
        return(
        
            
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.main}>
                
                <View style={styles.head}>
                <Image style={styles.headimage} source={require('../../../assets/name.png')} />
                </View>

                    <ScrollView style={styles.scrollview}>

                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '家具'})} >                           
                                <Image style={styles.iconbutton} source={require('../../../assets/furniture.jpg')} />
                                 
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '電器'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/電器.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '電腦'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/電腦.jpg')} />
                            </TouchableOpacity>

                        </View>

                        

                        <View style={styles.text}>
                            
                            <Text>家具</Text>
                            <Text>電器</Text>
                            <Text>電腦</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '手機'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/手機.jpg')} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '模型'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/模型.jpeg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '玩具'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/玩具.jpg')} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手機</Text>
                            <Text>模型</Text>
                            <Text>玩具</Text>
                            

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '手作'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/手作.jpg')} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '書本'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/書本.jpeg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '光碟'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/光碟.jpg')} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手作</Text>
                            <Text>書本</Text>
                            <Text>光碟</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '衣服'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/衣服.webp')} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '鞋類'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/鞋類.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductList', {producttype: '飾物'})}>                           
                                <Image style={styles.iconbutton} source={require('../../../assets/飾物.png')} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>衣服</Text>
                            <Text>鞋類</Text>
                            <Text>飾物</Text>

                        </View>
                  
                    </ScrollView>
                    

                    

    

                </View>
            </SafeAreaView>
           
            
    
        )
    }
}

const styles = StyleSheet.create({
    head:{
        alignItems: 'center',
        
        height: 100,

    },
    headimage:{
        marginTop:10,
        width: 350,
        height: 100,
    },
    scrollview:{
        marginTop:10,
        marginHorizontal:10,
        marginBottom: 110,

    },
    main:{
        marginTop: 30
    },
    
    text:{
        
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'stretch',

    },

    container:{
        
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: "wrap",
        marginBottom: 5,
        alignItems: 'stretch',
        marginTop:10,
    },
    icon:{
    flexDirection: 'row',
    alignItems: 'center',
    
    borderWidth: 0.5,
    
    height: 100,
    borderRadius: 5,
    margin: 5,
    },
    iconbutton:{
        width: 100,
        height: 100,
    }


});


export default HomeScreen;

