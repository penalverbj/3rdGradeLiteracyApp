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
} from 'react-native';
import LoginScreen from './LoginScreen';
import MainMenuScreen from './MainMenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App() {
  //state variables
  const [currentLesson, setCurrentLesson] = useState(null);
  const [logedIn, setLogin] = useState(false);

  logIn = () => {
    setLogin(true);
  };
  logOut = () => {
    setLogin(false);
  };

  if (logedIn === false) {
    return (
      <LoginScreen logIn={logIn}/>
    );
  }
  if(logedIn) {
    return (
      <MainMenuScreen/>
    );
  }
}

export default App;
