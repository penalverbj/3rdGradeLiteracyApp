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

export default function Kittens({navigation}) {
  const [example, setExample] = useState(0);
  const imgs =
    [
      require("../assets/24/Nursery-Rhymes/Kittens2.png"),
      require("../assets/24/Nursery-Rhymes/Kittens3.png"),
      require("../assets/24/Nursery-Rhymes/Kittens4.png"),
      require("../assets/24/Nursery-Rhymes/Kittens5.png"),
      require("../assets/24/Nursery-Rhymes/Kittens6.png"),
      require("../assets/24/Nursery-Rhymes/Kittens7.png"),
      require("../assets/24/Nursery-Rhymes/Kittens8.png"),
    ]
    return (
      <View style={styles.startContainer}>
          <Image
          style={styles.picture}
          source={imgs[example]}
          />
        <TouchableOpacity
          onPress={() => {
            setExample(example === 0 ? imgs.length : example - 1);
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
            setExample(example === imgs.length - 1 ? 0 : example + 1);
          }}
          style={styles.arrowContainer}
        >
          <Image
            source={require('../assets/arrow-right.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    );
}

Kittens.navigationOptions = () => {(
    title:'Kittens'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingVertical: 15,
    flexWrap: 'wrap',
  },
  picture: {
    alignSelf: 'center',
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    margin: 50,
  },
  arrow: {
    height: 35,
    width: 35,
  },
});
