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
import PropTypes from 'prop-types';

import Sound from 'react-native-sound';

export default function L12(props, {navigation}) {
  var playDef = () => {
    var sound1 = new Sound(require("../assets/12/12intro.mp3"),
    (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
  }
  return (
    <>
      <View style={styles.startContainer}>
      <TouchableOpacity onPress={() => playDef()}>
        <Text style={styles.subtitle}>
        Synonyms are words which have the same
        or close to the same meaning.
        </Text>
      </TouchableOpacity>
      </View>
      </>
    );
}

L12.navigationOptions = () => {(
    title:'L12'
)}


L12.propTypes = {

}



const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
  },
});
