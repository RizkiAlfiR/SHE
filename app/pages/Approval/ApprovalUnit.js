import React, { Component } from 'react';
import { Image, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab, View } from 'native-base';

var that;
class ListItem extends React.PureComponent {
  navigateToScreen(route, id_pinjam){
    // alert(route);
    AsyncStorage.setItem('id', id_pinjam).then(() => {
      that.props.navigation.navigate(route);
    })
  }

  render() {
    return (
      <View style={{backgroundColor: '#e6e6e6'}}>
        <Card style={{marginLeft: 10, marginRight: 10}}>
          <CardItem>
            <Left>
              <Body>
                <Text>Kode Order           : {this.props.data.KODE}</Text>
                <Text>Penanggung Jawab     : {this.props.data.NAMA}</Text>
                <Text>Unit Kerja           : {this.props.data.UK_TEXT}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Icon active name="pie" />
                <Text>Tanggal Order        : {this.props.data.CREATE_AT}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Right>
              <Body>
                <Text style={{fontWeight: 'bold'}} onPress={() => this.navigateToScreen('ActionsPinjam', this.props.data.ID)}>Actions</Text>
              </Body>
            </Right>
          </CardItem>
        </Card>
      </View>
    )
  }
}

export default class ApprovalUnit extends Component {
  static navigationOptions = {
    title: 'Approval'
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
      const url = 'http://10.15.5.150/dev/she/api/v1/apd/approve/mob_view';
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
    that=this;
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