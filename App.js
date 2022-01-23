import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider  } from 'react-redux'

import colors from './assets/colors/colors';
import Home from './components/Home';
import Details from './components/Details';
import store from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={Details} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Montserrat Medium'
  }
});
