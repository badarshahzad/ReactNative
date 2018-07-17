import React, { Component } from 'react';
import { Button, Item, Input, Icon, Text, Form } from 'native-base';
import { observer } from 'mobx-react/native'; //need things to watch and rerender when need
import { observable } from 'mobx'; //it watches observable form mobx, mobx see observable if it changes the mobx says hey you need to rerender

@observer ///component is observing
export default class Login extends Component {

    @observable email = '';
    @observable password = '';

    constructor(props) {
        super(props)
    }

    signIn() {
        const { auth } = this.props.stores;
        const { navigate } = this.props.navigation;
        auth.signIn({ email: this.email, password: this.password })
            .then(() => {//if promise complete then navigate to next screen
                navigate('Match')
            })

    }

    render() {
        const { auth } = this.props.stores; //we call here auth to watch it properly
        return (
            <Form>
                <Item style={{ marginBottom: 10 }} rounded>
                    <Icon style={{ color: "#fff" }} name="person-outline" />
                    <Input style={{ color: "#fff" }}
                        placeholder='Please Enter Email'
                        placeholderTextColor="#fff"
                        onChangeText={(email) => this.email = email} />
                </Item>

                <Item style={{ marginBottom: 10 }} rounded>
                    <Icon style={{ color: "#fff" }} name="lock-open" />
                    <Input style={{ color: "#fff" }}
                        placeholder='Please Enter Password'
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                        onChangeText={(pass) => this.password = pass} />
                </Item>

                <Button rounded block style={{ marginBottom: 10 }}
                    onPress={this.signIn.bind(this)} >
                    <Text> Login </Text>
                </Button>
            </Form>


        );
    }
}