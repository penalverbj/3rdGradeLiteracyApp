/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Sound from 'react-native-sound';

export default function L19({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/19/1.png'),
      require('../assets/19/2.png'),
      require('../assets/19/3.png'),
      require('../assets/19/4.png'),
      require('../assets/19/5.png'),
      require('../assets/19/6.png'),
      require('../assets/19/7.png'),
      require('../assets/19/8.png'),
      require('../assets/19/9.png'),
      require('../assets/19/10.png'),
    ];
  //list of words that come first
  const words1 =
    [
      "I'm so happy I tried to learn to roller skate.",
      "At last he found someone he can win an argument against.",
      "Of course I'm glad the teacher gave a pop test.",
      "She seems so pleased to have found a cockroach in her shoe.",
      "Her hair is always perfect.",
      "His family must be so proud.",
      "He's extremely lucky to have found such a good job.",
      "His mother will be so thrilled when he gets home.",
      "She's been on so many diets that she's an expert on losing weight.",
      "He'd be the perfect coach to teach you how to skateboard.",
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9, sound10;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/19/19intro.mp3"),
    (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound0.play(() => {
          //sound0.release();
        });
      });
  }
  //plays the audio associated with each example
  const playEx = (num) => {
    stopSounds();
    switch (num) {
      case 1:
        sound1 = new Sound(require("../assets/19/1a.mp3"),
        (error, sound) => {
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
        sound2 = new Sound(require("../assets/19/2a.mp3"),
        (error, sound) => {
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
        sound3 = new Sound(require("../assets/19/3a.mp3"),
        (error, sound) => {
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
        sound4 = new Sound(require("../assets/19/4a.mp3"),
        (error, sound) => {
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
        sound5 = new Sound(require("../assets/19/5a.mp3"),
        (error, sound) => {
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
        sound6 = new Sound(require("../assets/19/6a.mp3"),
        (error, sound) => {
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
        sound7 = new Sound(require("../assets/19/7a.mp3"),
        (error, sound) => {
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
        sound8 = new Sound(require("../assets/19/8a.mp3"),
        (error, sound) => {
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
        sound9 = new Sound(require("../assets/19/9a.mp3"),
        (error, sound) => {
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
          sound10 = new Sound(require("../assets/19/10a.mp3"),
          (error, sound) => {
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
  //stops any sound playing
  const stopSounds = () => {
    if (sound0) {sound0.stop();}
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
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Irony or sarcasm is saying something the reader or
              listener is supposed to know is not really true,
              and is usually the opposite of what's true.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {
              setExample(example === 1 ? imgs.length : example - 1);
              playEx(example=== 1 ? imgs.length : example - 1);
              stopSounds();
            }}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-left.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              stopSounds();
              playEx(example);
            }}
          >
            <Image
              source={imgs[example - 1]}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setExample(example === imgs.length ? 1 : example + 1);
              playEx(example === imgs.length ? 1 : example + 1);
              stopSounds();
            }}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>{words1[example - 1]}</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
    );
}

L19.navigationOptions = () => {(
    title:'L19'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 2,
    paddingBottom: 14,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 10,
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    marginTop: 130,
  },
  arrow: {
    height: 35,
    width: 35,
  },
  picture: {
    height: 250,
    width: 250,
    resizeMode: 'stretch',
  },
  words: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 70,
    flexDirection: 'row',
  },
  quizButton: {
    backgroundColor: '#bfe54e',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  quiz: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
