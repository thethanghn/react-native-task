import React, { Component } from "react";
import Home from "../components/home/";
import DisapprovedPage from "../components/disapprovedPage";
import ApprovedPage from "../components/approvedPage";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    Approved: { screen: DisapprovedPage },
    Disapproved: { screen: ApprovedPage },
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
