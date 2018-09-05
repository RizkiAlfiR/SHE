<<<<<<< HEAD
import React, { Component } from "react";
import ApprovalPersonal from "./Approval/ApprovalPersonal";
import ApprovalPinjam from "./Approval/ApprovalPinjam";
import ApprovalUnit from "./Approval/ApprovalUnit";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Header,
  Item,
  Footer,
  FooterTab,
  Label,
} from "native-base";

export default ( MainScreenNavigator = TabNavigator (
  {
    ApprovalPersonal: { screen: props => <ApprovalPersonal {...props} /> },
    ApprovalPinjam: { screen: props => <ApprovalPinjam {...props} /> },
    ApprovalUnit: { screen: props => <ApprovalUnit {...props} /> },
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
              onPress={() => props.navigation.navigate("ApprovalPersonal")} >
              {/* <Icon name="ios-paper-plane" /> */}
              <Text>Permintaan Personal</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("ApprovalPinjam")} >
              {/* <Icon name="ios-paper-plane" /> */}
              <Text>Peminjaman</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("ApprovalUnit")} >
              {/* <Icon name="ios-paper-plane" /> */}
              <Text>Permintaan Unit Kerja</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
=======
import React, { Component } from "react";
import ApprovalPersonal from "./Approval/ApprovalPersonal";
import ApprovalPinjam from "./Approval/ApprovalPinjam";
import ApprovalUnit from "./Approval/ApprovalUnit";
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
    ApprovalPersonal: { screen: props => <ApprovalPersonal {...props} /> },
    ApprovalPinjam: { screen: props => <ApprovalPinjam {...props} /> },
    ApprovalUnit: { screen: props => <ApprovalUnit {...props} /> }
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
              onPress={() => props.navigation.navigate("ApprovalPersonal")} >
              <Icon name="ios-paper-plane" />
              <Text>Permintaan Personal</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("ApprovalPinjam")} >
              <Icon name="ios-paper-plane" />
              <Text>Peminjaman</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("ApprovalUnit")} >
              <Icon name="ios-paper-plane" />
              <Text>Permintaan Unit Kerja</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
));