import React, { Component } from 'react';
import { Container, Textarea, Content, Form, Item, Card, CardItem, Left, Right, Thumbnail, Body, Icon, Picker, Input, Label, Button } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import GlobalConfig from './GlobalConfig';

var that;
var thatorder;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
    };
    // alert(JSON.stringify(this.props.data));
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((value) => {
      this.setState({ 'token': value });
    })
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Kode Barang  : {this.props.data.KODE}</Text>
                <Text>Nama Barang       : {this.props.data.NAMA}</Text>
                <Text>Merk Barang       : {this.props.data.MERK}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Icon active name="pie" />
                <Text>Jumlah Barang : {this.props.data.JUMLAH}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Icon active name="checkbox" />
                <Text>Available : {this.props.data.JUMLAH}</Text>
              </Body>
            </Right>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class StockAPD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      dataSource: [],
      dataProfile: [],
      // isloading: true,
      selectedAPD: '100',
      // selectedPlant: '5001'
    };
    thatorder = this;
  }

  onValueChange2(value) {
    // this.setState({
    //   selectedAPD: value
    // });
    setTimeout(() => {
      this.setState({
        selectedAPD: value
      });
    }, 1000);
  }

  _renderItem = ({ item }) => (
    <ListItem data={item}></ListItem>
  )

  searchAPD = () => {
    var selectedValueAPD = this.state.selectedAPD
    var selectedValuePlant = thatorder.state.dataProfile.plant
    AsyncStorage.getItem('token').then((value) => {
      // alert(JSON.stringify(selectedValueAPD));
      const url = GlobalConfig.SERVERHOST + 'api/v1/apd/stock/view/table/5000/' + selectedValuePlant + '?token=' + value;
      // alert(url)
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          ///alert(JSON.stringify(responseJson));
          this.setState({
            dataSource: responseJson.data[selectedValueAPD],
            isloading: false
          });
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  componentDidMount() {
    this.loadData();
    // this.searchAPD();
  }

  loadData() {
    AsyncStorage.getItem('token').then((value) => {
      // alert(JSON.stringify(value));
      const url = GlobalConfig.SERVERHOST + 'api/Auth/user?token=' + value;

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson));
          this.setState({
            dataProfile: responseJson.data.data
          });
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  render(item) {
    return (
      this.state.isloading
        ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#330066" animating />
        </View>
        :
        <Container>
          <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <ImageBackground style={styles.backgroundImage}>
                <ScrollView>
                  <View style={styles.content}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.logo}>Stock APD</Text>
                      <Text style={styles.logoChild}>PT Semen Indonesia</Text>
                      <View>
                        <Text>Pilih Jenis APD</Text>
                        <Form underlineColorAndroid='transparent' style={styles.inputQty}>
                          <Item picker onPress={this.searchAPD()}>
                            <Picker
                              mode="dropdown"
                              iosIcon={<Icon name="ios-arrow-down-outline" />}
                              style={{ width: undefined }}
                              placeholder="Quantity"
                              placeholderStyle={{ color: "#bfc6ea" }}
                              placeholderIconColor="#007aff"
                              selectedValue={this.state.selectedAPD}
                              // onValueChange={this.onValueChange2.bind(this)}
                              onValueChange={(itemValueAPD) => this.setState({ selectedAPD: itemValueAPD })}
                            >
                              <Picker.Item label="Pelindung Kepala" value="100" />
                              <Picker.Item label="Pelindung Mata" value="200" />
                              <Picker.Item label="Pelindung Telinga" value="300" />
                              <Picker.Item label="Pelindung Hidung" value="400" />
                              <Picker.Item label="Pelindung Tangan" value="500" />
                              <Picker.Item label="Pelindung Kaki" value="700" />
                              <Picker.Item label="Pelindung Badan" value="600" />
                              <Picker.Item label="Paket Obat PPPK" value="900" />
                            </Picker>
                          </Item>
                        </Form>
                      </View>
                      {/* <Button onPress={this.searchAPD} style={{ borderRadius: 5, backgroundColor: '#f8ac59', marginBottom: 10 }}>
                        <Text style={{ margin: 10, color: '#FFFFFF' }}>Search</Text>
                      </Button> */}
                      <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </View>
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
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },

  headerImage: {
    alignSelf: 'center',
    width: 180,
    height: 180
  },

  content: {
    marginTop: 10,
    marginBottom: 10
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
  },

  Contentsave: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },

});