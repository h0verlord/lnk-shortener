import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import { Meteor } from "meteor/meteor";

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    };
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.refCopy);
    this.clipboard
      .on("success", () => {
        this.setState({ justCopied: true });
        setTimeout(() => {
          this.setState({ justCopied: false });
        }, 1000);
      })
      .on("error", () => {
        alert("unable to copy");
      });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
        <h3>{this.props.url}</h3>
        <h4>{this.props.shortUrl}</h4>
        <p>{this.props.visible.toString()}</p>
        <button
          ref={copy => {
            this.refCopy = copy;
          }}
          data-clipboard-text={this.props.shortUrl}
        >
          {this.state.justCopied ? "Copied" : "Copy"}
        </button>
        <button
          onClick={() => {
            Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
          }}
        >
          {this.props.visible ? "Hide" : "Unhide"}
        </button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string,
  shortUrl: PropTypes.string,
  url: PropTypes.string,
  userId: PropTypes.string,
  visible: PropTypes.bool.isRequired
};
