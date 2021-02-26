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

    //const currentPairs = [];
    const [answerPair, setAnswerPair] = useState(1);


    // question to be asked at top -- maybe we could generalize this
    // quiz screen
    const question = "Which two words are synonyms with similar meanings?";

    // runs when you click the question for testing
    const generateQuestion = () => {
      // fills with random incorect
      let currentPairs = [
          incorrectPairs[pickRandom(0, incorrectPairs.length)],
          incorrectPairs[pickRandom(1, incorrectPairs.length)],
          incorrectPairs[pickRandom(2, incorrectPairs.length)],
          incorrectPairs[pickRandom(3, incorrectPairs.length)]
      ];

      // randomizes the location of random pair and picks a random answer
      currentPairs[pickRandom(0,4)] = correctPairs[pickRandom(0, correctPairs.length)];

      setAnswerPair(currentPairs);
    }

    const checkAnswer = (index) => {

    }

    const pickRandom =  (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }



  return (
    <>
    <View style={styles.startContainer}>
        <TouchableOpacity onPress = {() => {generateQuestion();}}>
            <Text style={styles.subtitle}>
              {question}
            </Text>
        </TouchableOpacity>
    </View>


    <View style={styles.subContainer}>
        <TouchableOpacity onPress = {() => {
            checkAnswer(0);
          }}>
            <Text style={styles.answer}>
              {answerPair[0]}
            </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress = {() => {
            checkAnswer(1);
          }}>
            <Text style={styles.answer}>
              {answerPair[1]}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {
            checkAnswer(2);
          }}>
            <Text style={styles.answer}>
              {answerPair[2]}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {
            checkAnswer(3);
          }}>
            <Text style={styles.answer}>
              {answerPair[3]}
            </Text>
        </TouchableOpacity>
    </View>
    </>

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
  answer: {
    fontSize: 40,
    margin: 20,
    backgroundColor: "grey",
    color: "white",
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },

});
