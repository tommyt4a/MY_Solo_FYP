import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity,  Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductCard({ item }) {
    return (
        <TouchableOpacity style={styles.items}>
            <View>
                <View style={styles.cardImage}>
                    <View style={{flexDirection: 'row', alignItem: 'center', justifyContent: 'space-between', margin: 4,}}>
                        <Text style={[styles.cardTitle, {color: 'white', marginLeft: 4}]}>{item.date} ago</Text>
                        <MaterialCommunityIcons name="dots-vertical" style={{fontSize:18, color: 'white', }}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardTitle}>{item.currency} {item.price}</Text>
                    <Text style={styles.cardTitle}>{item.seller}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        flex:1,
        flexDirection: 'column',
        width: (windowWidth-30)/2,
        backgroundColor: 'white',
        marginRight: 10,
    },
    cardImage: {
        height: (windowWidth-30)/2-26-20,
        backgroundColor: '#333', 
        elevation: 3,
        borderRadius: 3,
    },
    cardTitle: {
        fontSize:18, 
        color: '#333',
        backgroundColor: 'transparent',
        marginLeft: 8,
    }
});