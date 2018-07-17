import { observable, action } from 'mobx';
import firebase from 'firebase';

export default class AuthStore {
    @observable authUser = null;

    constructor() {
        firebase.auth.onAuthStateChanged((user) => {
            this.authUser = user;

        })
    }
}