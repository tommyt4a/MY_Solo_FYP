import React, { useState } from 'react';
import { VirtualizedList, StatusBar, StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
import ProductCard from '../../common/ProductCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeRecommendation() {
    const catalog = {
        popular: {
            key: '1',
            title: 'Popular',
            icon: '',
            rec: [ 'Dresses', 'Shoes', 'T-Shirts', ],
            hot: [],
        },
        apparel: {
            key: '2',
            title: 'Apparel',
            icon: '',
            rec: [ 'Dresses', 'Jackets', 'Jeans', 'Pants', 'Shorts', 'T-Shirts', ],
            hot: [],
        },
        beauty: {
            key: '3',
            title: 'Beauty & Health',
            icon: '',
            rec: [ 'Eye Glasses', 'Facial Masks', 'Lipstick', 'Nail Gel', 'Relaxation', 'Skin Care', 'Teeth Whitening', 'Shampoos', ],
            hot: [],
        },
        jewelry: {
            key: '4',
            title: 'Jewelry',
            icon: '',
            rec: [ 'Bracelets', 'Customized', 'Earrings', 'Necklaces', 'Rings', 'Wedding', ],
            hot: [],
        },
        bags: {
            key: '5',
            title: 'Bags',
            icon: '',
            rec: [ 'Cosmetic Bags', 'Cross Body Bags', 'Fashion Backpacks', 'Functional Backpacks', 'Handbags', 'School Backpacks' ],
            hot: [],
        },
        shoes: {
            key: '6',
            title: 'Shoes',
            icon: '',
            rec: [ 'Boots', 'Casual Shoes', 'Pumps', 'Sandals', 'Slippers', 'Sport Shoes' ],
            hot: [],
        }
    };
    return(
        <View></View>
    )
}