import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './app/pages/Login';
import Main from './app/pages/Main';

export default class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Main onLogoutPress={() => this.setState({isLoggedIn: false})} />
        </View>
      );  
    }
    else {
      return (
        <View style={styles.container}>
          <Login onLoginPress={() => this.setState({isLoggedIn: true})} />
        </View>
      );  
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
