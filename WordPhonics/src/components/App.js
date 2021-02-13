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
import L12 from './L12';
import L13 from './L13';
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
