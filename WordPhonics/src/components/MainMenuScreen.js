/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function MainMenuScreen(props, {navigation}) {
  return (
    <>
      <View style={styles.startContainer}>
        <Text style={styles.section}>Lessons</Text>
        <FlatList>
        </FlatList>
      </View>
    </>
  );
}

// MainMenuScreen.navigationOptions = () => {(
//
// )}

MainMenuScreen.propTypes = {

}

const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'flex-start',
    flex: 4,
    backgroundColor: '#FFFAF0',
  },
  section: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  },
});
