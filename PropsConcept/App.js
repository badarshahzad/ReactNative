import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ImageFrame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

class Greeting extends Component{

  render(){
    return (
      <Text style={styles.red}> Hello! {this.props.name}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageFrame />
        <Greeting name="Badar"/>
        <Greeting name="Shahzad" />
        <Greeting name="Khan"/>
        <Text style ={styles.bigblue}> Sudo is here </Text>
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
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bigblue: {

    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
