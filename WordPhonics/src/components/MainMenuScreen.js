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
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Sound from 'react-native-sound';
import {useNavigation} from '@react-navigation/native';

export default function MainMenuScreen(props) {
  const navigation = useNavigation();

  const soundAssets = [
    require("../assets/12/12intro.mp3"),
    require("../assets/13/13intro.mp3"),
    require("../assets/14/14intro.mp3"),
    require("../assets/15/15intro.mp3"),
    require("../assets/16/16intro.mp3"),
    require("../assets/17/17intro.mp3"),
    require("../assets/18/18intro.mp3"),
    require("../assets/19/19intro.mp3"),
    require("../assets/20/20intro.mp3"),
    require("../assets/21/21intro.mp3"),
    require("../assets/22/22intro.mp3"),
    require("../assets/23/23intro.mp3"),
    require("../assets/24/24intro.mp3"),
    require("../assets/25/25intro.mp3"),
  ]

  var playSound = (num) => {
    let index = num - 12
    var sound1 = new Sound(
      soundAssets[index], (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound1.play(() => {
            sound1.release();
        });
      });
  }

  var goToScreen = (num) => {
    if (num == 15) {
      navigation.navigate("Q15");
    }
    if (num == 19) {
      navigation.navigate("L19");
    }
    else {
      navigation.navigate(`L${num}`);
    }
  }

  function LessonButton(props) {
    return(
      <TouchableOpacity
        style={[styles.lesson, {backgroundColor: props.color}]}
        onPress={() => {
          playSound(props.num);
          goToScreen(props.num);
        }}
      >

        <Text style={styles.section}>{props.text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <Text style={styles.title}>Figures of Speech</Text>
        <Text style={styles.subtitle}>fun ways to use language</Text>
        <ScrollView style={styles.scrollView}>
          <LessonButton num={12} color={'#fcf351'} text={"12: synonyms"}/>
          <LessonButton num={13} color={'#f3b2c8'} text={"13: antonyms"}/>
          <LessonButton num={14} color={'#bfe54e'} text={"14: homophones"}/>
          <LessonButton num={15} color={'#e0696b'} text={"15: puns"}/>
          <LessonButton num={16} color={'#cda1d2'} text={"16: homographs"}/>
          <LessonButton num={17} color={'#f3b88c'} text={"17: similies & metaphors"}/>
          <LessonButton num={18} color={'#c3c3c3'} text={"18: onomatopeia"}/>
          <LessonButton num={19} color={'#fdf885'} text={"19: irony or sarcasm"}/>
          <LessonButton num={20} color={'#a7d8e8'} text={"20: personification"}/>
          <LessonButton num={21} color={'#f6cb47'} text={"21: hyperbole"}/>
          <LessonButton num={22} color={'#ddc0e1'} text={"22: euphemism"}/>
          <LessonButton num={23} color={'#b87cbe'} text={"23: oxymoron"}/>
          <LessonButton num={24} color={'#66cf69'} text={"24: rhyme"}/>
          <LessonButton num={25} color={'#ee7af8'} text={"25: alliteration"}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

MainMenuScreen.navigationOptions = () => {(
    title:'MainMenu'
)}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollView: {

  },
  title: {
    fontSize: 35,
    margin: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  lesson: {
    borderWidth: 1,
    padding: 12,
    margin: 7,
    borderRadius: 30,
    alignItems: 'center',
    textAlign: 'center',
  },
  section: {
    fontSize: 27,
    padding: 3,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});
