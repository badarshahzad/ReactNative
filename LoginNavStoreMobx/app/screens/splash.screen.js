import React, {Component} from 'react';
import {Image , View} from 'react-native';
import {inject} from 'mobx-react'; 
//provider in app.js that provides the store and here we have
// inject that in our class the required store

@inject("stores")
export default class SplashScreen extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {stores, navigation} = this.props;
        setTimeout(() =>{
            navigation.navigate("Login")
        }, stores.config.SplashTime);
    }

    // that basic scallfold for screen
    render(){
        //deconstruciton of the store
        const {stores}  = this.props
        return (
            <View style={styles.viewContainer}>
                <Image style={styles.imageContainer} source={stores.config.SplashImg }/>
            </View>
        )
    }
}

const styles = {
    viewContainer:{
        flex:1,
    },
    imageContainer:{
        flex:1,
        width:null,
        height:null,
    }
}

