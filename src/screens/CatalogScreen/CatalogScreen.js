import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import SearchBar from '../../common/SearchBar';

class CatalogScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <SearchBar />
            </SafeAreaView>
        )
    }
}

export default CatalogScreen;