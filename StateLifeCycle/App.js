import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



function Tick() {
  console.log("Yes Tick working");
}

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowingText: true };

    //Toggle everyseconds
    setInterval(() => {
      this.setState(previousState => {
        return {
          isShowingText: !previousState.isShowingText
        };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { kk: new Date().toLocaleTimeString() };

    setInterval(() => {
      this.setState({ kk: new Date().toLocaleTimeString() })
    }, 1000);
  }

  render() {
    return (
      <Text>The time is {this.state.kk}</Text>
    );
  };
}

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Blink text="This is blinking text" />
        <Clock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
