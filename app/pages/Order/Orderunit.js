import React, { Component } from 'react';
import { Image, FlatList, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab, View } from 'native-base';

class ListItem extends React.PureComponent {
  render() {
    return (
      <View style={{backgroundColor: '#e6e6e6'}}>
        <Card style={{marginLeft: 10, marginRight: 10}}>
          <CardItem>
            <Left>
              <Body>
                <Text>Kode Order   : {this.props.data.KODE_ORDER}</Text>
                <Text>Penanggung Jawab  : {this.props.data.NAME}</Text>
                <Text>No. Badge         : {this.props.data.NO_BADGE}</Text>
                <Text note>Unit Kerja        : {this.props.data.UK_TEXT}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text>Tanggal Order     : {this.props.data.CREATE_AT}</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <Text>Status Order      : {this.props.data.STATUS}</Text>
              </Body>
            </Right>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class Orderunit extends Component {
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
            dataSource: responseJson.data.unit_kerja,
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