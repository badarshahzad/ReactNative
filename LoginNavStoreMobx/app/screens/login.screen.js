import React, { Component } from 'react';
import {
    Container,
    Content
} from 'native-base';

import { View, StyleSheet, Dimensions,ImageBackground } from 'react-native';
import { inject } from 'mobx-react';
import Login from '../components/login.components';
import stores from '../stores';

@inject("stores")
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { stores } = this.props;
        return (
                <View style={styles.container}>
                        <ImageBackground style={styles.loginBackground} source={stores.config.loginBG}>
                        <View style={styles.loginForeground}>
                            <Login {...this.props} />
                        </View>
                        </ImageBackground>
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    // container: {
    //     flex: 1
    // },
    loginBackground: {
        flex: 1,
        width: null,
        height: null,
    },
    loginForeground: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        bottom: 0,
    }
})