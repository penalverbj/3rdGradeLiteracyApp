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
import PropTypes from 'prop-types';

function LoginScreen(props) {
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={props.logIn}
        >
            <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        </View>
        </>
      );
}

LoginScreen.propTypes = {
  logIn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#a7d8e8',
  },
  image: {
    width: '100%',
    height: '50%',
    marginTop: '10%',
  },
  userInput: {
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButton: {
    padding: 8,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    margin: '5%',
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 25,
  }
});

export default LoginScreen;
