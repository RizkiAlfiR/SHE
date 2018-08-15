import React, { Component } from "react";
import Main from "./Main";
import ApprovalAPD from "./ApprovalAPD";
import IndividualReportAPD from "./IndividualReportAPD";
import OrderAPD from "./OrderAPD";
import ReportAPD from "./ReportAPD";
import StockAPD from "./StockAPD";
import Search from "./Search";
import Profile from "./Profile";
import { createStackNavigator } from "react-navigation";

export default (DrawNav = createStackNavigator(
  {
    Main: { screen: Main },
    ApprovalAPD: { screen: ApprovalAPD },
    IndividualReportAPD: { screen: IndividualReportAPD },
    OrderAPD: { screen: OrderAPD },
    ReportAPD: { screen: ReportAPD },
    StockAPD: { screen: StockAPD },
    Search: { screen: Search },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Main"
  }
));
