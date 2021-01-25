/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import LoginScreen from './LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <>
        <LoginScreen/>
      </>
      );
  };
}

const styles = StyleSheet.create({

});
