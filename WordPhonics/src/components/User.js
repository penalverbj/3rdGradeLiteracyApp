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
import {useNavigation} from '@react-navigation/native';

export default function User() {
  const navigation = useNavigation();
  return(
    <View style={styles.startContainer}>
      <Text> Coins: </Text>
      <Text> Units Completed: </Text>
    </View>
  );
}

User.navigationOptions = () => {(
    title:'User'
)}
const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
