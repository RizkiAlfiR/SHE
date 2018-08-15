import React, { Component } from 'react';
import { StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab, List, ListItem } from 'native-base';

export default class ReportAPD extends Component {
  static navigationOptions = {
    title: 'Report APD',
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
      const url = 'http://10.15.5.150/dev/she/api/v1/apd/report/stock_range/5000/5001?end=&start=&token=' + value;

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson));
          this.setState({
            dataSource: responseJson.data.data
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
          <Card>
            <CardItem header>
              <Text>Kode Material</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Nama Barang</Text>
                <Text>Merk</Text>
                <Text>Sizet</Text>
                <Text>Stock Awal</Text>
                <Text>Apd : In</Text>
                <Text>Apd : Out</Text>
                <Text>Stock Akhir</Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
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

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 10
  }
});