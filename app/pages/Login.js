import React from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <ImageBackground source={require('../images/warehouse.jpg')} style={styles.backgroundImage}>
            <ScrollView>
              <View style={styles.content}>
                <View style={styles.inputContainer}>
                  <Image source={require('../images/logosemen.png')} style={styles.headerImage}></Image>

                  <Text style={styles.logo}>Safety Hygiene Environment System</Text>
                  <Text style={styles.logoChild}>Login in. to see it in action.</Text>
                  
                  <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder= 'Username'></TextInput>
                  <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder= 'Password'></TextInput>
                </View>

                <TouchableOpacity onPress={this.props.onLoginPress} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Login</Text>             
                </TouchableOpacity>

                <Text style={styles.logoFooter}>Created by PT SISI © 2017</Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </KeyboardAvoidingView>
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
    width: 180,
    height: 160
  },

  content: {
    alignItems: 'center',
    marginTop: 40
  },

  logo: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    margin: 15,
  },

  logoChild: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  logoFooter: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
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
    backgroundColor: '#00cc99'
  }
});