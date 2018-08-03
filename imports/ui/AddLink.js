import { Meteor } from "meteor/meteor";
import React from "react";

export default class AddLink extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const url = this.urlInput.value.trim();
    if (url) {
      Meteor.call("links.insert", url);
      this.urlInput.value = "";
    }
  }
  render() {
    return (
      <div>
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
