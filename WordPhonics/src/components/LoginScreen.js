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

export default class LoginScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.startContainer}>
        <Image
          source={require('../assets/phonicsLogo3.png')}
          style={styles.image}
        />
          <Text style={styles.welcome}>Welcome Screen Temp</Text>
        </View>
        </>
      );
  };
}

const styles = StyleSheet.create({
  startContainer: {
    //justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#cda1d2',
  },
  welcome: {
    fontSize: 30,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '50%',
    marginTop: 60,
  },
});
