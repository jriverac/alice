import React from "react";

export class Appointment extends React.Component {
  render() {
    return <div className="foo">{this.props.customer.firstName}</div>;
  }
}
