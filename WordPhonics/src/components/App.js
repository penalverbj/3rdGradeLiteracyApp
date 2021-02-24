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
