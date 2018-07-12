import React from 'react';
import { StyleSheet, Text, View, ViewPagerAndroid } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      // [1] https://facebook.github.io/react-native/docs/viewpagerandroid 
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>

        {/* View 1 */}
        <View style={[styles.pageStyle, styles.view0]} key="1">
          <Text>First page</Text>
        </View>

        {/* View 2 */}
        <View style={[styles.pageStyle, styles.view1]} key="2">
          <Text>Second page</Text>
        </View>

        {/* View 3 */}
        <View style={[styles.pageStyle, styles.view2]} key="3">
          <Text>Third page</Text>
        </View>
        
      </ViewPagerAndroid>
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
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  view0:{
    backgroundColor: '#ec3535',
  },

  view1:{
    backgroundColor: '#6cce98',
  },

  view2:{
    backgroundColor: '#2b475e',
  },
});
