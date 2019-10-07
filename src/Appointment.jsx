import React from "react";

export default class Appointment extends React.Component {
  render() {
    return (
      <div className="foo">{`${this.props.firstName} ${this.props.lastName}`}</div>
    );
  }
}
