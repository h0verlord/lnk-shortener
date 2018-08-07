import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import { Meteor } from "meteor/meteor";
import moment from "moment";

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

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? "visit" : "visits";
    let visitedMessage = null;

    if (typeof this.props.lastVisitedAt === "number") {
      let momentNow = moment(this.props.lastVisitedAt).fromNow();
      visitedMessage = `(last visited ${momentNow})`;
    }

    return (
      <p className="item__message">
        {this.props.visitedCount} {visitMessage} {visitedMessage}
      </p>
    );
  }
  render() {
    return (
      <div className="item">
        <h2>{this.props.url}</h2>
        <p className="item__message">{this.props.shortUrl}</p>
        {this.renderStats()}
        <a
          className="button button--pill button--link"
          href={this.props.shortUrl}
          target="_blank"
        >
          Visit
        </a>
        <button
          className="button button--pill"
          ref={copy => {
            this.refCopy = copy;
          }}
          data-clipboard-text={this.props.shortUrl}
        >
          {this.state.justCopied ? "Copied" : "Copy"}
        </button>
        <button
          className="button button--pill button--link"
          onClick={() => {
            Meteor.call(
              "links.setVisibility",
              this.props._id,
              !this.props.visible
            );
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
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};
