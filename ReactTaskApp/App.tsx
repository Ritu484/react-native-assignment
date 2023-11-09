/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import type {PropsWithChildren} from 'react';
import Home from './src/screens/Home';
import AddMessage from './src/screens/AddMessage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddMessage" component={AddMessage} />
      </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
