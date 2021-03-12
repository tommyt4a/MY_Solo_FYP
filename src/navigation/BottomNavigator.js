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
  UploadproductScreen,
  ChatScreen,
  ProfileScreen,

} from '../screens';

import {
  NAVIGATION_TO_SPLASH_SCREEN,

  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_CATALOG_SCREEN,
  NAVIGATION_TO_UPLOADPRODUCT_SCREEN,
  NAVIGATION_TO_CHAT_SCREEN,
  NAVIGATION_TO_PROFILE_SCREEN,
  
  
} from './route';
import ProductList from '../screens/ProductScreen/ProductList'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import SignupScreen from '../screens/LoginScreen/SignupScreen';
import ForgotScreen from '../screens/LoginScreen/ForgotScreen'
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
const ProductStack = createStackNavigator()


const Product = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <ProductStack.Screen name = "HomeScreen" component = {HomeScreen} />
    <ProductStack.Screen name = "ProductList" component= {ProductList}/>
    <ProductStack.Screen name = "LoginScreen" component= {LoginScreen}/>
    <ProductStack.Screen name = "SignupScreen" component= {SignupScreen}/>
    <ProductStack.Screen name = "ForgotScreen" component= {ForgotScreen}/>
    
    
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
            tabBarLabel: '主頁',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_CATALOG_SCREEN}
          component={CatalogScreen}
          options={{
            tabBarLabel: '搜尋',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_UPLOADPRODUCT_SCREEN}
          component={UploadproductScreen}
          options={{
            tabBarLabel: '上架貨物',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_CHAT_SCREEN}
          component={ChatScreen}
          options={{
            tabBarLabel: '聊天',
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
            tabBarLabel: '個人資料',
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
