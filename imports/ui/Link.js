import React from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { history } from "./../routes/AppRouter";
import { Links } from "../api/links";

import LinksList from "./LinksList";

export default class Link extends React.Component {
  componentWillMount() {
    if (!Meteor.userId()) {
      history.replace("/");
    }
  }
  onLogout() {
    Accounts.logout();
  }

  onSubmit(e) {
    e.preventDefault();
    const url = this.urlInput.value.trim();
    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.urlInput.value = "";
    }
  }
  render() {
    return (
      <div>
        <h1>Links Page</h1>
        <button onClick={this.onLogout.bind(this)}>Log Out</button>
        <LinksList />
        <p>Add a Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            ref={url => {
              this.urlInput = url;
            }}
            placeholder="URL"
          />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
