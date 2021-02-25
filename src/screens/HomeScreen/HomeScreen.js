import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, Button } from 'react-native';
import SearchBar from '../../common/SearchBar';
import HomeRecommendation from './HomeRecommendation';
import { TouchableOpacity } from 'react-native'
import ProductList from '../ProductScreen/ProductList';
import { createStackNavigator } from "@react-navigation/stack";





class HomeScreen extends React.Component{
    render(){
        
        return(
        
            
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.main}>
                
                <View style={styles.head}>
                <Image style={styles.headimage} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                </View>

                    <ScrollView style={styles.scrollview}>

                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate(ProductList)} >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                                 
                            </TouchableOpacity>
                            

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>飾物</Text>
                            <Text>女裝</Text>
                            <Text>男裝</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手袋</Text>
                            <Text>美容</Text>
                            <Text>家電</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手機</Text>
                            <Text>電腦</Text>
                            <Text>玩具</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手機</Text>
                            <Text>電腦</Text>
                            <Text>玩具</Text>

                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>
                            

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                            <TouchableOpacity >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.text}>
                            <Text>手機</Text>
                            <Text>電腦</Text>
                            <Text>玩具</Text>

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

