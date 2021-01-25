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
} from 'react-native';
import LoginScreen from './LoginScreen';
import MainMenuScreen from './MainMenuScreen';

export default class App extends React.Component {
  state = {
    currentLesson: null, //when we implement lessons this will be the lesson to render
    logedIn: false, //if log in is succesful this changes to true
  }

  logIn = () => {
    this.setState(() => ({
      logedIn: true,
    }));
  };
  logOut = () => {
    this.setState(() => ({
      logedIn: false,
    }));
  };
  render() {
    if (this.state.logedIn === false) { //not loged in
      return (
        <>
          <LoginScreen
            logIn={this.logIn}
          />
        </>
        );
    }
    if(this.state.logedIn === true) {
      return (
        <>
          <MainMenuScreen/>
        </>
        );
    }
  }
}

const styles = StyleSheet.create({

});
