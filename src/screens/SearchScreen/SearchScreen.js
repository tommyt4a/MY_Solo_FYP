import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import SearchBar from '../../common/SearchBar';

class SearchScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <SearchBar />
            </SafeAreaView>
        )
    }
}

export default SearchScreen;