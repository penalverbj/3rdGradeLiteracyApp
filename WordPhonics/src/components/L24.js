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

export default function L24(props) {
  const navigation = useNavigation();
  var sound0, sound1,sound2,sound3,sound4,sound5, sound6;
  var playSound = (num) => {
    stopSounds();
    switch (num) {
      case 0:
      sound0 = new Sound(
        require("../assets/24/24intro.mp3"), (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound0.play(() => {
            sound0.release();
          });
        });
        break;
      case 1:
      sound1 = new Sound(
        require("../assets/24/Rhyme/1R_no_go.mp3"), (error, sound) => {
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
        require("../assets/24/Rhyme/2R_hot_pot.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
            });
          });
        break;
      case 3:
          sound3 = new Sound(
          require("../assets/24/Rhyme/3R_be_he.mp3"), (error, sound) => {
              if (error) {
                alert('error' + error.message);
                return;
              }
              sound3.play(() => {
                sound3.release();
              });
            });
          break;
        case 4:
            sound4 = new Sound(
            require("../assets/24/Rhyme/4R_bed_said.mp3"), (error, sound) => {
                if (error) {
                  alert('error' + error.message);
                  return;
                }
                sound4.play(() => {
                  sound4.release();
                });
              });
            break;
        case 5:
              sound5 = new Sound(
              require("../assets/24/Rhyme/6R_pie_sky.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound5.play(() => {
                    sound5.release();
                  });
                });
              break;
        case 6:
            sound6 = new Sound(
            require("../assets/24/Half-rhyme/HRintro.mp3"), (error, sound) => {
                if (error) {
                  alert('error' + error.message);
                  return;
                }
                sound6.play(() => {
                  sound6.release();
                });
              });
            break;
    }
  }
  var stopSounds = () => {
    if (sound1) {sound1.stop();}
    if (sound2) {sound2.stop();}
    if (sound3) {sound3.stop();}
    if (sound4) {sound4.stop();}
    if (sound5) {sound5.stop();}
    if (sound6) {sound6.stop();}
  }
  var goToScreen = (num) => {
    stopSounds();
      switch (num) {
        case 1:

        case 2:

        case 3:

      }
  }

  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => {playSound(0);}}
            style={styles.subtitle}
          >
            <Text
              style={styles.section}
            >
              Words rhyme when their last vowel sound is the same,
              and any sound after the vowel is the same. The letters
              that spell the words don't have to be the same,
              just the sounds.
            </Text>
          </TouchableOpacity>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(1);}}>
              <Text style={styles.section}>
                no  go
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(2);}}>
              <Text style={styles.section}>
                hot  pot
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(3);}}>
              <Text style={styles.section}>
                be  he
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(4);}}>
              <Text style={styles.section}>
                bed  said
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(5);}}>
              <Text style={styles.section}>
                pie  sky
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.hr}
              onPress={() => {playSound(6);}}>
              <Text style={styles.section}>
                Half-Rhyme
              </Text>
              <Text style={styles.section}>
                or
              </Text>
              <Text style={styles.section}>
                Near-Rhyme
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nr}
              onPress={() => {}}>
              <Text style={styles.section}>
                Nursery
              </Text>
              <Text style={styles.section}>
                Rhymes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.poems}
              onPress={() => {}}>
              <Text style={styles.section}>
                Poems
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.quiz}
            onPress={() => {}}>
            <Text style={styles.section}>
              Which Words Rhyme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quiz}
            onPress={() => {}}>
            <Text style={styles.section}>
              Which Don't Words Rhyme
            </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

L24.navigationOptions = () => {(
    title:'L24'
)}

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollView: {
    padding: 5,
  },
  subContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  section: {
    fontSize: 23,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  words: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#6abad7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 4,
  },
  hr: {
    borderWidth: 3,
    borderColor: '#b87cbe',
    backgroundColor: '#cda1d2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  nr: {
    borderWidth: 3,
    borderColor: '#66cf69',
    backgroundColor: '#96e4a2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  poems: {
    borderWidth: 3,
    borderColor: '#ee7af8',
    backgroundColor: '#f3b2c8',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  quiz: {
    borderWidth: 3,
    borderColor: '#e0696b',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
    margin: 5
  }
});
