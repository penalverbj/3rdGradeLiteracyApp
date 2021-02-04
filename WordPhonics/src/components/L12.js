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
          onPress={() => setExample(13)}
          style={styles.arrow}
        >
          <Image
            source={require('../assets/arrow-left.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setExample(13)}
          //style={styles.arrow}
        >
          <Image
            source={require('../assets/12/begin_start.png')}
            style={styles.picture}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setExample(2)}
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
