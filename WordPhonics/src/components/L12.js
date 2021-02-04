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
  const [example, setExample] = useState(1);
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
          onPress={() => setExample((example - 1) > 1 ? (example - 1) : 13)}
          style={styles.arrow}
        >
          <Image
            source={require('../assets/arrow-left.png')}
            style={styles.image}
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
          onPress={() => setExample((example + 1) < 13 ? (example + 1) : 1)}
          style={styles.arrow}
        >
          <Image
            source={require('../assets/arrow-right.png')}
            style={styles.image}
          />
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
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  arrow: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 15,
    marginHorizontal: 5,
    marginTop: 130,
  },
  image: {
    height: 35,
    width: 35,
  },
  picture: {
    height: 300,
    width: 200,
  }
});
