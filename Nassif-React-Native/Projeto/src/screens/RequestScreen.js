import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const POSTS_RL = "https://jsonplaceholder.typicode.com/posts";

class RequestScreen extends Component {

    state = {
        erro: '',
        posts: null,
        aguarde: false,
    }

    onBuscarPress = () => {
        this.setState({ aguarde: true });

        let posts = null;
        let erro  = '';

        axios.get(POSTS_RL)
        .then((response) => {
            if ( response.status === 200 ) {
                posts = response.data;
            } else {
                erro = "Teste novamente mais tarde!";
            }
        }).catch((exception) => {
            console.warn(exception);
            erro = "Não ha conexão com a internet :(";
        }).finally(() => {
            this.setState({ 
                aguarde: false,
                posts: posts,
                erro: erro
            })
        })

        // setTimeout(() => {
        //     this.setState({ aguarde: false });
        // }, 4000);
    }

    renderForm = () => {

        return (
            <Button
                title="Buscar"
                onPress={this.onBuscarPress} />
        )

    }

    renderContent = () => {
        
        if ( this.state.aguarde ) {
            return (
                <ActivityIndicator
                    size="large"
                    color="#F00"
                />
            )
        }

        if ( this.state.erro ) {
            return (
                <Text style={{ color: '#F00' }} > {this.state.erro} </Text>
            )
        }

        let content;
         if ( this.state.posts ) {
            content = this.state.posts.map(( item, index ) => {
                return (
                    <View key={index} style={{ padding: 16 }}>
                        <Text style={{color: '#000'}}>{ item.title }</Text>
                        <Text>{ item.body }</Text>
                    </View>
                )
            })
         }

        return (
            <View>
                {content}
            </View>
        )

    }

    render() {

        return(
            <ScrollView>

                {this.renderForm()}

                {this.renderContent()}
                
            </ScrollView>
        )
    }

}

export default RequestScreen;