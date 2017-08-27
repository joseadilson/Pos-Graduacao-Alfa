import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

class FormScreen extends Component {

    state = { }

    onEntrarPress = () => {
        //pressionou o botão
        const { login, senha } = this.state;
        alert(login +"\n"+ senha)
    }

    onChangeLogin = (text) => {
        // this.setState({
        //     login: text
        // })
        const state = { login: text
        }
        this.setState( state );
    }

    onChangeSenha = (senha) => {
        this.setState({ senha });
    }

    render() {
        return (
            <View>
                <TextInput 
                    value={this.state.login} 
                    onChangeText={this.onChangeLogin}
                    keyboardType="email-address"
                    //keyboardType="web-search" 
                />
                
                <TextInput
                    value={this.state.senha} 
                    onChangeText={this.onChangeSenha} 
                    secureTextEntry={true}
                    //returnKeyType="go"
                    //onSubmitEditing={this.onEntrarPress}
                />
                
                <Button 
                    title="Entrar" 
                    onPress={this.onEntrarPress} />
            </View> 
        )
        
    }

}

export default FormScreen;