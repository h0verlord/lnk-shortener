import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import {Tracker} from 'meteor/tracker'
import { AppRouter, history } from "../imports/routes/AppRouter";

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById("app"));
});