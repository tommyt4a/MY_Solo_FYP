import React from 'react';
import BottomNavigator from './src/navigation';
import { ThemeProvider, LightTheme } from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BottomNavigator/>
    </ThemeProvider>
  );
}

export default App;