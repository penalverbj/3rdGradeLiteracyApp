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

export default function MainMenuScreen(props, {navigation}) {
  return (
    <>
      <View style={styles.startContainer}>
        <Text style={styles.welcome}>Main Menu Placeholder</Text>
      </View>
    </>
  );
}

// MainMenuScreen.navigationOptions = () => {(
//
// )}

MainMenuScreen.propTypes = {

}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#FFFAF0',
  },
  welcome: {
    fontSize: 30,
  },
});
