export default class ConfigStore{
    constructor(){
        this.splashTime = 1000
        this.splashImg = require('../../images/3.jpg')
        this.loginBG = require('../../images/7.jpg')
    }

    // two accessor mehtods
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