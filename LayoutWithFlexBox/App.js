import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


export default class App extends React.Component {

  _onPressSetting(){
    Alert.alert("You tapped the setting menu!");
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content} />
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button
              onPress={()=>{console.log("Home")}}
              title="Home"
              color="#2b475e"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={()=>{Alert.alert('You tapped the button!')}}
              title="Statistics"
              color="#2b475e"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={this._onPressSetting}
              title="Setting"
              color="#2b475e"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#6cce98',


  },
  content: {
    flex: 8,
    backgroundColor: '#343d43'
  },
  bottom: {
    flex: 1,
    backgroundColor: '#2b475e',
  },
  row: {
    margin: 8,
    padding: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
