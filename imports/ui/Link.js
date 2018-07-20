import React from "react";

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>{this.props.history.push('/')}}>Log Out</button>
      </div>
    );
  }
}
