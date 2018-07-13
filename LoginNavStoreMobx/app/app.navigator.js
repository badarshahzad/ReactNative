import React from 'react';
import {DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}
const RouteConfig = {
    initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
    Splash: Splash
}, RouteConfig) //route navitatir, route config

export default AppNavigator;
