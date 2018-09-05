import React, { Component } from "react";
import OrderPersonal from "./Order/OrderPersonal.js";
import OrderPinjam from "./Order/OrderPinjam.js";
import OrderUnit from "./Order/OrderUnit.js";
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
    OrderPersonal: { screen: props => <OrderPersonal {...props} /> },
    OrderPinjam: { screen: props => <OrderPinjam {...props} /> },
    OrderUnit: { screen: props => <OrderUnit {...props} /> }
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
              onPress={() => props.navigation.navigate("OrderPersonal")} >
              {/* <Icon name="ios-paper-plane" /> */}
              <Text>Order Personal</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("OrderPinjam")} >
              {/* <Icon name="ios-paper-plane" /> */}
              <Text>Order Peminjaman</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("OrderUnit")} >
              {/* <Icon name="headset" /> */}
              <Text>Order Unit Kerja  </Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));