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
        require("../assets/24 Rhyme/24intro.mp3"), (error, sound) => {
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
        require("../assets/24 Rhyme/Rhyme/1R_no_go.mp3"), (error, sound) => {
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
        require("../assets/24 Rhyme/Rhyme/2R_hot_pot.mp3"), (error, sound) => {
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
          require("../assets/24 Rhyme/Rhyme/3R_be_he.mp3"), (error, sound) => {
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
            require("../assets/24 Rhyme/Rhyme/4R_bed_said.mp3"), (error, sound) => {
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
              require("../assets/24 Rhyme/Rhyme/6R_pie_sky.mp3"), (error, sound) => {
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
            require("../assets/24 Rhyme/Half-rhyme/HRintro.mp3"), (error, sound) => {
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
      <TouchableOpacity
        onPress={() => {playSound(0);}}>
        <Text style={styles.section}>
          Words rhyme when their last vowel sound is the same,
          and any sound after the vowel is the same. The letters
          that spell the words don't have to be the same,
          just the sounds.
        </Text>
      </TouchableOpacity>
        <ScrollView style={styles.scrollView}>

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
    //alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFAF0',
    //flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollView: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
  section: {
    fontSize: 20,
    padding: 3,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  words: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#6abad7',
    width: 100,
    margin: 4,
  },
});
