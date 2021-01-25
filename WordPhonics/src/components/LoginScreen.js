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
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.startContainer}>
        <Image
          source={require('../assets/phonicsLogo3.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.userInput}
          placeholder="Username"
        />
        <TextInput
          style={styles.userInput}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        </View>
        </>
      );
  };
}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#a7d8e8',
  },
  welcome: {
    fontSize: 30,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '50%',
    marginTop: '15%',
  },
  userInput: {
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: 40,
    alignItems: 'center',
  },
  loginButton: {
    padding: 5,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    margin: '5%',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  }
});
