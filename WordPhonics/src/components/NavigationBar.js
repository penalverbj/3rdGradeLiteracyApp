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
    <View style={styles.startContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainMenu")}>
          <Image
            source={require('../assets/home.png')}
            style={styles.image}
          />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainMenu")}>
          <Image
            source={require('../assets/user.png')}
            style={styles.image}
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 27,
    height: 27,
  },
});
