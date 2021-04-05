import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme';
import {
  SplashScreen,

  HomeScreen,
  SearchScreen,
  UploadproductScreen,
  ChatScreen,
  ProfileScreen,

} from '../screens';

import {
  NAVIGATION_TO_SPLASH_SCREEN,

  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_SEARCH_SCREEN,
  NAVIGATION_TO_UPLOADPRODUCT_SCREEN,
  NAVIGATION_TO_CHAT_SCREEN,
  NAVIGATION_TO_PROFILE_SCREEN,
  
  
} from './route';
import ProductList from '../screens/ProductScreen/ProductList'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import SignupScreen from '../screens/LoginScreen/SignupScreen';
import ForgotScreen from '../screens/LoginScreen/ForgotScreen'
import { createStackNavigator } from "@react-navigation/stack";

import productview from '../screens/UploadproductScreen/productview'
import Listdetail from '../screens/ProfileScreen/Listdetail'
import Listfavourite from '../screens/ProfileScreen/Listfavourite'
import modifyproduct from '../screens/ProfileScreen/modifyproduct'
import updateproductview from '../screens/ProfileScreen/updateproductview'
import ProductListDetail from '../screens/ProductScreen/ProductListDetail'
import ChatRoom from '../screens/ChatScreen/ChatRoom'
import ChatList from '../screens/ChatScreen/ChatList'
import favouritedetail from '../screens/ProfileScreen/favouritedetail'
import Searchdetail from '../screens/SearchScreen/Searchdetail'
import threed from '../screens/3D/threed'


const Stack = createStackNavigator();
const ProductStack = createStackNavigator()
const UploadProductStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const ChatStack = createStackNavigator()
const SearchStack = createStackNavigator()

const Chat = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <ChatStack.Screen name = "ChatScreen" component = {ChatScreen} />
    <ChatStack.Screen name = "ChatList" component= {ChatList}/>
    <ChatStack.Screen name = "ChatRoom" component= {ChatRoom}/>
    <ChatStack.Screen name = "threed" component= {threed}/>

    
    
    
  </Stack.Navigator>)
}


const Product = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <ProductStack.Screen name = "HomeScreen" component = {HomeScreen} />
    <ProductStack.Screen name = "ProductList" component= {ProductList}/>
    <ProductStack.Screen name = "ProductListDetail" component= {ProductListDetail}/>
    <ProductStack.Screen name = "threed" component= {threed}/>

    
    
    
  </Stack.Navigator>)
}

const UploadProduct = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <UploadProductStack.Screen name = "UploadproductScreen" component = {UploadproductScreen} />
    <UploadProductStack.Screen name = "productview" component= {productview}/>
    <UploadProductStack.Screen name = "threed" component= {threed}/>
    
    
    
  </Stack.Navigator>)
}

const Profile = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <ProfileStack.Screen name = "ProfileScreen" component = {ProfileScreen} />
    <ProfileStack.Screen name = "Listfavourite" component= {Listfavourite}/>
    <ProfileStack.Screen name = "Listdetail" component= {Listdetail}/>
    <ProfileStack.Screen name = "LoginScreen" component= {LoginScreen}/>
    <ProfileStack.Screen name = "SignupScreen" component= {SignupScreen}/>
    <ProfileStack.Screen name = "ForgotScreen" component= {ForgotScreen}/>
    <ProfileStack.Screen name = "modifyproduct" component = {modifyproduct} />
    <ProfileStack.Screen name = "updateproductview" component = {updateproductview} />
    <ProfileStack.Screen name = "favouritedetail" component = {favouritedetail} />
    <ProfileStack.Screen name = "threed" component = {threed} />
    
    
    
    
  </Stack.Navigator>)
}

const Search = () => {
  return(
  <Stack.Navigator screenOptions={{
    headerShown: false
  }} > 
    <SearchStack.Screen name = "SearchScreen" component = {SearchScreen} />
    <SearchStack.Screen name = "Searchdetail" component= {Searchdetail}/>
    <SearchStack.Screen name = "threed" component= {threed}/>
    
    
    
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
          name={NAVIGATION_TO_SEARCH_SCREEN}
          component={Search}
          options={{
            tabBarLabel: '搜尋',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_UPLOADPRODUCT_SCREEN}
          component={UploadProduct}
          options={{
            tabBarLabel: '上架貨物',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_CHAT_SCREEN}
          component={Chat}
          options={{
            tabBarLabel: '聊天',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
            
          }}
        />
        <Tab.Screen
          name={NAVIGATION_TO_PROFILE_SCREEN}
          component={Profile}
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
