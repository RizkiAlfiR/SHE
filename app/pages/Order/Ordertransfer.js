import React, { Component } from 'react';
import { Image, FlatList, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab, View } from 'native-base';

class ListItem extends React.PureComponent {
  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Kode Order            : {this.props.data.KODE}</Text>
                <Text>Pengirim              : {this.props.data.FROM_PLANT}</Text>
                <Text>Penerima              : {this.props.data.TO_PLANT}</Text>
                <Text note>Status Transfer  : {this.props.data.STATUS}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Icon active name="pie" />
                <Text>Tanggal Transfer     : {this.props.data.FROM_APPROVE}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Icon active name="checkbox" />
                <Text>Release Terakhir     : {this.props.data.TO_APPROVE}</Text>
              </Body>
            </Right>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class Ordertransfer extends Component {
  static navigationOptions = {
    title: 'Order',
  };

  constructor() {
    super();
    this.state = {
      active: 'true',
      dataSource: []
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
      const url = 'http://10.15.5.150/dev/she/api/v1/apd/order/view';
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
            dataSource: responseJson.data.transfer,
            isloading: false
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
        <Content>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}