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

<<<<<<< HEAD
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
=======

export default function L12(props, {navigation}) {
  return (
    <>
      <View style={styles.startContainer}>
        <Text>Lesson 12 Temp</Text>
>>>>>>> d88503b94f98675cb7ba46d81780a1f86f47a695
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
<<<<<<< HEAD
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
  },
=======
    flex: 4,
    backgroundColor: '#a7d8e8',
  }
>>>>>>> d88503b94f98675cb7ba46d81780a1f86f47a695
});
