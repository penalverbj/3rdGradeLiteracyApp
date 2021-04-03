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
  TextInput,
  Button,
} from 'react-native';
import LoginScreen from './LoginScreen';
import MainMenuScreen from './MainMenuScreen';
import NavigationBar from './NavigationBar';
import User from './User';
import L12 from './L12';
import L13 from './L13';
import L14 from './L14';
import L16 from './L16';
import L17 from './L17';
import L17S from './L17S';
import L17M from './L17M';
import L17SM from './L17SM';
import L18 from './L18';
import L19 from './L19';
import L20 from './L20';
import L21 from './L21';
import L22 from './L22';
import L23 from './L23';
import L24 from './L24';
import L25 from './L25';
import LittleJack from './LittleJack';
import Dumpty from './Dumpty';
import HalfRhyme from './HalfRhyme';
import Diddle from './Diddle';
import OldWoman from './OldWoman';
import Star from './Star';
import Willie from './Willie';
import KingCole from './KingCole';
import Peter from './Peter';
import Sixpence from './Sixpence';
import Kittens from './Kittens';
import House from './House';
import Nursery from './Nursery';
import Poems from './Poems';
import Halfway from './Halfway';
import Shadow from './Shadow';
import Bedspread from './Bedspread';
import Owl from './Owl';
import Orphan from './Orphan';
import Duel from './Duel';
import Wynken from './Wynken';
import Boy from './Boy';
import Blacksmith from './Blacksmith';
import Casey from './Casey';
import Lochinvar from './Lochinvar';
import Christmas from './Christmas';
import Q12M1 from './Q12M1';
import Q12M2 from './Q12M2';
import Q13M1 from './Q13M1';
import Q13M2 from './Q13M2';
import Q14M1 from './Q14M1';
import Q14M2 from './Q14M2';
import Q15 from './Q15';
import Q16M1 from './Q16M1';
import Q16M2 from './Q16M2';
import Q17M1 from './Q17M1';
import Q17M2 from './Q17M2';
import Q17M3 from './Q17M3';
import Q18M1 from './Q18M1';
import Q18M2 from './Q18M2';
import Q19M1 from './Q19M1';
import Q20M1 from './Q20M1';
import Q21M1 from './Q21M1';
import Q21M2 from './Q21M2';
import Q22M1 from './Q22M1';
import Q23M1 from './Q23M1';
import Q23M2 from './Q23M2';
import Q25M1 from './Q25M1';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export default function App({navigation}) {
  //Logic for sign in screen in the future
  //state acts as an object describing the current situation of login
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
          {state.userToken == null ? ( //If user is not logged in
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="MainMenu"
                component={MainMenuScreen}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                  headerLeft: () => ( //back button, in main does nothing
                    <TouchableOpacity onPress={() => null}>
                      <Image
                        source={require('../assets/arrow-left.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  )
                }}
              />
              <Stack.Screen
                name="User"
                component={User}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L12"
                component={L12}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L13"
                component={L13}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L14"
                component={L14}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L16"
                component={L16}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L17"
                component={L17}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L17S"
                component={L17S}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L17M"
                component={L17M}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L17SM"
                component={L17SM}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L18"
                component={L18}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L19"
                component={L19}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L20"
                component={L20}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L21"
                component={L21}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L22"
                component={L22}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L23"
                component={L23}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L24"
                component={L24}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="HalfRhyme"
                component={HalfRhyme}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Nursery"
                component={Nursery}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="LittleJack"
                component={LittleJack}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Dumpty"
                component={Dumpty}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Diddle"
                component={Diddle}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="OldWoman"
                component={OldWoman}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Star"
                component={Star}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Willie"
                component={Willie}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="KingCole"
                component={KingCole}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Peter"
                component={Peter}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Sixpence"
                component={Sixpence}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Kittens"
                component={Kittens}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="House"
                component={House}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Poems"
                component={Poems}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Halfway"
                component={Halfway}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Shadow"
                component={Shadow}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Bedspread"
                component={Bedspread}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Owl"
                component={Owl}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Orphan"
                component={Orphan}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Duel"
                component={Duel}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Wynken"
                component={Wynken}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Boy"
                component={Boy}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Blacksmith"
                component={Blacksmith}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Casey"
                component={Casey}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Lochinvar"
                component={Lochinvar}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Christmas"
                component={Christmas}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q12M1"
                component={Q12M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q12M2"
                component={Q12M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q13M1"
                component={Q13M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q13M2"
                component={Q13M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q14M1"
                component={Q14M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q14M2"
                component={Q14M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q15"
                component={Q15}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q16M1"
                component={Q16M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q16M2"
                component={Q16M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q17M1"
                component={Q17M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q17M2"
                component={Q17M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q17M3"
                component={Q17M3}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q18M1"
                component={Q18M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q18M2"
                component={Q18M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q19M1"
                component={Q19M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q20M1"
                component={Q20M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q21M1"
                component={Q21M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q21M2"
                component={Q21M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q22M1"
                component={Q22M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q23M1"
                component={Q23M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q23M2"
                component={Q23M2}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Q25M1"
                component={Q25M1}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="L25"
                component={L25}
                options={{
                  headerTitle: props => <NavigationBar {...props} />, //Logo
                  headerStyle: {backgroundColor: '#a7d8e8'},
                  headerRight: () => ( //log out button
                    <TouchableOpacity onPress={() => authContext.signOut()}>
                      <Image
                        source={require('../assets/log-out.png')}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 10,
  },
});
