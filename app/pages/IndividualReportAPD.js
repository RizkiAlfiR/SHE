<<<<<<< HEAD
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
                <Text style={{ fontSize: 24 }}>{this.props.data.NAMA}</Text>
                <Text style={{ fontSize: 14, marginTop: 5, marginBottom: 5 }}>Note                             : {this.props.data.KETERANGAN}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>RELEASE AT   : {this.props.data.RELEASE_AT}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>EXPIRED DATE : {this.props.data.EXPIRED_DATE}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>EXPIRED AT   : {this.props.data.EXPIRED_LEFT} Days</Text>
                <Thumbnail style={{ height: 200, width: null, flex: 1, marginBottom: 10, marginTop: 10, borderRadius: 5 }} source={{ uri: GlobalConfig.SERVERHOST + 'api' + this.props.data.FILES }} />
                <Text>Telah Rusak.</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class IndividualReportAPD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      dataSource: [],
      dataProfile: [],
      // isloading: true,
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
    var selectedValueAPD = this.state.selectedAPD
    // var selectedValuePlant = thatorder.state.dataProfile.no_badge
    AsyncStorage.getItem('token').then((value) => {
      const url = GlobalConfig.SERVERHOST + 'api/v1/apd/order/mob_history';
      // alert(url)
      var formData = new FormData();
      formData.append("token", value)
      fetch(url, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson.data));
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
  }

  loadData() {
    AsyncStorage.getItem('token').then((value) => {
      const url = GlobalConfig.SERVERHOST + 'api/Auth/user?token=' + value;

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
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
                      <Text style={styles.logo}>Individual Report</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
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

=======
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Text, Fab, Button, Icon } from 'native-base';
import PelindungKepalaReport from './IndividualReport/PelindungKepalaReport';
import PelindungMataReport from './IndividualReport/PelindungMataReport';
import PelindungTelingaReport from './IndividualReport/PelindungTelingaReport';
import PelindungHidungReport from './IndividualReport/PelindungHidungReport';
import PelindungTanganReport from './IndividualReport/PelindungTanganReport';
import PelindungKakiReport from './IndividualReport/PelindungKakiReport';
import PelindungBadanReport from './IndividualReport/PelindungBadanReport';
import PPPKReport from './IndividualReport/PPPKReport';

export default class IndividualReportAPD extends Component {
  static navigationOptions = {
    title: 'Individual Report',
  };

  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kepala</Text></TabHeading>}>
            <PelindungKepalaReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Mata</Text></TabHeading>}>
            <PelindungMataReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Telinga</Text></TabHeading>}>
            <PelindungTelingaReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Hidung</Text></TabHeading>}>
            <PelindungHidungReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Tangan</Text></TabHeading>}>
            <PelindungTanganReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kaki</Text></TabHeading>}>
            <PelindungKakiReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Badan</Text></TabHeading>}>
            <PelindungBadanReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Paket Obat PPPK</Text></TabHeading>}>
            <PPPKReport />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
    textAlign: 'center',
    fontSize: 13
  }
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
});