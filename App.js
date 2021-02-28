import React from 'react';
import BottomNavigator from './src/navigation';
import { ThemeProvider, LightTheme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen, { HomeScreen } from './src/screens';
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from './src/screens/ProductScreen/ProductList'






const Stack = createStackNavigator();


const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
      <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
      
      
      
      
      


      </Stack.Navigator>
      </NavigationContainer> 
      
     
        
      
    
      </ThemeProvider>
   
  );
}

export default App;