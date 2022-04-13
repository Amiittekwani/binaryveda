

import React from 'react';
import Screen from "./src/Screens/Screen"
import Screen2 from "./src/Screens/Screen2"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
  StyleSheet,
  
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {

    return (
  
      <NavigationContainer>
                    <Stack.Navigator initialRouteName = {Screen}>
                      <Stack.Screen name = 'Screen' component = {Screen} options = {{headerShown: false}} />
                      <Stack.Screen name = 'Screen2' component = {Screen2} options = {{headerShown: true}} />
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
