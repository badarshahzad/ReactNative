import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button title="Go to Badar's Profile"
        onPress={
          () => navigate('Profile', { name: 'Badar' })
        }
      />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.navbarContainer}>

        <TouchableOpacity onPress={this.props.pressMenu}>
          <Icon name={this.props.icon} size={25} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.titleNavbar}>New Recipes </Text>
        <Icon name="search" size={25} color="#fff" />
        <Icon name="heart" size={25} color="#fff" />
        <Icon name="ellipsis-v" size={25} color="#fff" />
      </View>

      // These are libraries those provides native look
      // native-navigation, react-native-navigation.

    );
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#555566',

    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titileNavbar: {
    fontSize: 16,
    color: '#ffffff',
  }
});
