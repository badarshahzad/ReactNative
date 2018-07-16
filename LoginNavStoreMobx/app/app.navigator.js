import React from 'react';
import {DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}

const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}

const RouteConfig = {
    initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
    Splash: Splash,
    Login: Login
}, RouteConfig) //route navitatir, route config

export default AppNavigator;
