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
  var playSound = (num) => {
    switch (num) {
      case 12: var sound1 = new Sound(
        require("../assets/12/12intro.mp3"), (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound1.play(() => {
            sound1.release();
          });
        });
        break;
      case 13: var sound1 = new Sound(
          require("../assets/13/13intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 14: var sound1 = new Sound(
          require("../assets/14/14intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 15: var sound1 = new Sound(
          require("../assets/15/15intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 16: var sound1 = new Sound(
          require("../assets/16/16intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 17: var sound1 = new Sound(
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
      case 18: var sound1 = new Sound(
          require("../assets/18/18intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 19: var sound1 = new Sound(
          require("../assets/19/19intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 20: var sound1 = new Sound(
          require("../assets/20/20intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 21: var sound1 = new Sound(
          require("../assets/21/21intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 22: var sound1 = new Sound(
          require("../assets/22/22intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 23: var sound1 = new Sound(
          require("../assets/23/23intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 24: var sound1 = new Sound(
          require("../assets/24 Rhyme/24intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      case 25: var sound1 = new Sound(
          require("../assets/25 Alliteration/25intro.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
          break;
      default:
          break;

    }
  }

  var goToScreen = (num) => {
    switch (num) {
      case 12:
        navigation.navigate("L12");
        break;
      default:
        break;
    }

  }

  return (
    <>

      <SafeAreaView style={styles.startContainer}>
        <Text style={styles.title}>Figures of Speech</Text>
        <Text style={styles.subtitle}>fun ways to use language</Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#fcf351'}]}
            onPress={() => {
              playSound(12);
              goToScreen(12);
              }}
          >
            <Text style={styles.section}>12: synonyms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f3b2c8'}]}
            onPress={() => playSound(13)}
          >
            <Text style={styles.section}>13: antonyms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#bfe54e'}]}
            onPress={() => playSound(14)}
          >
            <Text style={styles.section}>14: homophones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#e0696b'}]}
            onPress={() => playSound(15)}
          >
            <Text style={styles.section}>15: puns</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#cda1d2'}]}
            onPress={() => playSound(16)}
          >
            <Text style={styles.section}>16: homographs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f3b88c'}]}
            onPress={() => playSound(17)}
          >
            <Text style={styles.section}>17: similies & metaphors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#c3c3c3'}]}
            onPress={() => playSound(18)}
          >
            <Text style={styles.section}>18: onomatopeia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#fdf885'}]}
            onPress={() => playSound(19)}
          >
            <Text style={styles.section}>19: irony or sarcasm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#a7d8e8'}]}
            onPress={() => playSound(20)}
          >
            <Text style={styles.section}>20: personification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#f6cb47'}]}
            onPress={() => playSound(21)}
          >
            <Text style={styles.section}>21: hyperbole</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#ddc0e1'}]}
            onPress={() => playSound(22)}
          >
            <Text style={styles.section}>22: euphemism</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#b87cbe'}]}
            onPress={() => playSound(23)}
          >
            <Text style={styles.section}>23: oxymoron</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#66cf69'}]}
            onPress={() => playSound(24)}
          >
            <Text style={styles.section}>24: rhyme</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lesson, {backgroundColor: '#ee7af8'}]}
            onPress={() => playSound(25)}
          >
            <Text style={styles.section}>25: alliteration</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

MainMenuScreen.navigationOptions = () => {(
    title:'MainMenu'
)}

MainMenuScreen.propTypes = {

}

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
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  lesson: {
    borderWidth: 1,
    padding: 12,
    margin: 7,
    borderRadius: 30,
    alignItems: 'center',
  },
  section: {
    fontSize: 27,
    padding: 5,
    fontStyle: 'italic',
  }
});
