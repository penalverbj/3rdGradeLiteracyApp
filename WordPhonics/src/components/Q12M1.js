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

export default function Q12M1({navigation}) {
  // list of correct answers
  const correctPairs =
    [
      'end finish',
      'evening dusk',
      'fix mend',
      'hard difficult',
      'morning dawn',
      'sad unhappy',
      'begin  start',
      'shut  close',
      'fix  mend',
      'easy  simple',
      'shove push',
      'stop halt',
      'yell shout',
      'morning dawn',
      'evening sunset',
      'small little',
    ];

    // list of incorrect answers
    const incorrectPairs =
      [
        'sweet sour',
        'ascend descend',
        'sunrise sunset',
        'cold hot',
        'tighten loosen',
        'whisper yell',
        'rise fall',
        'polite rude',

      ];

    // question to be asked at top -- maybe we could generalize this
    // quiz screen
    const question = "Which two words are synonyms with similar meanings?";

  return (
    <View style={styles.startContainer}>
        <Text style={styles.subtitle}>
          {question}
        </Text>
    </View>
    );
}

Q12M1.navigationOptions = () => {(
    title:'Q12M1'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingVertical: 15,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 50,
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  words: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  answerContainer: {
    height: 250,
    width: 250,
    resizeMode: 'stretch',
  },

});
