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
    <View style={styles.startContainer}>
      <Image
        source={require('../assets/phonicsLogo3.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#a7d8e8',
  },
  image: {
    width: 50,
    height: 50,
  },
});
