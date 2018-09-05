import React, { Component } from 'react';
import { Image, FlatList, AsyncStorage, Text, ActivityIndicator, StyleSheet, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Fab, View } from 'native-base';
import GlobalConfig from '../GlobalConfig';

var that;
class ListItem extends React.PureComponent {
  navigateToScreen(route, id_personal) {
    // alert(route);
    AsyncStorage.setItem('id', id_personal).then(() => {
      that.props.navigation.navigate(route);
    })
  }

  render() {
    return (
      <View>
        <Card style={{ marginLeft: 10, marginRight: 10 }}>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.cardtext}>Kode Order              : {this.props.data.KODE_ORDER}</Text>
                <Text style={styles.cardtext}>Order By           : {this.props.data.NO_BADGE}</Text>
                <Text style={styles.cardtext}>Employee Name : {this.props.data.NAMA}</Text>
                <Text style={styles.cardtext}>Employee Unit / Diviton : {this.props.data.UK_TEXT}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text style={{fontSize: 15}}>Order Date              : {this.props.data.CREATE_AT}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Button style={{ borderRadius: 5, backgroundColor: '#f8ac59', marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: '#ffffff', marginLeft: 10, marginRight: 10 }} onPress={() => this.navigateToScreen('ActionsPersonal', this.props.data.ID)}>Actions</Text>
                </Button>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class ApprovalPersonal extends Component {
  static navigationOptions = {
    title: 'Approval Personal'
  };

  constructor() {
    super();
    this.state = {
      active: 'true',
      dataSource: [],
      isloading: true
    };
  }

  _renderItem = ({ item }) => (
    <ListItem data={item}></ListItem>
  )
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    AsyncStorage.getItem('token').then((value) => {
      // alert(JSON.stringify(value));
      const url = GlobalConfig.SERVERHOST + 'api/v1/apd/approve/mob_view';
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
          // alert(JSON.stringify(responseJson));
          this.setState({
            dataSource: responseJson.data.request,
            isloading: false
          });
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  render() {
    that = this;
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
                      <Text style={styles.logo}>Approval Permintaan Personal</Text>
                      <Text style={styles.logoChild}>PT Semen Indonesia</Text>
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
  cardtext: {
    color : '#262626',
    fontSize: 16
  },

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
  }
});