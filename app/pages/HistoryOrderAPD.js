import React, { Component } from "react";
import HistoryOrderPersonal from "./Order/HistoryOrderPersonal.js";
import HistoryOrderPinjam from "./Order/HistoryOrderPinjam.js";
import HistoryOrderUnit from "./Order/HistoryOrderUnit.js";
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
    HistoryOrderPersonal: { screen: props => <HistoryOrderPersonal {...props} /> },
    HistoryOrderPinjam: { screen: props => <HistoryOrderPinjam {...props} /> },
    HistoryOrderUnit: { screen: props => <HistoryOrderUnit {...props} /> }
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
              onPress={() => props.navigation.navigate("HistoryOrderPersonal")} >
              <Icon name="ios-paper-plane" />
              <Text>History Personal</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("HistoryOrderPinjam")} >
              <Icon name="ios-paper-plane" />
              <Text>History Peminjaman</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("HistoryOrderUnit")} >
              <Icon name="headset" />
              <Text>History Unit Kerja  </Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));