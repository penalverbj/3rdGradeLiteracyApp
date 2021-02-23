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
  TouchableOpacity,
  Image
} from 'react-native';
import Sound from 'react-native-sound';
import {useNavigation} from '@react-navigation/native';

export default function HalfRhyme(props) {
  const navigation = useNavigation();
  var sound0, sound1,sound2,sound3,sound4,sound5, sound6;
  var playSound = (num) => {
    stopSounds();
    switch (num) {
      case 0:
      sound0 = new Sound(
        require("../assets/24/Half-rhyme/HRintro.mp3"), (error, sound) => {
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
        require("../assets/24/Half-rhyme/1H_car_for.mp3"), (error, sound) => {
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
        require("../assets/24/Half-rhyme/2H_hill_pull.mp3"), (error, sound) => {
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
          require("../assets/24/Half-rhyme/3H_cub_cup.mp3"), (error, sound) => {
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
            require("../assets/24/Half-rhyme/4H_pet_sit.mp3"), (error, sound) => {
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
              require("../assets/24/Half-rhyme/5H_meat_mean.mp3"), (error, sound) => {
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
            require("../assets/24/Half-rhyme/6H_seem_seen.mp3"), (error, sound) => {
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
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/car.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(1);}}>
              <Text style={styles.section}>
                car  for
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/hill.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(2);}}>
              <Text style={styles.section}>
                hill  pull
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/cub.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(3);}}>
              <Text style={styles.section}>
                cub  cup
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/pet.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(4);}}>
              <Text style={styles.section}>
                pet  sit
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/meat.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(5);}}>
              <Text style={styles.section}>
                meat  mean
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.picture}
              source={require("../assets/24/Half-rhyme/seem.png")}
            />
            <TouchableOpacity
              style={styles.words}
              onPress={() => {playSound(6);}}>
              <Text style={styles.section}>
                seem  seen
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

HalfRhyme.navigationOptions = () => {(
    title:'HalfRhyme'
)}

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
  },
  scrollView: {
    padding: 5,
  },
  subContainer: {
    marginVertical: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    fontSize: 23,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  words: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ee8640',
    backgroundColor: '#f3b88c',
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 4,
  },
  picture: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: 20
  },
});
