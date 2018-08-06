import React from "react";
import { Session } from "meteor/session";

export default class LinksListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVisible: true
    };
  }
  componentDidMount() {
    this.VisibleLinksTracker = Tracker.autorun(() => {
      this.setState({ showVisible: Session.get("showVisible") });
    });
  }
  componentWillUnmount() {
    this.VisibleLinksTracker.stop();
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            onChange={e => {
              Session.set("showVisible", !e.target.checked);
              // console.log(e.target.checked);
            }}
            checked={!this.state.showVisible}
          />
          show hidden links
        </label>
      </div>
    );
  }
}
