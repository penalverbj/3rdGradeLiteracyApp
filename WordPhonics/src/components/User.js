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
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function User() {
  const navigation = useNavigation();
  const [coins, setCoins] = useState(0);

  //pre-determined setters for coins to use outside this class
  var addGold = () => {
    setCoins(coins + 2);
  };
  var addSilver = () => {
    setCoins(coins + 1);
  };

  /*
  when we have a way to check
  if a unit is finished we will
  finish the conditions
  */
  function Lesson(props) {
    //if lesson complete
    // return(
    //   <View style={styles.lessonContainer}>
    //     <Text style={styles.lesson}> {props.text} </Text>
    //     <Text style={[styles.check, {backgroundColor: "green"}]}></Text>
    //   </View>
    // );
    //if lesson is not complete
    return (
      <View style={styles.lessonContainer}>
        <Text style={styles.lesson}> {props.text} </Text>
        <Text style={[styles.check, {backgroundColor: "red"}]}></Text>
      </View>
    );
  }
  return(
    <View style={styles.startContainer}>
      <Text style={styles.section}> Coins </Text>
      <View style={styles.subContainer}>
        <Image
          source={require('../assets/gold.png')}
          style={styles.image}
        />
        <Text style={styles.subsection}> : {coins} </Text>
      </View>
      <Text style={styles.section}> Units Completed</Text>
      <SafeAreaView style={styles.subContainer}>
        <ScrollView>
          <Lesson num={12} text={"12: synonyms"}/>
          <Lesson num={13} text={"13: antonyms"}/>
          <Lesson num={14} text={"14: homophones"}/>
          <Lesson num={15} text={"15: puns"}/>
          <Lesson num={16} text={"16: homographs"}/>
          <Lesson num={17} text={"17: similies & metaphors"}/>
          <Lesson num={18} text={"18: onomatopeia"}/>
          <Lesson num={19} text={"19: irony or sarcasm"}/>
          <Lesson num={20} text={"20: personification"}/>
          <Lesson num={21} text={"21: hyperbole"}/>
          <Lesson num={22} text={"22: euphemism"}/>
          <Lesson num={23} text={"23: oxymoron"}/>
          <Lesson num={24} text={"24: rhyme"}/>
          <Lesson num={25} text={"25: alliteration"}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

User.navigationOptions = () => {(
    title:'User'
)}
const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  section: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    borderBottomWidth: 1,
  },
  subsection: {
    fontSize: 30,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    width: 90,
    height: 50,
  },
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 0,
  },
  lesson: {
    fontSize: 20,
  },
  check: {
    width: 20,
  },
});
