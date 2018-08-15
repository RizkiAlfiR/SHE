import React, { Component } from 'react';
import { Image, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab, View } from 'native-base';

class ListItem extends React.PureComponent {
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

export default class FullBodyHarness extends Component {
  static navigationOptions = {
    title: 'Stock',
  };

  constructor() {
    super();
    this.state = {
      active: 'true',
      dataSource: [],
      isLoading: true
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
      const url = 'http://10.15.5.150/dev/she/api/v1/apd/stock/view/table/5000/5002?token=' + value;

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson));
          this.setState({
            dataSource: responseJson.data["800"],
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
      this.state.isloading
      ?
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= "large" color= "#330066" animating />
      </View>
      :
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