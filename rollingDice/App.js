import 'es6-symbol/implement';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';




@observer class Dice extends Component {

  constructor(){
    super();
    autorun(()=> {
      (this.value >3) && alert('WIN')
      //check it will fire every time the observer value is updated 
      //unlike the computed it doesn't have to be observed itself
      console.log("Yes! auto run fire");
    })
  }

  @observable value = 1;

  // Here will be interesting experience i have noticed
  // although the computed and autorun work same via consol.log but 
  // you can search about them what the actually difference between them
  @computed get computedValue() {
    console.log("Yes! computedvalue called");
    return this.value > 3 ? 'WIN' : 'LOOSE'
  }
  

  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.result}>Result: {this.value}</Text>
        <Text style={this.styles.result}>Computed Result: {this.computedValue}</Text>
        <Button onPress={this.handleRoll} title="ROLL"/>
      </View>
    )
  }

  handleRoll = () => {
    this.value = Math.floor(Math.random()*6) + 1;
  }

  styles = {
    container: {  
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    result: {
      fontSize: 22,
      justifyContent: 'center',
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Dice/>
    );
  }
}

