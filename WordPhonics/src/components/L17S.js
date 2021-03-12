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

export default function L17S({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/17/1a.png'),
      require('../assets/17/2a.png'),
      require('../assets/17/3a.png'),
      require('../assets/17/4a.png'),
      require('../assets/17/5a.png'),
      require('../assets/17/6a.png'),
      require('../assets/17/7a.png'),
      require('../assets/17/8a.png'),
      require('../assets/17/9a.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'He had a nose like an elephant trunk',
      "When she's angry, she's like a bear",
      "The police man acted like a clown",
      'Her fingers were as cold as icicles',
      'When he opened his mouth, he looked like an alligator',
      'She seemed to have roses in her cheeks',
      'He eats like a wolf',
      'She seems nice, but is sneaky as a snake',
      'When he proposed, she felt like she was on cloud 9',
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/17/17intro.mp3"),
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
        sound1 = new Sound(require("../assets/17/1a.mp3"),
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
        sound2 = new Sound(require("../assets/17/2a.mp3"),
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
        sound3 = new Sound(require("../assets/17/3a.mp3"),
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
        sound4 = new Sound(require("../assets/17/4a.mp3"),
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
        sound5 = new Sound(require("../assets/17/5a.mp3"),
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
        sound6 = new Sound(require("../assets/17/6a.mp3"),
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
        sound7 = new Sound(require("../assets/17/7a.mp3"),
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
        sound8 = new Sound(require("../assets/17/8a.mp3"),
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
        sound9 = new Sound(require("../assets/17/9a.mp3"),
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
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              A similie compares two different things
              and says they are similar using comparitive
              words such as like, as, or seems
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
          <TouchableOpacity
            onPress={() => {navigation.navigate("Q17M1")}} 
            style={styles.quizButton}>
            <Text style={styles.quiz}>Q1</Text>
          </TouchableOpacity>
        </View>
        </>
    );
}

L17S.navigationOptions = () => {(
    title:'L17S'
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
