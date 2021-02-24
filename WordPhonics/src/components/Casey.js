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

export default function Casey({navigation}) {
  const [example, setExample] = useState(0);
  const imgs =
    [
      require("../assets/24/Poems/Casey2.png"),
      require("../assets/24/Poems/Casey3.png"),
      require("../assets/24/Poems/Casey4.png"),
      require("../assets/24/Poems/Casey5.png"),
      require("../assets/24/Poems/Casey6.png"),
      require("../assets/24/Poems/Casey7.png"),
      require("../assets/24/Poems/Casey8.png"),
      require("../assets/24/Poems/Casey9.png"),
      require("../assets/24/Poems/Casey10.png"),
      require("../assets/24/Poems/Casey11.png"),
      require("../assets/24/Poems/Casey12.png"),
      require("../assets/24/Poems/Casey13.png"),
      require("../assets/24/Poems/Casey14.png"),
      require("../assets/24/Poems/Casey15.png"),
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

Casey.navigationOptions = () => {(
    title:'Casey'
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
