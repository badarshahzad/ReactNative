import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button,Alert,TextInput } from 'react-native';

export default class App extends React.Component {

  state = {
    textState: "this is the first text!"
  }


  onClickMe = () => {
    console.log("Im here");
    this.setState(this.state.textState = "change value");

  };

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    let value = "this is the value";


    let object = {
      uri: 'https://media.gettyimages.com/photos/assortment-of-fruits-picture-id173255460'
    }

    return (
      <View style={styles.container}>
        <Text onPress={this.onClickMe}>{this.state.textState}</Text>
        <View style={styles.header} />
        <View style={styles.content} />
        <View style={styles.bottom} />

        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />


        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40, width:80}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({ text })}
          />
          
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    
    backgroundColor: 'powderblue', width: 200,
    height: 50,
  },
  content: {
    backgroundColor: 'skyblue', width: 200,
    height: 50,
  },
  bottom: {
    backgroundColor: 'steelblue', width: 200,
    height: 50,
  },

});
