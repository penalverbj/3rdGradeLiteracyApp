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
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


export default function LessonScreen(props, {navigation}) {
  return (
    <>
      <View>
        //empty view
      </View>
      </>
    );
}

LessonScreen.navigationOptions = () => {(
    title:'LessonScreen'
)}


LessonScreen.propTypes = {

}



const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#a7d8e8',
  }
});
