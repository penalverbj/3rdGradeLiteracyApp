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

export default function Nursery(props) {
  const navigation = useNavigation();
  var sound0, sound1,sound2,sound3,sound4,sound5, sound6, sound7,
  sound8, sound9, sound10;
  var playSound = (num) => {
    stopSounds();
    switch (num) {
      case 0:
      sound0 = new Sound(
        require("../assets/24/Nursery-Rhymes/LittleJack.mp3"), (error, sound) => {
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
        require("../assets/24/Nursery-Rhymes/Dumpty.mp3"), (error, sound) => {
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
        require("../assets/24/Nursery-Rhymes/Diddle.mp3"), (error, sound) => {
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
          require("../assets/24/Nursery-Rhymes/OldWoman.mp3"), (error, sound) => {
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
            require("../assets/24/Nursery-Rhymes/JackSprat.mp3"), (error, sound) => {
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
              require("../assets/24/Nursery-Rhymes/Willie.mp3"), (error, sound) => {
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
            require("../assets/24/Nursery-Rhymes/KingCole.mp3"), (error, sound) => {
                if (error) {
                  alert('error' + error.message);
                  return;
                }
                sound6.play(() => {
                  sound6.release();
                });
              });
            break;
          case 7:
              sound7 = new Sound(
              require("../assets/24/Nursery-Rhymes/Peter.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound7.play(() => {
                    sound7.release();
                  });
                });
              break;
          case 8:
              sound8 = new Sound(
              require("../assets/24/Nursery-Rhymes/Sixpence.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound8.play(() => {
                    sound8.release();
                  });
                });
              break;
          case 9:
              sound9 = new Sound(
              require("../assets/24/Nursery-Rhymes/Kittens.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound9.play(() => {
                    sound9.release();
                  });
                });
              break;
          case 10:
              sound10 = new Sound(
              require("../assets/24/Nursery-Rhymes/House.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound10.play(() => {
                    sound10.release();
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
    if (sound7) {sound7.stop();}
    if (sound8) {sound8.stop();}
    if (sound9) {sound9.stop();}
    if (sound10) {sound10.stop();}
  }

  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.section}>
          Can you find the rhyming words in these rhymes?
        </Text>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/LittleJack.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Dumpty.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Diddle.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/OldWoman.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/JackSprat.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Willie.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/KingCole.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Peter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Sixpence.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/Kittens.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Nursery-Rhymes/House.png")}
              />
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

Nursery.navigationOptions = () => {(
    title:'Nursery'
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
    //resizeMode: 'stretch',
    marginTop: 20
  },
});
