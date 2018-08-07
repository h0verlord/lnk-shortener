import { Meteor } from "meteor/meteor";
import React from "react";
import Modal from "react-modal";

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      isOpen: false,
      error: ""
    };
  }

  onSubmit(e) {
    const { url } = this.state;

    e.preventDefault();

    // if (url) {
    Meteor.call("links.insert", url, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason });
      }
    });
    // }
  }
  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  handleModalClose() {
    this.setState({ url: "", isOpen: false, error: "" });
  }
  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          + Add Link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          ariaHideApp={false}
          onAfterOpen={() => {
            this.urlInput.focus();
          }}
          onRequestClose={this.handleModalClose.bind(this)}
        >
          <h1>Add a Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              ref={url => {
                this.urlInput = url;
              }}
              placeholder="URL"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button>Add Link</button>
          </form>
          <button onClick={this.handleModalClose.bind(this)}>Close</button>
        </Modal>
      </div>
    );
  }
}
