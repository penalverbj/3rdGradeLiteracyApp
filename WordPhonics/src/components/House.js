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

export default function House({navigation}) {
  const [example, setExample] = useState(0);
  const imgs =
    [
      require("../assets/24/Nursery-Rhymes/House2.png"),
      require("../assets/24/Nursery-Rhymes/House3.png"),
      require("../assets/24/Nursery-Rhymes/House4.png"),
      require("../assets/24/Nursery-Rhymes/House5.png"),
      require("../assets/24/Nursery-Rhymes/House6.png"),
      require("../assets/24/Nursery-Rhymes/House7.png"),
      require("../assets/24/Nursery-Rhymes/House8.png"),
      require("../assets/24/Nursery-Rhymes/House9.png"),
      require("../assets/24/Nursery-Rhymes/House10.png"),
      require("../assets/24/Nursery-Rhymes/House11.png"),
      require("../assets/24/Nursery-Rhymes/House12.png"),
      require("../assets/24/Nursery-Rhymes/House13.png"),
      require("../assets/24/Nursery-Rhymes/House14.png"),
      require("../assets/24/Nursery-Rhymes/House15.png"),
      require("../assets/24/Nursery-Rhymes/House16.png"),
      require("../assets/24/Nursery-Rhymes/House17.png"),
      require("../assets/24/Nursery-Rhymes/House18.png"),
      require("../assets/24/Nursery-Rhymes/House19.png"),
      require("../assets/24/Nursery-Rhymes/House20.png"),
      require("../assets/24/Nursery-Rhymes/House21.png"),
      require("../assets/24/Nursery-Rhymes/House22.png"),
      require("../assets/24/Nursery-Rhymes/House23.png"),
      require("../assets/24/Nursery-Rhymes/House24.png"),
      require("../assets/24/Nursery-Rhymes/House25.png"),
      require("../assets/24/Nursery-Rhymes/House26.png"),
      require("../assets/24/Nursery-Rhymes/House27.png"),
      require("../assets/24/Nursery-Rhymes/House28.png"),
      require("../assets/24/Nursery-Rhymes/House29.png"),
      require("../assets/24/Nursery-Rhymes/House30.png"),
      require("../assets/24/Nursery-Rhymes/House31.png"),
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

House.navigationOptions = () => {(
    title:'House'
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
    width: 350,
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
