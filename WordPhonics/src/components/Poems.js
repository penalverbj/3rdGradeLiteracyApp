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

export default function Poems(props) {
  const navigation = useNavigation();
  var sound0, sound1,sound2,sound3,sound4,sound5, sound6, sound7,
  sound8, sound9, sound10, sound11;
  var playSound = (num) => {
    stopSounds();
    switch (num) {
      case 0:
      sound0 = new Sound(
        require("../assets/24/Poems/Halfway.mp3"), (error, sound) => {
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
        require("../assets/24/Poems/Shadow.mp3"), (error, sound) => {
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
        require("../assets/24/Poems/Bedspread.mp3"), (error, sound) => {
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
          require("../assets/24/Poems/Owl.mp3"), (error, sound) => {
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
            require("../assets/24/Poems/Orphan.mp3"), (error, sound) => {
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
              require("../assets/24/Poems/Duel.mp3"), (error, sound) => {
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
            require("../assets/24/Poems/Wynken.mp3"), (error, sound) => {
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
              require("../assets/24/Poems/Boy.mp3"), (error, sound) => {
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
              require("../assets/24/Poems/Blacksmith.mp3"), (error, sound) => {
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
              require("../assets/24/Poems/Casey.mp3"), (error, sound) => {
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
              require("../assets/24/Poems/Lochinvar.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound10.play(() => {
                    sound10.release();
                  });
                });
              break;
          case 11:
              sound11 = new Sound(
              require("../assets/24/Poems/Christmas.mp3"), (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound11.play(() => {
                    sound11.release();
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
    if (sound11) {sound11.stop();}
  }

  return (
    <>
      <SafeAreaView style={styles.startContainer}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.section}>
          Can you find the rhyming words in these rhymes?
        </Text>
            <TouchableOpacity
              onPress={() => {
                playSound(0);
                navigation.navigate("Halfway");
              }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Halfway.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(1);
              navigation.navigate("Shadow");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Shadow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(2);
              navigation.navigate("Bedspread");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Bedspread.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(3);
              navigation.navigate("Owl");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Owl.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(4);
              navigation.navigate("Orphan");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Orphan.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(5);
              navigation.navigate("Duel");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Duel.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              playSound(6);
              navigation.navigate("Wynken");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Wynken.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              playSound(7);
              navigation.navigate("Boy");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Boy.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(8);
              navigation.navigate("Blacksmith");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Blacksmith.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              playSound(9);
              navigation.navigate("Casey");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Casey.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              playSound(10);
              navigation.navigate("Lochinvar");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Lochinvar.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              playSound(11);
              navigation.navigate("Christmas");
            }}>
              <Image
                style={styles.picture}
                source={require("../assets/24/Poems/Christmas.png")}
              />
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

Poems.navigationOptions = () => {(
    title:'Poems'
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
