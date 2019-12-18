import React from "react";

export default class NewSubscription extends React.Component {
  render() {
    return (
      <fieldset>
        <input
          type="text"
          readOnly
          id="customer-first-name"
          value={`${this.props.firstName}`}
        />
        <input
          type="text"
          readOnly
          id="customer-last-name"
          value={`${this.props.lastName}`}
        />
        <div id="age">{this.props.age}</div>
      </fieldset>
    );
  }
}
