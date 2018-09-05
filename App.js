import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './app/pages/Login';
import Main from "./app/pages/Main";
import ApprovalAPD from "./app/pages/ApprovalAPD";
import IndividualReportAPD from "./app/pages/IndividualReportAPD";
<<<<<<< HEAD
import PilihanOrder from "./app/pages/PilihanOrder";
import HistoryOrderAPD from "./app/pages/HistoryOrderAPD";
import OrderAPD from "./app/pages/OrderAPD";
=======
import OrderAPD from "./app/pages/OrderAPD";
import OrderNewAPD from "./app/pages/OrderNewAPD";
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
import ReportAPD from "./app/pages/ReportAPD";
import StockAPD from "./app/pages/StockAPD";
import Profile from "./app/pages/Profile";
import ActionsPinjam from "./app/pages/Approval/ActionsPinjam";
import ActionsPersonal from "./app/pages/Approval/ActionsPersonal";
import ActionsUnit from "./app/pages/Approval/ActionsUnit";

export default createStackNavigator ({
  Login: Login,
  Main: Main ,
  ApprovalAPD: ApprovalAPD ,
  IndividualReportAPD: IndividualReportAPD ,
<<<<<<< HEAD
  PilihanOrder: PilihanOrder ,
  HistoryOrderAPD: HistoryOrderAPD,
=======
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
  OrderAPD: OrderAPD ,
  ReportAPD: ReportAPD ,
  StockAPD: StockAPD ,
  Profile: Profile,
<<<<<<< HEAD
=======
  OrderNewAPD: OrderNewAPD,
>>>>>>> 7494bddcc91f096d60c7a0792f2e9c0a483b48c7
  ActionsPinjam: ActionsPinjam,
  ActionsPersonal: ActionsPersonal,
  ActionsUnit: ActionsUnit
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
