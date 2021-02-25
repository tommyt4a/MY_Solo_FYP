import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme';
import {
  SplashScreen,

  HomeScreen,
  CatalogScreen,
  CollectionScreen,
  ChatScreen,
  ProfileScreen,

} from '../screens';

import {
  NAVIGATION_TO_SPLASH_SCREEN,

  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_CATALOG_SCREEN,
  NAVIGATION_TO_COLLECTION_SCREEN,
  NAVIGATION_TO_CHAT_SCREEN,
  NAVIGATION_TO_PROFILE_SCREEN,
  
  
} from './route';


import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const ProductStack = createStackNavigator()
import ProductList from '../screens/ProductScreen/ProductList'

function Product (){
  return(
  <Stack.Navigator>
    <ProductStack.Screen name = "HomeScreen" component = {HomeScreen}/>
    <ProductStack.Screen name="ProductList" component={ProductList}/>
  </Stack.Navigator>)
}

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      
      
        <Tab.Navigator
        initialRouteName={NAVIGATION_TO_HOME_SCREEN}
        tabBarOptions={{
          activeTintColor: 'tomato',
        }}
      >
        <Tab.Screen
          name={NAVIGATION_TO_HOME_SCREEN}
          component={Product}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_CATALOG_SCREEN}
          component={CatalogScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_COLLECTION_SCREEN}
          component={CollectionScreen}
          options={{
            tabBarLabel: 'Collection',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_CHAT_SCREEN}
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_PROFILE_SCREEN}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      
      
    </SafeAreaProvider>
  );
}


export default BottomNavigator;
