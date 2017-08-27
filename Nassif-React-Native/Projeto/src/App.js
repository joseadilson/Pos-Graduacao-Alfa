import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
    Modal,
    Button,
} from 'react-native';

import ImageTouch from './components/ImageTouch';
import ListScreen from './screens/ListScreen';
import FormScreen from './screens/FormScreen';
import RequestScreen from './screens/RequestScreen';

class App extends Component {

    state = { 
        exibirModal: false
    }

    renderModal = () => {
        return (
            <View>
                <Button 
                    title="Abrir Modal"
                    onPress={() => this.setState({ exibirModal: true })}                
                />

                <Modal
                    visible={this.state.exibirModal}
                    transparent={true}
                    onRequestClose={() => this.setState({ exibirModal: false })}
                >
                
                    <View  style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                        <Text>Este e o Modal</Text>
                        <Button 
                            title="Fechar"
                            onPress={() => this.setState({ exibirModal: false })}
                        />
                    </View>

                </Modal>
            </View>
        )
    }

    render() {
        return (
            <View style={{ 
                backgroundColor: "#FFFDE7",
                flex: 1
            }}>
                {/* 
                <Text>App é o meu componente principal.</Text>

                <ImageTouch url="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" />
                <ImageTouch url="https://blog.algolia.com/wp-content/uploads/2015/12/react-native.png" />
                <ImageTouch url="http://i.imgur.com/oudmGva.png" /> */}

                {/* <ListScreen/> */}

                {/* <FormScreen/> */}

                {/* { this.renderModal() } */}

                <RequestScreen/>

            </View>
        )
    }
}

AppRegistry.registerComponent('PrimeiroProjeto', () => App);
