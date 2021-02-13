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

export default function L12(props, {navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/12/begin_start.png'),
      require('../assets/12/easy_simple.png'),
      require('../assets/12/end_finish.png'),
      require('../assets/12/evening_dusk.png'),
      require('../assets/12/fix_mend.png'),
      require('../assets/12/hard_difficult.png'),
      require('../assets/12/morning_dawn.png'),
      require('../assets/12/sad_unhappy.png'),
      require('../assets/12/shove_push.png'),
      require('../assets/12/shut_close.png'),
      require('../assets/12/small_little.png'),
      require('../assets/12/stop_halt.png'),
      require('../assets/12/yell_shout.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'begin',
      'easy',
      'end',
      'evening',
      'fix',
      'hard',
      'morning',
      'sad',
      'shove',
      'shut',
      'small',
      'stop',
      'yell',
    ];
  //list of words that come second
  const words2 =
    [
      'start',
      'simple',
      'finish',
      'dusk',
      'mend',
      'difficult',
      'dawn',
      'unhappy',
      'push',
      'close',
      'little',
      'halt',
      'shout',
    ];
  //sound variables
  var sound0, sound1, sound2, sound3, sound4, sound5,
      sound6, sound7, sound8, sound9, sound10, sound11,
      sound12, sound13;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/12/12intro.mp3"),
    (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound0.play(() => {
          sound0.release();
        });
      });
  }
  //plays the audio associated with each example
  const playEx = (num) => {
    switch (num) {
      case 1:
        sound1 = new Sound(require("../assets/12/begin_start.mp3"),
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
        sound2 = new Sound(require("../assets/12/easy_simple.mp3"),
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
        sound3 = new Sound(require("../assets/12/end_finish.mp3"),
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
        sound4 = new Sound(require("../assets/12/evening_dusk.mp3"),
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
        sound5 = new Sound(require("../assets/12/fix_mend.mp3"),
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
        sound6 = new Sound(require("../assets/12/hard_difficult.mp3"),
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
        sound7 = new Sound(require("../assets/12/morning_dawn.mp3"),
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
        sound8 = new Sound(require("../assets/12/sad_unhappy.mp3"),
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
        sound9 = new Sound(require("../assets/12/shove_push.mp3"),
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
        sound10 = new Sound(require("../assets/12/shut_close.mp3"),
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
      case 11:
        sound11 = new Sound(require("../assets/12/small_little.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound11.play(() => {
              sound11.release();
            });
          });
        break;
      case 12:
        sound12 = new Sound(require("../assets/12/stop_halt.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound12.play(() => {
              sound12.release();
            });
          });
        break;
      case 13:
        sound13 = new Sound(require("../assets/12/yell_shout.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound13.play(() => {
              sound13.release();
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
    if (sound11) {sound11.stop();}
    if (sound12) {sound12.stop();}
    if (sound13) {sound13.stop();}
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Synonyms are words which have the same
              or close to the same meaning.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {
              stopSounds();
              setExample(example === 1 ? imgs.length : example - 1);
              playEx(example === 1 ? imgs.length : example - 1);
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
              stopSounds();
              setExample(example === imgs.length ? 1 : example + 1);
              playEx(example === imgs.length ? 1 : example + 1);
            }}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>{words1[example - 1]}</Text>
          <Text style={styles.words}>{words2[example - 1]}</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
    );
}

L12.navigationOptions = () => {(
    title:'L12'
)}


L12.propTypes = {

}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingBottom: 50,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 50,
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
    //marginHorizontal: 5,
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
    marginTop: 30,
    marginHorizontal: 50,
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
    backgroundColor: '#ADFF2F',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  quiz: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
