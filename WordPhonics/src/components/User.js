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
      <Text style={styles.section}> Coins </Text>
      <Text style={styles.section}> Units Completed</Text>
    </View>
  );
}

User.navigationOptions = () => {(
    title:'User'
)}
const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
