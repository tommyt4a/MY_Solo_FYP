import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SearchBar from '../../common/SearchBar';
import LoginScreen from '../LoginScreen/LoginScreen';

import SignupScreen from '../LoginScreen/SignupScreen';




class ProductList extends React.Component {
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
               
                
                <View>
                <Text>HI</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate(LoginScreen)} >                           
                                <Image style={styles.iconbutton} source={{uri:'https://api.elle.com.hk/var/ellehk/storage/images/fashion/2020-horoscopes-lucky-accessories/node_1773370/32254247-1-chi-HK/10_img_1040_780.png'}} />
                                 
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
        }
}


const styles = StyleSheet.create({
    iconbutton:{
    width: 100,
    height: 100,
}
})


export default ProductList;
