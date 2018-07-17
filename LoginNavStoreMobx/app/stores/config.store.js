import firebase  from 'firebase';

var config = {
    apiKey: "AIzaSyBaafVYPleEu_CtkjlXS4MAoohoPDc7Szs",
    authDomain: "dinder-ff779.firebaseapp.com",
    databaseURL: "https://dinder-ff779.firebaseio.com",
    projectId: "dinder-ff779",
    storageBucket: "dinder-ff779.appspot.com",
    messagingSenderId: "1051621777166"
  };


export default class ConfigStore{
    constructor(){
        firebase.initializeApp(config);
        this.splashTime = 1000
        this.splashImg = require('../../images/7.jpg')
        this.loginBG = require('../../images/3.jpg')
    }

    // accessor mehtods
    get SplashImg(){
        return this.splashImg;
    }

    get SplashTime(){
        return this.splashTime;
    } 

    get LoginBG(){
        return this.loginBG;
    }
}