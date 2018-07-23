import React from "react";
import {Accounts} from 'meteor/accounts-base'
import {history }from './../routes/AppRouter'
export default class Link extends React.Component {
    componentWillMount() {
        if (!Meteor.userId()) {
            history.replace('/')
        }
    };
    onLogout(){
        Accounts.logout();
    }
  render() {
    return (
      <div>
      <h1>Links Page</h1>
        <button onClick={this.onLogout.bind(this)}>Log Out</button>
      </div>
    );
  }
}
