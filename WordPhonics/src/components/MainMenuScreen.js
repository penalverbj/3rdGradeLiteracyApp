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

export default function MainMenuScreen(props, {navigation}) {
  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <Text style={styles.title}>Figures of Speech</Text>
        <Text style={styles.subtitle}>fun ways to use language</Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#fcf351'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>12: synonyms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f3b2c8'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>13: antonyms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#bfe54e'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>14: homophones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#e0696b'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>15: puns</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '##cda1d2'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>16: homographs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f3b88c'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>17: similies & metaphors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#c3c3c3'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>18: onomatopeia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#fdf885'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>19: irony or sarcasm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#a7d8e8'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>20: personification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f6cb47'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>21: hyperbole</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#ddc0e1'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>22: euphemism</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#b87cbe'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>23: oxymoron</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#66cf69'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>24: rhyme</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#ee7af8'}]}
            onPress={() => null}
          >
            <Text style={styles.section}>25: alliteration</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

// MainMenuScreen.navigationOptions = () => {(
//
// )}

MainMenuScreen.propTypes = {

}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollView: {
    //alignItems: 'center',
  },
  title: {
    fontSize: 40,
    margin: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  lesson: {
    borderWidth: 1,
    //backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  section: {
    fontSize: 25,
    margin: 5,
    fontStyle: 'italic',
  }
});
