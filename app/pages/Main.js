<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, BackHandler, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
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
        style={{ width: 42, height: 36, alignContent: 'center', marginTop: 10 }}
      />
    );
  }
}

export default class Main extends Component {
  constructor(props) {
    super();
  }

  navigateToScreen(route) {
    this.props.navigation.navigate(route);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    // ToastAndroid.show('You are on Dashboard Page', ToastAndroid.SHORT);
    return true;
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#f6f6f6' }}>
          <LogoTitle />
        </Header>
        <Content>
          <View style={styles.headerContainer}>
            <Image style={styles.apdimage} source={require('../images/apd.png')}></Image>
            <Text style={styles.textprofile} onPress={() => this.navigateToScreen('Profile')}>Profile</Text>
            <Text style={styles.apdtext}>Alat Pelindung Diri</Text>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnApproval} iconLeft block onPress={() => this.navigateToScreen('ApprovalAPD')}>
              {/* <Icon name="ios-pie" /> */}
              <Text style={{ fontWeight: 'bold' }}>Approval APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnOrder} iconLeft block onPress={() => this.navigateToScreen('PilihanOrder')}>
              {/* <Icon name="paper" /> */}
              <Text style={{ fontWeight: 'bold' }}>Order APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.IndividualReport} iconLeft block onPress={() => this.navigateToScreen('IndividualReportAPD')}>
              {/* <Icon name="paper-plane" /> */}
              <Text style={{ fontWeight: 'bold' }}>Individual Report</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnStock} iconLeft block onPress={() => this.navigateToScreen('StockAPD')}>
              {/* <Icon name="person" /> */}
              <Text style={{ fontWeight: 'bold' }}>Stock APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPDBottom}>
            <Button style={styles.btnLogout} iconLeft block onPress={() => this.navigateToScreen('Login') && this.setState({ username: "", password: "", isLoggedIn: false })}>
              {/* <Icon name="ios-log-out" /> */}
              <Text style={{ fontWeight: 'bold' }}>Log out</Text>
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
    marginTop: 20
  },

  apdtext: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 20
  },

  ContentAPD: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },

  ContentAPDBottom: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingBottom: 30
  },

  btnStock: {
    backgroundColor: '#ff3399'
  },

  btnApproval: {
    backgroundColor: '#1ab394'
  },

  btnOrder: {
    backgroundColor: '#f459f8'
  },

  btnReport: {
    backgroundColor: '#ff0097'
  },

  btnLogout: {
    backgroundColor: '#ed5564'
  },

  btnIndividualReport: {
    backgroundColor: '#1c84c6'
  },

  textprofile: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 5,
    color: '#0394c0',
  }

})
=======
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
        style={{ width: 42, height: 36, alignContent: 'center', marginTop: 10 }}
      />
    );
  }
}

export default class Main extends Component {
  constructor(props) {
    super();
  }

  navigateToScreen(route){
    this.props.navigation.navigate(route);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: '#f6f6f6'}}>
          <LogoTitle/>
        </Header>
        <Content>
          <View style={styles.headerContainer}>
            <Image style={styles.apdimage} source={require('../images/apd.png')}></Image>
            <Text style={styles.textprofile} onPress={() => this.navigateToScreen('Profile')}>Profile</Text>
            <Text style={styles.apdtext}>Alat Pelindung Diri</Text>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnApproval} iconLeft block onPress={() => this.navigateToScreen('ApprovalAPD')}>
              <Icon name="ios-pie" />
              <Text>Approval APD</Text>
            </Button>
          </View>
          {/* <View style={styles.ContentAPD}>
            <Button style={styles.btnReport} iconLeft block onPress={() => this.navigateToScreen('ReportAPD')}>
              <Icon name="ios-checkbox" />
              <Text>Report APD</Text>
            </Button>
          </View> */}
          <View style={styles.ContentAPD}>
            <Button style={styles.btnOrder} iconLeft block onPress={() => this.navigateToScreen('OrderAPD')}>
              <Icon name="paper" />
              <Text>Order APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.IndividualReport} iconLeft block onPress={() => this.navigateToScreen('IndividualReportAPD')}>
              <Icon name="paper-plane" />
              <Text>Individual Report</Text>
            </Button>
          </View>
          <View style={styles.ContentAPD}>
            <Button style={styles.btnStock} iconLeft block onPress={() => this.navigateToScreen('StockAPD')}>
              <Icon name="person" />
              <Text>Stock APD</Text>
            </Button>
          </View>
          <View style={styles.ContentAPDBottom}>
            <Button style={styles.btnLogout} iconLeft block onPress={() => this.navigateToScreen('Login') && this.setState({isLoggedIn: false})}>
              <Icon name="ios-log-out" />
              <Text>Log out</Text>
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
    marginTop: 20
  },

  apdtext:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 20
  },

  ContentAPD: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },

  ContentAPDBottom: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingBottom: 30
  },

  btnStock: {
    backgroundColor: '#ff3399'
  },

  btnApproval: {
    backgroundColor: '#1ab394'
  },

  btnOrder: {
    backgroundColor: '#f459f8'
  },

  btnReport: {
    backgroundColor: '#ff0097'
  },

  btnLogout: {
    backgroundColor: '#ed5564'
  },

  btnIndividualReport: {
    backgroundColor: '#1c84c6'
  },

  textprofile:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 5,
    color: '#0394c0',
  }

})
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
