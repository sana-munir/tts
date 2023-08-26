import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/tabnavigator';
import MainStackNavigator from './navigation/stacknavigator';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  
  );
}
<StatusBar backgroundColor="purple" />
//<BottomTabNavigator />


