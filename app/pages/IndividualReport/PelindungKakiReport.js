import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class PelindungKakiReport extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Tanggal</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Nama Barang</Text>
                <Text>Note</Text>
                <Text>Release At</Text>
                <Text>Expired Date</Text>
                <Text>Expired At</Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}