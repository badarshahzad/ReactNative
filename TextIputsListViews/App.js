import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, FlatList, Image } from 'react-native';
import { ViewPagerAndroid } from 'react-native-gesture-handler';

let dumiDataArray = [{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
{ key: 'Badar' },
{ key: 'Khan' },
{ key: 'Badri' },
{ key: 'Sudo' },
{ key: 'Kaka' },
{ key: 'Khan' },
{ key: 'Shahzad' },
{ key: 'Badri' },
{ key: 'Jadi' },
{ key: 'Badar Khan' },
{ key: 'Badar Shahzad' },
{ key: 'Badar Shahzad Khan' },
{ key: 'badarshahzad54' },
{ key: 'badarshahzad' },
{ key: 'badarkhan634' },
{ key: 'badar2014' },
{ key: 'B.S.K@bradford.edu.uk' },
{ key: 'Badi' },
]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // [1] Emoji  : http://flagpedia.net/emoji
  // [2] Library: https://github.com/frostney/react-native-flags
  render() {
    return (

      <ViewPagerAndroid initialPage={0} style={styles.container}>
        <View key="1" style={styles.viewPager0}>
          <TextInput style={styles.textInput} placeholder="Type here to translater" onChangeText={(text) => this.setState({ text })} />

          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(' ').map((word) => word && '🇵🇰').join(' ')}
          </Text>

          <Button
            onPress={() => { dumiDataArray.unshift(this.text) }}
            title='Submit' />

          <FlatList style={styles.flatList}
            data={dumiDataArray}
            renderItem={({ item }) => {

              return (
                <View style={styles.itemView}>
                  <Image source={require('./img/6.jpg')} style={styles.imgStyle} />
                  <Text style={styles.textView}> {item.key}</Text>
                </View>
              );

            }
            }
          />
        </View>
        <View key="2">
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  viewPager0:{
    padding:16,
  },
  textInput: {
    padding: 10,
    marginTop: 10,

    height: 40,
    fontSize: 18,
  },
  flatList: {
    padding: 10,
  },
  textView: {
    paddingStart: 16,
    paddingTop: 8,
    fontSize: 14,
    // height: 44,
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 42,
    margin: 16,
  },
  imgStyle: {

    width: 48,
    height: 48,
    borderRadius: 150 / 2
  },

});