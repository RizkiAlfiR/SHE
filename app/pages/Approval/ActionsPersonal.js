import React, { Component } from 'react';
import { ImageBackground, Image, FlatList, AsyncStorage, Alert, ActivityIndicator, StyleSheet, ScrollView,
  KeyboardAvoidingView, Text, View } from 'react-native';
import { Container, Content, Icon, Left, Body, Right, Fab, Form, Button, Textarea, Card, CardItem } from 'native-base';
import Swipeout from 'react-native-swipeout';

var that;
class ListItem extends React.PureComponent {
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
    const { navigate } = that.props.navigation;
   
    return (
        <View>
          <Card style={{ marginBottom: 15 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Kode                  : {this.props.data.KODE}</Text>
                  <Text>Nama                  : {this.props.data.NAMA}</Text>
                  <Text>Merk                  : {this.props.data.MERK}</Text>
                  <Text>Size                  : {this.props.data.SIZE}</Text>
                  <Text>Quantity              : {this.props.data.JUMLAH}</Text>
                  <Text note>Note             : {this.props.data.KETERANGAN}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </View>
    )
  }
}

export default class ActionsPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      dataSource: [],
      isloading: true,
      deletedRowKey: null,
    };
  }

  _renderItem = ({ item, index }) => (
    <ListItem data={item} index={index} parentFlatList={this}></ListItem>
  )

  componentDidMount() {
    AsyncStorage.getItem('id').then((value) => {
      this.loadData(value);
    })
  }

  loadData(id) {
    AsyncStorage.getItem('token').then((value) => {
      // alert(JSON.stringify(id));
      const url = 'http://10.15.5.150/dev/she/api/v1/apd/approve/detail/request/' + id;
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
            dataSource: responseJson.data,
            isloading: false
          });
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  render() {
    that=this;
    return (
      this.state.isloading
      ?
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= "large" color= "#330066" animating />
      </View>
      :
      <Container>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ImageBackground style={styles.backgroundImage}>
              <ScrollView>
                <View style={styles.content}>
                  <View style={styles.inputContainer}>
                    <Image source={require('../../images/icon-edit.png')} style={styles.headerImage}></Image>

                    <Text style={styles.logo}>List Detail Request APD (Personal)</Text>
                    <Text style={styles.logoChild}>PT Semen Indonesia</Text>

                    <Content>
                      <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </Content>

                    <Text>Reject Note:</Text>
                     <Form>
                      <Textarea style={{marginBottom: 15}} rowSpan={5} bordered placeholder="Place note here .." />
                      </Form>
                  </View>

                  <View style={styles.Contentsave}>
                    <Button block style={{
                    marginTop: 20,
                    height: 45,
                    borderWidth: 1,
                    backgroundColor: '#1c84c6',
                    borderColor: '#1c84c6',
                    borderRadius: 4
                  }}>
                      <Text style={styles.buttonText}>Approve</Text>
                    </Button>
                    <Button block style={{
                    marginTop: 15,
                    height: 45,
                    borderWidth: 1,
                    backgroundColor: '#ed5565',
                    borderColor: '#ed5565',
                    borderRadius: 4
                  }}>
                      <Text style={styles.buttonText}>Reject</Text>
                    </Button>
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
  },

  Contentsave: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
});