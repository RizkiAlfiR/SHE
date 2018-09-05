import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Subtitle,
  Footer,
  TouchableHighlight,
  FooterTab
} from 'native-base';
var thats;
import { StackNavigator } from "react-navigation";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/logosemen.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class PilihanOrder extends Component {
  constructor(props) {
    super();
  }

  navigateToScreen(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={styles.headerContainer}>
            <Text style={styles.logo}>Pilihan Order APD</Text>
            <Text style={styles.logoChild}>PT Semen Indonesia</Text>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnApproval} iconLeft block onPress={() => this.navigateToScreen('OrderAPD')}>
              {/* <Icon name="checkbox" /> */}
              <Text>Order APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button disabled style={styles.btnStock} iconLeft block onPress={() => this.navigateToScreen('')}>
              {/* <Icon name="pie" /> */}
              <Text>Kehilangan APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button disabled style={styles.btnOrder} iconLeft block onPress={() => this.navigateToScreen('')}>
              {/* <Icon name="paper-plane" /> */}
              <Text>Peminjaman APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnIndividualReport} iconLeft block onPress={() => this.navigateToScreen('HistoryOrderAPD')}>
              {/* <Icon name="paper-plane" /> */}
              <Text>History Order APD</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  apdimage: {
    alignItems: 'center',
    width: 160,
    height: 160,
    marginTop: 40
  },

  apdtext: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 20
  },

  textprofile: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 5,
    color: '#0394c0',
  },

  ContentAPD: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },

  ContentLogout: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 30
  },

  btnStock: {
    backgroundColor: '#803776'
  },

  btnApproval: {
    backgroundColor: '#18B393'
  },

  btnOrder: {
    backgroundColor: '#1D84C6'
  },

  btnLogout: {
    backgroundColor: '#ED5564'
  },

  btnIndividualReport: {
    backgroundColor: '#F9AB59'
  },

  logo: {
    textAlign: 'center',
    color: '#000',
    fontSize: 22,
    margin: 10,
    fontWeight: 'bold'
  },

  logoChild: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    // fontWeight: 'bold',
    marginBottom: 20
  },
})
