import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar, StyleSheet, View, TextInput } from 'react-native';

export default function SearchBar() {
    return(
        <View style={styles.header}>
                <View style={styles.searchbar}>
                    <MaterialCommunityIcons name="magnify" style={{fontSize:24,}}/>
                    <TextInput placeholder='Search' style={{fontSize:24, marginLeft: 10, marginRight: 'auto', }} />
                    <MaterialCommunityIcons name="camera-outline" style={{fontSize:24, marginRight: 6, }}/>
                </View>
                <MaterialCommunityIcons name="heart-outline" style={{fontSize:24, marginRight: 10,}}/>
        </View>
    )
}

const styles = StyleSheet.create({
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