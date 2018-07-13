export default class ConfigStore{
    constructor(){
        this.splashTime = 1000
        this.splashImg = require('../../images/2.jpg')
    }

    // two accessor mehtods
    get SplashImg(){
        return this.splashImg;
    }

    get SplashTime(){
        return this.splashTime;
    }
}