import 'es6-symbol/implement'; // put this libarry first as compare to the below libraries i don't know why but I do this way and find the next error to shif down version to Moxb 4
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/app.navigator';
import Provider from 'mobx-react'; //provide stores to various componenets with in application in this applicatin that will be splash screen
import stores from './app/stores';



export default class App extends React.Component {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}

