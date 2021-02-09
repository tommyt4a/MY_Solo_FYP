import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../../common/SearchBar';
import HomeRecommendation from './HomeRecommendation';

class HomeScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <SearchBar />
                <HomeRecommendation />
            </SafeAreaView>
        )
    }
}

export default HomeScreen;