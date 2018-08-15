import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Picker, Input, Label } from 'native-base';
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

export default class OrderNewAPD extends Component {
  static navigationOptions = {
    title: ' Order New APD ',
  };

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ImageBackground style={styles.backgroundImage}>
              <ScrollView>
                <View style={styles.content}>
                  <View style={styles.inputContainer}>
                    <Image source={require('../images/apd.png')} style={styles.headerImage}></Image>

                    <Text style={styles.logo}>Form Personal Order APD</Text>
                    <Text style={styles.logoChild}>PT Semen Indonesia</Text>
                    
                    <TextInput underlineColorAndroid='transparent' style={styles.inputName} placeholder= 'APD Name'></TextInput>
                    <View>
                      <Form underlineColorAndroid='transparent' style={styles.inputQty}>
                        <Item picker>
                          <Picker
                              mode="dropdown"
                              iosIcon={<Icon name="ios-arrow-down-outline" />}
                              style={{ width: undefined }}
                              placeholder="Quantity"
                              placeholderStyle={{ color: "#bfc6ea" }}
                              placeholderIconColor="#007aff"
                              selectedValue={this.state.selected2}
                              onValueChange={this.onValueChange2.bind(this)} >
                            <Picker.Item label="1" value="key0" />
                            <Picker.Item label="2" value="key1" />
                            <Picker.Item label="3" value="key2" />
                            <Picker.Item label="4" value="key3" />
                            <Picker.Item label="5" value="key4" />
                          </Picker>
                        </Item>
                      </Form>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </ImageBackground>
          </KeyboardAvoidingView>
        </View>
      </Container>
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
    justifyContent: 'center',
    backgroundColor: '#20d6c0'
  },

  headerImage: {
    alignSelf: 'center',
    width: 180,
    height: 180
  },

  content: {
    alignItems: 'center',
    marginTop: 40,
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

  inputName: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },

  inputQty: {
    height: 60,
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