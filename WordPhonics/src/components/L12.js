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
  //I tried to do it dynamically so there wouldn't be so mch repeat code
  //but could not make it work. Maybe we can come back to this. -Jose
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
  } else if (example == 3) {
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
              onPress={() => setExample(2)}
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
                source={require('../assets/12/end_finish.png')}
                style={styles.picture}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setExample(4)} //handles looping to front
              style={styles.arrowContainer}
            >
              <Image
                source={require('../assets/arrow-right.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={styles.words}>end</Text>
            <Text style={styles.words}>finish</Text>
          </View>
          <View style={styles.quizContainer}>
            <TouchableOpacity onPress={null} style={styles.quizButton}>
              <Text style={styles.quiz}>?</Text>
            </TouchableOpacity>
          </View>
          </>
        );
  } else if (example == 4) {
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
              onPress={() => setExample(3)}
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
                source={require('../assets/12/evening_dusk.png')}
                style={styles.picture}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setExample(5)} //handles looping to front
              style={styles.arrowContainer}
            >
              <Image
                source={require('../assets/arrow-right.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={styles.words}>evening</Text>
            <Text style={styles.words}>dusk</Text>
          </View>
          <View style={styles.quizContainer}>
            <TouchableOpacity onPress={null} style={styles.quizButton}>
              <Text style={styles.quiz}>?</Text>
            </TouchableOpacity>
          </View>
          </>
        );
  } else if (example == 5) {
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
            onPress={() => setExample(4)}
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
              source={require('../assets/12/fix_mend.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(6)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>fix</Text>
          <Text style={styles.words}>mend</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 6) {
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
            onPress={() => setExample(5)}
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
              source={require('../assets/12/hard_difficult.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(7)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>hard</Text>
          <Text style={styles.words}>difficult</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 7) {
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
            onPress={() => setExample(6)}
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
              source={require('../assets/12/morning_dawn.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(8)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>morning</Text>
          <Text style={styles.words}>dawn</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 8) {
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
            onPress={() => setExample(7)}
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
              source={require('../assets/12/sad_unhappy.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(9)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>sad</Text>
          <Text style={styles.words}>unhappy</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 9) {
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
            onPress={() => setExample(8)}
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
              source={require('../assets/12/shove_push.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(10)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>shove</Text>
          <Text style={styles.words}>push</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 10) {
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
            onPress={() => setExample(9)}
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
              source={require('../assets/12/shut_close.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(11)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>shut</Text>
          <Text style={styles.words}>close</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 11) {
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
            onPress={() => setExample(10)}
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
              source={require('../assets/12/small_little.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(12)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>small</Text>
          <Text style={styles.words}>little</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 12) {
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
            onPress={() => setExample(11)}
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
              source={require('../assets/12/stop_halt.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(13)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>stop</Text>
          <Text style={styles.words}>halt</Text>
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={null} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
      );
  } else if (example == 13) {
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
            onPress={() => setExample(12)}
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
              source={require('../assets/12/yell_shout.png')}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setExample(1)} //handles looping to front
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>yell</Text>
          <Text style={styles.words}>shout</Text>
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
