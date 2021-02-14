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

export default function L16({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/16/bark-bark.png'),
      require('../assets/16/bat-bat.png'),
      require('../assets/16/fly-fly.png'),
      require('../assets/16/gum-gum.png'),
      require('../assets/16/jam-jam.png'),
      require('../assets/16/pen-pen.png'),
      require('../assets/16/pitcher-pitcher.png'),
      require('../assets/16/rest-rest.png'),
      require('../assets/16/seal-seal.png'),
      require('../assets/16/second-second.png'),
      require('../assets/16/watch-watch.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'bark',
      'bat',
      'fly',
      'gum',
      'jam',
      'pen',
      'pitcher',
      'rest',
      'seal',
      'second',
      'watch',
    ];
  //list of words that come second
  const words2 =
    [
      "My dog will bark when i throw a piece of tree bark for him to chase.",
      "He used his baseball bat to chase away a bat.",
      'Did you see the fly fly in his mouth?',
      "A piece of bubble gum got stuck between two teeth on my gum.",
      'I ate my bread and jam when our car was stopped in a traffic jam.',
      "With his pen he counted how many pigs were in the pen.",
      "The pitcher was so thirsty he drank a whole pitcher of lemonade.",
      "Rest quietly until the rest of the children come.",
      'After you seal each letter use the stamps with the seal balancing a ball.',
      'She came in second in the race and lost by only one second.',
      "Watch me while i hide my dad's watch in his shoe.",
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9,sound10,sound11,sound101,sound102,sound103,sound104,
      sound105,sound106,sound107,sound108,sound109,sound110,sound111;
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
        sound1 = new Sound(require("../assets/16/bark.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
              sound101 = new Sound(require("../assets/16/bark_2.mp3"),
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
        sound2 = new Sound(require("../assets/16/bat.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
              sound102 = new Sound(require("../assets/16/bat_2.mp3"),
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
        sound3 = new Sound(require("../assets/16/fly.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound3.play(() => {
              sound3.release();
              sound103 = new Sound(require("../assets/16/fly_2.mp3"),
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
        sound4 = new Sound(require("../assets/16/gum.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound4.play(() => {
              sound4.release();
              sound104 = new Sound(require("../assets/16/gum_2.mp3"),
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
        sound5 = new Sound(require("../assets/16/jam.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound5.play(() => {
              sound5.release();
              sound105 = new Sound(require("../assets/16/jam_2.mp3"),
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
        sound6 = new Sound(require("../assets/16/pen.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound6.play(() => {
             sound6.release();
             sound106 = new Sound(require("../assets/16/pen_2.mp3"),
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
        sound7 = new Sound(require("../assets/16/pitcher.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound7.play(() => {
              sound7.release();
              sound107 = new Sound(require("../assets/16/pitcher_2.mp3"),
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
        sound8 = new Sound(require("../assets/16/rest.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound8.play(() => {
              sound8.release();
              sound108 = new Sound(require("../assets/16/rest_2.mp3"),
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
        sound9 = new Sound(require("../assets/16/seal.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound9.play(() => {
              sound9.release();
              sound109 = new Sound(require("../assets/16/seal_2.mp3"),
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
        sound10 = new Sound(require("../assets/16/second.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound10.play(() => {
              sound10.release();
              sound110 = new Sound(require("../assets/16/second_2.mp3"),
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
        sound11 = new Sound(require("../assets/16/watch.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound11.play(() => {
              sound11.release();
              sound111 = new Sound(require("../assets/16/watch_2.mp3"),
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
              Homophones or Homonyms are words that sound the
              same but have different spellings and meanings.
              Homo means same and graph means writing or picture.
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

L16.navigationOptions = () => {(
    title:'L16'
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
