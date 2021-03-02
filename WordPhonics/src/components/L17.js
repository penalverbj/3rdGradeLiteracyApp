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

export default function L17(props) {
  const navigation = useNavigation();
  var sound1, sound2;
  var playSound = (num) => {
    stopSounds();
    switch (num) {
      case 1:
      sound1 = new Sound(
        require("../assets/17/17intro.mp3"), (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound1.play(() => {
            sound1.release();
          });
        });
        break;
      case 2:
        sound2 = new Sound(
        require("../assets/17/17Intro2.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
            });
          });
        break;
    }
  }
  var stopSounds = () => {
    if (sound1) {sound1.stop();}
    if (sound2) {sound2.stop();}
  }
  var goToScreen = (num) => {
    stopSounds();
      switch (num) {
        case 1:
          navigation.navigate('L17S');
          break;
        case 2:
          navigation.navigate('L17M');
          break;
        case 3:
          navigation.navigate('L17SM');
          break;
      }
  }

  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#fcf351'}]}
            onPress={() => {
              playSound(1);
              goToScreen(1);
            }}
          >
            <Text style={styles.section}>Similes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.subtitle]}
            onPress={() => {
              playSound(1);
            }}
          >
            <Text style={styles.section}>
            A simile compares two different things
            and says they are similar using comparitive
            words such as like, as, or seems.
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f3b2c8'}]}
            onPress={() => {
              playSound(2);
              goToScreen(2);
            }}
          >
            <Text style={styles.section}>Metaphors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.subtitle]}
            onPress={() => {
              playSound(2);
            }}
          >
            <Text style={styles.section}>
            A metaphor doesn't just compare two different things,
            but pretends they are really the same
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#bfe54e'}]}
            onPress={() => {
              goToScreen(3);
            }}
          >
            <Text style={styles.section}>Similes and Metaphors</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

L17.navigationOptions = () => {(
    title:'L17'
)}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollView: {
    padding: 10,
  },
  title: {
    fontSize: 35,
    margin: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
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
