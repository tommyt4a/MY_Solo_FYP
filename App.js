import React from 'react';
import BottomNavigator from './src/navigation';
import { ThemeProvider, LightTheme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens';






const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
     
        <BottomNavigator/>
    
      </ThemeProvider>
   
  );
}

export default App;