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
    const [answerPair, setAnswerPair] = useState(["null", "null", "null", "null"]);
    const [correctAnswer, setCorrectAnswer] = useState("null");
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);

    // list of correct answers
    const correctPairs =
      [
        'end finish',
        'evening dusk',
        'fix mend',
        'hard difficult',
        'morning dawn',
        'sad unhappy',
        'begin start',
        'shut close',
        'fix mend',
        'easy simple',
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

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // The screen is focused
        // Call any action
        generateQuestion();
      });
  
      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe;
    }, [navigation]);


    // runs when you click the question for testing
    const generateQuestion = () => {
      // clears message
      setMessage("");

      // fills with random incorect
      let currentPairs = [
          incorrectPairs[pickRandom(0, incorrectPairs.length)],
          incorrectPairs[pickRandom(1, incorrectPairs.length)],
          incorrectPairs[pickRandom(2, incorrectPairs.length)],
          incorrectPairs[pickRandom(3, incorrectPairs.length)]
      ];

      let answer = correctPairs[pickRandom(0, correctPairs.length)]
      // randomizes the location of random pair and picks a random answer
      currentPairs[pickRandom(0,4)] = answer;
      setCorrectAnswer(answer);

      setAnswerPair(currentPairs);


      return currentPairs;
    }

    const checkAnswer = (string) => {
        // just sets message for now
        if (string == correctAnswer) {
          if (message != "Correct! Click next to continue!") {
            setScore(score + 1);
          }
          setMessage("Correct! Click next to continue!");
        } else {
          setMessage("Incorrect, please try again.");
        }
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
                checkAnswer(answerPair[0]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[0]}
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[1]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[1]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[2]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[2]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[3]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[3]}
                </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={() => {generateQuestion()}}
              style={styles.arrowContainer}
            >
              <Image
                source={require('../assets/arrow-right.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
        </View>
        <View style={styles.scoreContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Q12M1")} style={styles.quizButton}>
            <Text style={styles.score}>Score: {score}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Q12M1")} style={styles.quizButton}>
            <Text style={styles.message}>{message}</Text>
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
    height: 100,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 6,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 20,
    flexWrap: 'wrap',
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    //marginHorizontal: 5,
    marginTop: 130,
  },
  arrow: {
    height: 35,
    width: 35,
  },
  picture: {
    height: 250,
    width: 250,
    resizeMode: 'stretch',
  },
  words: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 70,
    textAlign: 'center',
  },
  answer: {
    fontSize: 40,
    margin: 20,
    marginHorizontal: 30,
    backgroundColor: "#bfe54e",
    color: "black",
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 70,
    flexDirection: 'row',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 50,
    textAlign: 'center',
  },

});
