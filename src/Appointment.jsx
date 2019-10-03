import React from "react";

export default class Appointment extends React.Component {
  render() {
    return (
      <div className="foo">{`${this.props.customer.firstName} ${this.props.customer.lastName}`}</div>
    );
  }
}
