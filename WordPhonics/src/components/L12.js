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
  //counter for the example we are on
  const [example, setExample] = useState(1);
  //plays definition of synonym
  var playDef = () => {
    var sound1 = new Sound(require("../assets/12/12intro.mp3"),
    (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
  }
  //plays the audio associated with each example
  var playEx = (num) => {
    switch (num) {
      case 1:
        var sound1 = new Sound(require("../assets/12/begin_start.mp3"),
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
        var sound1 = new Sound(require("../assets/12/easy_simple.mp3"),
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
      case 3:
        var sound1 = new Sound(require("../assets/12/end_finish.mp3"),
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
      case 4:
        var sound1 = new Sound(require("../assets/12/evening_dusk.mp3"),
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
      case 5:
        var sound1 = new Sound(require("../assets/12/fix_mend.mp3"),
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
      case 6:
        var sound1 = new Sound(require("../assets/12/hard_difficult.mp3"),
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
      case 7:
        var sound1 = new Sound(require("../assets/12/morning_dawn.mp3"),
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
      case 8:
        var sound1 = new Sound(require("../assets/12/sad_unhappy.mp3"),
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
      case 9:
        var sound1 = new Sound(require("../assets/12/shove_push.mp3"),
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
      case 10:
        var sound1 = new Sound(require("../assets/12/shut_close.mp3"),
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
      case 11:
        var sound1 = new Sound(require("../assets/12/small_little.mp3"),
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
      case 12:
        var sound1 = new Sound(require("../assets/12/stop_halt.mp3"),
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
      case 13:
        var sound1 = new Sound(require("../assets/12/yell_shout.mp3"),
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
    }
  }
  if (example == 1) {
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => playDef()}>
            <Text style={styles.subtitle}>
              Synonyms are words which have the same
              or close to the same meaning.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => setExample(13)} //handles looping to back
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-left.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playEx(example)}
          >
            <Image
              source={require('../assets/12/begin_start.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(2)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>begin</Text>
          <Text style={styles.words}>start</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
    );
  } else if (example == 2) {
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => playDef()}>
            <Text style={styles.subtitle}>
              Synonyms are words which have the same
              or close to the same meaning.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => setExample(1)}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-left.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playEx(example)}
          >
            <Image
              source={require('../assets/12/easy_simple.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(3)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>easy</Text>
          <Text style={styles.words}>simple</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  }
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
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    //marginHorizontal: 5,
    marginTop: 130,
  },
  arrow: {
    height: 30,
    width: 30,
  },
  picture: {
    height: 300,
    width: 275,
  },
  words: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 50,
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
