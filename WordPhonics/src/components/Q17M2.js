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
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {addGold, addSilver, markQuizDone, markQuizBlank} from "./User"

import Sound from 'react-native-sound';

// list of correct answers
var correctPairs =
  [
    "His nose was an elephant trunk.",
    "When she’s angry she’s a bear.",
    "The policeman was a clown.",
    "Her fingers were icicles.",
    "When he opened his mouth he was an alligator.",
    "She had roses in her cheeks.",
    "When he eats he turns into a wolf.",
    "She seems nice but is a sneaky snake.",
    "When he proposed she was on cloud 9.",
  ];

// list of incorrect answers
const incorrectPairs =
  [
    "A dog has a ball.",
    "A guitar can make music.",
    "But I ordered chocolate.",
    "Did you light the candle?",
    "He is being very impolite.",
    "He looks like a friendly dragon.",
    "He needs a new skateboard.",
    "I don’t have anything to do.",
    "I can see the sea from here.",
    "I stuck my finger in my eye.",
    "I’d love some.",
    "I’m confused.",
    "It’s nice to get a kiss.",
    "No one is sitting here.",
  ];

export default function Q17M1({navigation}) {
    const [answerPair, setAnswerPair] = useState(["null", "null", "null", "null"]);
    const [correctAnswer, setCorrectAnswer] = useState("null");
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [tries, setTry] = useState(0);
    const [gold, setGold] = useState(false);
    const [silver, setSilver] = useState(false);

    // question to be asked at top -- maybe we could generalize this
    // quiz screen
    const question = "Which sentence contains a metaphor?";

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
      setTry(0);
      setGold(false);
      setSilver(false);
      if(correctPairs.length == 0) {
        //resets quiz before going to mode 2
        correctPairs =
          [
            "His nose was an elephant trunk.",
            "When she’s angry she’s a bear.",
            "The policeman was a clown.",
            "Her fingers were icicles.",
            "When he opened his mouth he was an alligator.",
            "She had roses in her cheeks.",
            "When he eats he turns into a wolf.",
            "She seems nice but is a sneaky snake.",
            "When he proposed she was on cloud 9.",
          ];
        navigation.navigate("L17");
      }

      //fills with random incorect
      let currentPairs = [
          incorrectPairs[pickRandom(0, incorrectPairs.length)]
      ];

      //ensures that no duplicates are added to the pairs array
      for (var i = 0; i < 3; i++) {
        const newPair = incorrectPairs[pickRandom(0, incorrectPairs.length)];
        while (currentPairs.includes(newPair)) {
          newPair = incorrectPairs[pickRandom(0, incorrectPairs.length)];
        }
        currentPairs.push(newPair);
      }

      let answer = correctPairs[pickRandom(0, correctPairs.length)];

      //removes the asked pairs from the array so there arent repeats and the quiz can end
      var index = correctPairs.indexOf(answer);
      correctPairs.splice(index, 1);

      // randomizes the location of random pair and picks a random answer
      currentPairs[pickRandom(0,4)] = answer;
      setCorrectAnswer(answer);

      setAnswerPair(currentPairs);


      return currentPairs;
    }

    const checkAnswer = (string) => {
        // just sets message for now
        if (string == correctAnswer) {
          if(tries == 0) {
            addGold();
            setGold(true);
          } else if(tries == 1) {
            addSilver();
            setSilver(true);
          }
          if(correctPairs.length == 0) {
            if(message != "Correct! You are done with this quiz! Click to go to the next quiz!") {
              setScore(score + 1);
            }
            setMessage("Correct! You are done with this quiz! Click to go to the next quiz!");
          } else {
            if (message != "Correct! Click next to continue!") {
              setScore(score + 1);
            }
            setMessage("Correct! Click next to continue!");
          }
        } else {
          setTry(tries + 1);
          setMessage("Incorrect, please try again.");
        }
    }

    const pickRandom =  (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    function Info(props) {
      if (gold == true) {
        return (
          <View style={styles.messageContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Q12M1")}
            style={styles.quizButton}>
              <Text style={styles.message}>{message}</Text>
          </TouchableOpacity>
            <Image source={require("../assets/gold.png")} style={styles.coin}/>
          </View>
        );
      } else if (silver == true) {
        return (
          <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Q12M1")}
              style={styles.quizButton}>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
            <Image source={require("../assets/silver.png")} style={styles.coin}/>
          </View>
        );
      } else {
        return (
          <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Q12M1")}
              style={styles.quizButton}>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
          </View>
        );
      }
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


        <SafeAreaView style={styles.subContainer}>
          <ScrollView>
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
          </ScrollView>
        </SafeAreaView>

        <View style={styles.scoreContainer}>
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

        <Info/>

        </>

        );
}

Q17M1.navigationOptions = () => {(
    title:'Q17M1'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 2.5,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
  },
  coin: {
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 9,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 25,
    marginHorizontal: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
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
    fontSize: 30,
    margin: 5,
    marginHorizontal: 60,
    backgroundColor: "#bfe54e",
    borderWidth: 1,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 10,
    color: "black",
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1.5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 5,
    flexDirection: 'row',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 50,
    textAlign: 'center',

  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 5,
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
