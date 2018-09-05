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
  FlatList
} from 'react-native';
import GlobalConfig from '../GlobalConfig';

var that;
var thatorder;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((value) => {
      this.setState({ 'token': value });
    })
  }

  btnOrderList = () => {
    const url = GlobalConfig.SERVERHOST + 'api/v1/apd/order/createe';
    var formData = new FormData();
    formData.append("token", this.state.token)
    formData.append("company", thatorder.state.dataProfile.company)
    formData.append("plant", thatorder.state.dataProfile.plant)
    formData.append("kode_uk", thatorder.state.dataProfile.uk_kode)
    formData.append("nobadge", thatorder.state.dataProfile.no_badge)
    formData.append("uk_text", thatorder.state.dataProfile.unit_kerja)
    formData.append("list_order", '[{"KODE_APD":"' + this.props.data.KODE + '","JUMLAH":1,"MASA_EXP":1,"KETERANGAN":"Permintaan Personal","CODE_COMP":"' + thatorder.state.dataProfile.company + '","CODE_PLANT":"' + thatorder.state.dataProfile.plant + '"}]')
    //[{"KODE_APD":"100-010009","JUMLAH":1,"MASA_EXP":1,"KETERANGAN":"Permintaan Personal","CODE_COMP":5000,"CODE_PLANT":"5002"},{"KODE_APD":"200-080010","JUMLAH":1,"MASA_EXP":1,"KETERANGAN":"Permintaan Personal","CODE_COMP":5000,"CODE_PLANT":"5002"}]

    fetch(url, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == 200) {
          // Alert.alert(
          //   'Order Success',
          //   'Your order ID : RID - ' + responseJson.data.ORDER_ID + '',
          // )
          Alert.alert('Order Success', 'Your order ID : RID - ' + responseJson.data.ORDER_ID, [{
            text: 'Okay'
          }])
          // this.props.navigation.navigate('Main')
        } else {
          Alert.alert('Error', 'Order Failed', [{
            text: 'Okay'
          }])
        }
      })
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Nama Barang       : {this.props.data.NAMA}</Text>
                <Text>Merk Barang       : {this.props.data.MERK}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text>Jumlah Barang : {this.props.data.JUMLAH}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Text>Available : {this.props.data.JUMLAH}</Text>
              </Body>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Button style={{ borderRadius: 5, backgroundColor: '#f8ac59', marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: '#ffffff', marginLeft: 10, marginRight: 10 }} onPress={this.btnOrderList}>Order</Text>
                </Button>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class OrderPersonal extends Component {
  static navigationOptions = {
    title: ' Personal Order ',
  };

  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      dataSource: [],
      dataProfile: [],
      selectedAPD: '100'
    };
    thatorder = this;
  }

  onValueChange2(value) {
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
    var selectedValue = this.state.selectedAPD
    var selectedValuePlant = thatorder.state.dataProfile.plant
    AsyncStorage.getItem('token').then((value) => {
      // alert(JSON.stringify(value));
      const url = GlobalConfig.SERVERHOST + 'api/v1/apd/stock/view/table/5000/' + selectedValuePlant + '?token=' + value;

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          ///alert(JSON.stringify(responseJson));
          this.setState({
            dataSource: responseJson.data[selectedValue]
          });
        })
        .catch((error) => {
          console.log(error)
        })
    })

  }

  componentDidMount() {
    this.loadData();
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

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ImageBackground style={styles.backgroundImage}>
              <ScrollView>
                <View style={styles.content}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.logo}>Form Personal Order APD</Text>
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
                            onValueChange={(itemValue) => this.setState({ selectedAPD: itemValue })} >
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
                    {/* <Button onPress={this.searchAPD} style={{ borderRadius: 5, backgroundColor: '#1c84c6' }}>
                      <Text style={{ margin: 5, marginBottom: 10, color: '#FFFFFF' }}>Search</Text>
                    </Button> */}
                    <Content>
                      <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </Content>
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
    flex: 1
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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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

  btnOrder: {
    backgroundColor: '#1D84C6'
  },
});
