/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button

} from 'react-native';

export default class Projeto extends Component {


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          TesteTesteTesteTeste
        </Text>

        {/* <Image source={require('./')} ></Image> */}
        {/* source={{ uri: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA3LAAAAJDlkNWEyZDYzLTJlMDQtNDYxOC1hYWU3LTljMjgyMmJlOTVmZQ.png' }}  */}
        {/* style={{  }} */}

        <Button
          onPress={() => alert('Cesar CUZÃO')}
          title="Clique"/>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Projeto', () => Projeto);
