import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { AppRouter, history, onAuthChange } from "../imports/routes/AppRouter";
import { Links } from "../imports/api/links";
import "../imports/startup/simple-schema-config";
import { Session } from "meteor/session";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
    Session.set('showVisible', true)
  ReactDOM.render(<AppRouter />, document.getElementById("app"));
});
