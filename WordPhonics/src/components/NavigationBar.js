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
  TouchableOpacity,
} from 'react-native';
import {Stack} from './App';
import {useNavigation} from '@react-navigation/native';

export default function NavigationBar() {
  const navigation = useNavigation();
  return(
    <TouchableOpacity
      style={styles.startContainer}
      onPress={() => navigation.navigate("MainMenu")}>
        <Image
          source={require('../assets/plainLogo2.png')}
          style={styles.image}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
