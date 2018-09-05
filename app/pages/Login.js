<<<<<<< HEAD
﻿import React from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { Button, Icon, Toast } from 'native-base';
import GlobalConfig from './GlobalConfig';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "INDRA.NOFIANDI",
      password: "semenindonesia",
      isLoggedIn: false
    };
    // state = { username: "ASRI.WAHJUSUKRISNO", password: "semenindonesia", showToast: false }
  }

  static navigationOptions = {
    header: null
  }
  
  checkLogin() {
    var url = GlobalConfig.SERVERHOST + 'api/Auth/login';
    var formData = new FormData();
    formData.append("username", this.state.username)
    formData.append("password", this.state.password)

    fetch(url, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: formData
    }).then((response) => response.json())
      .then((response) => {
        if (response.response_code == 200) {
          AsyncStorage.setItem('token', response.token).then(() => {
            this.setState({ isLoggedIn: true });
            this.props.navigation.navigate('Main')
          })
        } else {
          Alert.alert('Error', 'Username or Password Wrong', [{
            text: 'Okay'
          }])
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/warehouse.jpg')} style={styles.backgroundImage}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.inputContainer}>
                <Image source={require('../images/Logo_SI.png')} style={styles.headerImage}></Image>

                <Text style={styles.logo}>Safety Hygiene Environment System</Text>
                <Text style={styles.logoChild}>Login in. to see it in action.</Text>

                <TextInput value={this.state.username} underlineColorAndroid='transparent' style={styles.input} placeholder='Username'
                  onChangeText={(text) => this.setState({ username: text })}></TextInput>
                <TextInput value={this.state.password} secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder='Password'
                  onChangeText={(text) => this.setState({ password: text })}></TextInput>

                <Button block style={{
                  alignSelf: 'stretch',
                  marginTop: 20,
                  marginBottom: 20,
                  height: 45,
                  alignItems: 'center',
                  borderWidth: 1,
                  backgroundColor: '#00cc99',
                  borderColor: '#00cc99',
                  borderRadius: 4
                }} onPress={() => this.checkLogin()}>
                  <Text style={styles.buttonText}>Login</Text>
                  <Icon name="ios-arrow-forward" />
                </Button>
                {/* this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size="large" color="#330066" animating />
                </View>
                : */}
                <Text style={styles.logoFooter}>Created by PT SISI © 2017</Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center'
  },

  headerImage: {
    alignSelf: 'center',
    width: 200,
    height: 160
  },

  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 15
  },

  logo: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    margin: 15
  },

  logoChild: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    marginBottom: 20,
  },

  logoFooter: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 20,
  },

  inputContainer: {
    margin: 20,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },

  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },

  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    height: 10,
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#00cc99',
    borderColor: '#00cc99',
    borderRadius: 4
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#00cc99',

  }
=======
import React from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { Button, Icon } from 'native-base';

export default class Login extends React.Component {
  state = { username: "INDRA.NOFIANDI", password: "semenindonesia", isLoggedIn: false, isLoading: true }
  static navigationOptions = {
    header: null
  }
  
  checkLogin() {
    var url = 'http://10.15.5.150/dev/she/api/Auth/login';
    var formData = new FormData();
    formData.append("username", this.state.username)
    formData.append("password", this.state.password)

    fetch(url, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: formData
    }).then((response) => response.json())
      .then((response) => {
        if (response.response_code == 200) {
          AsyncStorage.setItem('token', response.token).then(() => {
            this.setState({ isLoggedIn: true });
            this.props.navigation.navigate('Main')
          })
        } else {
          Alert.alert('Error', 'Username or Password Wrong', [{
            text: 'Okay'
          }])
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/warehouse.jpg')} style={styles.backgroundImage}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.inputContainer}>
                <Image source={require('../images/Logo_SI.png')} style={styles.headerImage}></Image>

                <Text style={styles.logo}>Safety Hygiene Environment System</Text>
                <Text style={styles.logoChild}>Login in. to see it in action.</Text>

                <TextInput value={this.state.username} underlineColorAndroid='transparent' style={styles.input} placeholder='Username'
                  onChangeText={(text) => this.setState({ username: text })}></TextInput>
                <TextInput value={this.state.password} secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder='Password'
                  onChangeText={(text) => this.setState({ password: text })}></TextInput>

                <Button style={{
                  alignSelf: 'stretch',
                  marginTop: 20,
                  marginBottom: 20,
                  height: 45,
                  padding: 20,
                  alignItems: 'center',
                  borderWidth: 1,
                  backgroundColor: '#00cc99',
                  borderColor: '#00cc99',
                  borderRadius: 4
                }} onPress={() => this.checkLogin()}>
                  <Text style={styles.buttonText}>Login</Text>
                  <Icon name="ios-arrow-forward" />
                </Button>
                {/* this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size="large" color="#330066" animating />
                </View>
                : */}
                <Text style={styles.logoFooter}>Created by PT SISI © 2017</Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center'
  },

  headerImage: {
    alignSelf: 'center',
    width: 200,
    height: 160
  },

  content: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  logo: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    margin: 15
  },

  logoChild: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    marginBottom: 20,
  },

  logoFooter: {
    textAlign: 'center',
    color: 'rgba(0,0,0, 0.5)',
    fontSize: 12,
    marginBottom: 20,
  },

  inputContainer: {
    margin: 20,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },

  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },

  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    height: 10,
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#00cc99',
    borderColor: '#00cc99',
    borderRadius: 4
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#00cc99',

  }
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
});