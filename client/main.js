import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Tracker} from 'meteor/tracker'
import { AppRouter, history, onAuthChange } from "../imports/routes/AppRouter";

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated)
    console.log("isAuthenticated", isAuthenticated);
  });

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById("app"));
});