/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LoginScreen from './LoginScreen';
import MainMenuScreen from './MainMenuScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  const [logedIn, setLogin] = useState(false);
  logIn = () => {
    setLogin(true);
  };
  logOut = () => {
    setLogin(false);
  };
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
