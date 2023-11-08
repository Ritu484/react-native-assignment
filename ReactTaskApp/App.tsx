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
import {
   StyleSheet,
} from 'react-native';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
