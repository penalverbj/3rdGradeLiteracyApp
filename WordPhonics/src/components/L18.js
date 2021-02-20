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

export default function L18({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/18/1_buzz.png'),
      require('../assets/18/2_croak.png'),
      require('../assets/18/3_hiccup.png'),
      require('../assets/18/4_hoot.png'),
      require('../assets/18/5_meow.png'),
      require('../assets/18/6_moo.png'),
      require('../assets/18/7_oink.png'),
      require('../assets/18/8_pop.png'),
      require('../assets/18/9_quack.png'),
      require('../assets/18/10_slurp.png'),
      require('../assets/18/11_tap.png'),
      require('../assets/18/12_thud.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'buzz',
      'croak',
      'hiccup',
      'hoot',
      'meow',
      'moo',
      'oink',
      'pop',
      'quack',
      'slurp',
      'tap',
      'thud',
    ];
  //list of words that come second
  const words2 =
    [
      "I get nervous when I hear a bee buzz by my ear.",
      "A bullfrog can croak louder than any toad i've ever heard.",
      "I feel miserable whenever I start to hiccup.",
      "Who heard the owl hoot who-who-whoooooo?",
      "Cats usually say meow, kittens usually say mew, but both like to purr.",
      "When I hear a moo I look for a cow.",
      "Every time I invite him for lunch I expect him to say 'oink oink oink'.",
      "I love the sound of popcorn going pop pop in the microwave.",
      "When my voice is hoarse they say I sound like a quacking duck.",
      "It's impolite to slurp your soup.",
      "Sometimes you know a blind person is near you when you hear a cane go tap tap tap.",
      "When I slipped on the stair my head went thud.",
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9,sound10,sound11,sound12,sound101,sound102,sound103,sound104,
      sound105,sound106,sound107,sound108,sound109,sound110,sound111,sound112;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/18/18intro.mp3"),
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
        sound1 = new Sound(require("../assets/18/1_buzz.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
              sound101 = new Sound(require("../assets/18/1_buzz2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound101.play(() => {
                    sound101.release();
                  });
                });
            });
          });
        break;
      case 2:
        sound2 = new Sound(require("../assets/18/2_croak.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
              sound102 = new Sound(require("../assets/18/2_croak2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound102.play(() => {
                    sound102.release();
                  });
                });
            });
          });
        break;
      case 3:
        sound3 = new Sound(require("../assets/18/3_hiccup.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound3.play(() => {
              sound3.release();
              sound103 = new Sound(require("../assets/18/3_hiccup2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound103.play(() => {
                    sound103.release();
                  });
                });
            });
          });
        break;
      case 4:
        sound4 = new Sound(require("../assets/18/4_hoot.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound4.play(() => {
              sound4.release();
              sound104 = new Sound(require("../assets/18/4_hoot2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound104.play(() => {
                    sound104.release();
                  });
                });
            });
          });
        break;
      case 5:
        sound5 = new Sound(require("../assets/18/5_meow.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound5.play(() => {
              sound5.release();
              sound105 = new Sound(require("../assets/18/5_meow2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound105.play(() => {
                    sound105.release();
                  });
                });
            });
          });
        break;
      case 6:
        sound6 = new Sound(require("../assets/18/6_moo.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound6.play(() => {
             sound6.release();
             sound106 = new Sound(require("../assets/18/6_moo2.mp3"),
             (error, sound) => {
                 if (error) {
                   alert('error' + error.message);
                   return;
                 }
                 sound106.play(() => {
                   sound106.release();
                 });
               });
            });
          });
        break;
      case 7:
        sound7 = new Sound(require("../assets/18/7_oink.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound7.play(() => {
              sound7.release();
              sound107 = new Sound(require("../assets/18/7_oink2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound107.play(() => {
                    sound107.release();
                  });
                });
            });
          });
        break;
      case 8:
        sound8 = new Sound(require("../assets/18/8_pop.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound8.play(() => {
              sound8.release();
              sound108 = new Sound(require("../assets/18/8_pop2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound108.play(() => {
                    sound108.release();
                  });
                });
            });
          });
        break;
      case 9:
        sound9 = new Sound(require("../assets/18/9_quack.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound9.play(() => {
              sound9.release();
              sound109 = new Sound(require("../assets/18/9_quack2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound109.play(() => {
                    sound109.release();
                  });
                });
            });
          });
        break;
      case 10:
        sound10 = new Sound(require("../assets/18/10_slurp.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound10.play(() => {
              sound10.release();
              sound110 = new Sound(require("../assets/18/10_slurp2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound110.play(() => {
                    sound110.release();
                  });
                });
            });
          });
        break;
      case 11:
        sound11 = new Sound(require("../assets/18/11_tap.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound11.play(() => {
              sound11.release();
              sound111 = new Sound(require("../assets/18/11_tap2.mp3"),
              (error, sound) => {
                  if (error) {
                    alert('error' + error.message);
                    return;
                  }
                  sound111.play(() => {
                    sound111.release();
                  });
                });
            });
          });
        break;
        case 12:
          sound12 = new Sound(require("../assets/18/12_thud.mp3"),
          (error, sound) => {
              if (error) {
                alert('error' + error.message);
                return;
              }
              sound12.play(() => {
                sound12.release();
                sound112 = new Sound(require("../assets/18/12_thud2.mp3"),
                (error, sound) => {
                    if (error) {
                      alert('error' + error.message);
                      return;
                    }
                    sound112.play(() => {
                      sound112.release();
                    });
                  });
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
    if (sound101) {sound101.stop();}
    if (sound102) {sound101.stop();}
    if (sound103) {sound101.stop();}
    if (sound104) {sound101.stop();}
    if (sound105) {sound101.stop();}
    if (sound106) {sound101.stop();}
    if (sound107) {sound101.stop();}
    if (sound108) {sound101.stop();}
    if (sound109) {sound101.stop();}
    if (sound110) {sound101.stop();}
    if (sound111) {sound111.stop();}
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Onomatopoeia means that the sound of a
              word is very close to what the word means.
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

L18.navigationOptions = () => {(
    title:'L18'
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
    paddingBottom: 50,
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
