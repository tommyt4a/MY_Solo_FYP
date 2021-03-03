import React from 'react';
import BottomNavigator from './src/navigation';
import { ThemeProvider, LightTheme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen, { HomeScreen } from './src/screens';
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from './src/screens/ProductScreen/ProductList';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import main from './redux/main'
const store=createStore(rootReducer, applyMiddleware(thunk))

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBRgZVw_Inp4hu4zDllJZf5xF-VzPgtXpk",
  authDomain: "myfyp-d024f.firebaseapp.com",
  databaseURL: "https://myfyp-d024f-default-rtdb.firebaseio.com",
  projectId: "myfyp-d024f",
  storageBucket: "myfyp-d024f.appspot.com",
  messagingSenderId: "1027251559937",
  appId: "1:1027251559937:web:46e1ea80055231d75b6a00",
  measurementId: "G-5PSHH9FJLS"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}





const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
    <ThemeProvider theme={LightTheme}>
      <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
      <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
      
      
      
      
      


      </Stack.Navigator>
      </NavigationContainer> 
      
     
        
      
    
      </ThemeProvider>
      </Provider>
   
  );
}

export default App;