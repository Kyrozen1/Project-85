import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen.js'
import DashBoardScreen from './screens/DashBoardScreen.js'

import firebase from "firebase";
import {firebaseConfig} from './Config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashBoardScreen: DashBoardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return <AppNavigator/>
}