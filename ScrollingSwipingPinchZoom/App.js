import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, Button,
  ImageBackground, Image, Alert, ViewPagerAndroid
} from 'react-native';

export default class App extends React.Component {

  _onPressSetting() {
    Alert.alert("You tapped the setting menu!");
  }

  render() {

    return (
      <View style={styles.container}>

        {/*Header Start */}
        <View style={styles.header} />
        {/*Header End */}

        {/* Center Start*/}
        <View style={styles.content}>

          {/* Here the Scrollview view */}
          <View style={styles.scrollView}>

            <ImageBackground style={styles.scrollViewBackground} source={require('./img/2.jpg')}>
              <ScrollView>

                <Text style={{ fontSize: 16, color: '#fcf9f9' }}>

                  The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                    (by setting the horizontal property).vertically
                    The ScrollView is a generic scrolling container that can host multiple components and views.
                  The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally
                (by setting the horizontal property).vertically</Text>


                <Image source={require('./img/7.jpg')} style={{ width: 200, height: 200 }} />

              </ScrollView>
            </ImageBackground>
            
          </View>
        </View>
        {/* Center End*/}

        {/* Bottom Start */}
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button
              onPress={() => { console.log("Home") }}
              title="Home"
              color="#2b475e"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={() => { Alert.alert('You tapped the button!') }}
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
        {/* Bottom End */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
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
  },

  // ScrollView 
  scrollView: {
    flexDirection: 'column'
  },

  scrollViewBackground: {

  },
});
