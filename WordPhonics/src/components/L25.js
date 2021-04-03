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

export default function L25() {
  const navigation = useNavigation();

  var playSound = () => {
    var sound1 = new Sound(
      require("../assets/25/25intro.mp3"), (error, sound) => {
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
      <SafeAreaView style={styles.startContainer}>
        <TouchableOpacity onPress={() => {playSound()}}>
          <Text style={styles.subtitle}>Alliteration happens when you hear the same sounds in words close to each other, especially the first sounds of words.</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={[styles.lesson, {backgroundColor: "green"}]}
          onPress={() => {navigation.navigate("Q25M1")}}
        >
          <Text style={styles.section}>Quiz 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.lesson, {backgroundColor: "pink"}]}
          onPress={() => {navigation.navigate("Q25M2")}}
        >
          <Text style={styles.section}>Quiz 2</Text>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

L25.navigationOptions = () => {(
    title:'L25'
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
    fontSize: 25,
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
