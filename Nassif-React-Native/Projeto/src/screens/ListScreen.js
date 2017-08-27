import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

const DATA_LIST = [
    { nome: "José1" },
    { nome: "José2" },
    { nome: "José3" },
    { nome: "José4" },
    { nome: "José5" },
    { nome: "José6" },
    { nome: "José7" },
]

class ListScreen extends Component {

    onItemPress = (item) => {
        alert(item.nome)
    }

    renderItem = (record) => {
        const { item, index } = record;

        return (
            <TouchableOpacity 
                onPress={() =>this.onItemPress(item)}>

                <View style={{
                    backgroundColor: '#FFF',
                    marginHorizontal: 16,
                    marginVertical: 8,
                    padding: 16,
                    borderRadius: 5,
                    elevation:2,
                    shadowOffset: {
                        width:2,
                        height: 2,
                    },
                    shadowColor: '#333',                
                    
                }} >
                    <Text>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={DATA_LIST}
                renderItem={this.renderItem}
                keyExtractor={( item ) => item.nome}
                refreshControl={<RefreshControl />}
            />
        )
    }
}

export default ListScreen;