import React, { Component } from "react";
import Orderpersonal from "./Order/Orderpersonal.js";
import Orderpinjam from "./Order/Orderpinjam.js";
import Orderunit from "./Order/Orderunit.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default ( MainScreenNavigator = TabNavigator (
  {
    Orderpersonal: { screen: props => <Orderpersonal {...props} /> },
    Orderpinjam: { screen: props => <Orderpinjam {...props} /> },
    Orderunit: { screen: props => <Orderunit {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Orderpersonal")} >
              <Icon name="ios-paper-plane" />
              <Text>Order Personal</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Orderpinjam")} >
              <Icon name="ios-paper-plane" />
              <Text>Order Peminjaman</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Orderunit")} >
              <Icon name="headset" />
              <Text>Order Unit Kerja  </Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));