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

export default function L14({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/14/be-bee.png'),
      require('../assets/14/horse-hoarse.png'),
      require('../assets/14/I-eye.png'),
      require('../assets/14/meet-meat.png'),
      require('../assets/14/one-won.png'),
      require('../assets/14/peek-peak.png'),
      require('../assets/14/plane-plain.png'),
      require('../assets/14/sale-sail.png'),
      require('../assets/14/see-sea.png'),
      require('../assets/14/wood-would.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'be, bee',
      'horse, hoarse',
      'I, eye',
      'meet, meat',
      'one, won',
      'peek, peak',
      'plane, plain',
      'sale, sail',
      'see, sea',
      'would, wood',
    ];
  //list of words that come second
  const words2 =
    [
      "What if I don't want to be as busy as a bee?",
      "My horse didn't come when I called because my voice was too hoarse.",
      'I stuck my finger in my eye',
      "Meet me at the car and we'll go buy some buffalo meat.",
      'Which one won?',
      "If you peek through the clouds you can see the tip top of the mountain peak.",
      "I don't need to fly in a fancy plane just a plain plane will be good enough for me.",
      "I bought my boat's sail at a boat sale",
      'I can see the sea from here.',
      'Would you rather cook hot dogs on a wood fire or in a microwave?',
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9,sound10,sound101,sound102,sound103,sound104,
      sound105,sound106,sound107,sound108,sound109,sound110;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/14/14intro.mp3"),
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
        sound1 = new Sound(require("../assets/14/be_bee.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
              sound101 = new Sound(require("../assets/14/be_bee_2.mp3"),
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
        sound2 = new Sound(require("../assets/14/horse-hoarse.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
              sound102 = new Sound(require("../assets/14/horse-hoarse_2.mp3"),
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
        sound3 = new Sound(require("../assets/14/I-eye.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound3.play(() => {
              sound3.release();
              sound103 = new Sound(require("../assets/14/I_eye_2.mp3"),
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
        sound4 = new Sound(require("../assets/14/meet_meat.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound4.play(() => {
              sound4.release();
              sound104 = new Sound(require("../assets/14/meet-meat_2.mp3"),
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
        sound5 = new Sound(require("../assets/14/one-won.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound5.play(() => {
              sound5.release();
              sound105 = new Sound(require("../assets/14/one-won_2.mp3"),
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
        sound6 = new Sound(require("../assets/14/peek-peak.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound6.play(() => {
             sound6.release();
             sound106 = new Sound(require("../assets/14/peek-peak_2.mp3"),
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
        sound7 = new Sound(require("../assets/14/plane-plain_Idontneedtofly.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound7.play(() => {
              sound7.release();
              sound107 = new Sound(require("../assets/14/plane-plain_2.mp3"),
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
        sound8 = new Sound(require("../assets/14/sale-sail.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound8.play(() => {
              sound8.release();
              sound108 = new Sound(require("../assets/14/sale_sail_2.mp3"),
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
        sound9 = new Sound(require("../assets/14/see-sea.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound9.play(() => {
              sound9.release();
              sound109 = new Sound(require("../assets/14/see-sea_2.mp3"),
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
        sound10 = new Sound(require("../assets/14/wood-would.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound10.play(() => {
              sound10.release();
              sound110 = new Sound(require("../assets/14/wood-would_2.mp3"),
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
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Homophones or Homonyms are words that sound the
              same but have different spellings and meanings.
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

L14.navigationOptions = () => {(
    title:'L14'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingVertical: 12,
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
    marginTop: 15,
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
