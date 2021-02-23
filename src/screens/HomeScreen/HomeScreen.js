import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../../common/SearchBar';
import HomeRecommendation from './HomeRecommendation';

class HomeScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.main}>
                <HomeRecommendation />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        marginTop: 30
      }

});

export default HomeScreen;