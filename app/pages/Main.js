import React, { Component } from 'react';
import { 
  Container, 
  Content, 
  Text, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title, 
  Subtitle,
  Footer,
  FooterTab,
  Badge
} from 'native-base';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Semen Indonesia</Title>
            <Subtitle>Welcome to application</Subtitle>
          </Body>
          <Right>
            <Button transparent iconLeft onPress={this.props.onLogoutPress}>
              <Icon name='log-out' />
            </Button>
          </Right>
        </Header>
        <Content>
          
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}