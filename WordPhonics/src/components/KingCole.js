/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Sound from 'react-native-sound';

export default function KingCole({navigation}) {
    return (
      <View style={styles.startContainer}>
        <Image
        style={styles.picture}
        source={require("../assets/24/Nursery-Rhymes/KingCole2.png")}/>
      </View>
    );
}

KingCole.navigationOptions = () => {(
    title:'KingCole'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingVertical: 15,
  },
  picture: {
    alignSelf: 'center',
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
});
