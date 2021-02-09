import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
import ProductCard from '../../common/ProductCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeRecommendation() {
    const [product, setProduct] = useState([
        {
            key: '1',
            title: 'bag',
            img: '',
            date: '2w',
            currency: 'HKD',
            price: 99,
            seller: 'me',
        },
        {
            key: '2',
            title: 'bag',
            img: '',
            date: '2w',
            currency: 'HKD',
            price: 99,
            seller: 'me',
        },
        {
            key: '3',
            title: 'bag',
            img: '',
            date: '2w',
            currency: 'HKD',
            price: 99,
            seller: 'me',
        },
        {
            key: '4',
            title: 'bag',
            img: '',
            date: '2w',
            currency: 'HKD',
            price: 99,
            seller: 'me',
        },
        {
            key: '5',
            title: 'bag',
            img: '',
            date: '2w',
            currency: 'HKD',
            price: 99,
            seller: 'me',
        },
    ])

    return (
        <ScrollView>
            <View style={styles.scrollView}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title}>
                        Your Recommendation
                    </Text>
                    
                    {/* <TouchableOpacity style={{flexDirection: 'row',}}>
                        <Text style={styles.seeAll}>
                            See All
                        </Text>
                        <MaterialCommunityIcons name="chevron-right" style={styles.seeAll}/>
                    </TouchableOpacity> */}
                </View>

                <FlatList
                    data={product}
                    horizontal={true}
                    renderItem={({item}) => (
                        <ProductCard item={item}/>
                    )}
                />
            </View>
            <View style={styles.scrollView}>
                <Text style={styles.title}>
                    Your Follow
                </Text>
                <FlatList
                    data={product}
                    horizontal={true}
                    renderItem={({item}) => (
                        <ProductCard item={item}/>
                    )}
                />
            </View>
            <View style={styles.scrollView}>
                <Text style={styles.title}>
                    The Latest 
                </Text>
                <FlatList
                    data={product}
                    horizontal={true}
                    renderItem={({item}) => (
                        <ProductCard item={item}/>
                    )}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height: (windowHeight-StatusBar.currentHeight-60-20-20-20-20)/2,
        marginHorizontal:10,
        marginBottom: 10,
    },
    title: {
        fontSize: 24, 
        marginBottom: 10,
    },
    /*
    seeAll: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },*/
});