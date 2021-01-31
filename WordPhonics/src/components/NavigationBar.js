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

export default function NavigationBar() {
  return(
      <Image
        source={require('../assets/plainLogo2.png')}
        style={styles.image}
      />
  );
}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
});
