import React from "react";
import Button from "react-bootstrap/button";
export default class CustomerRow extends React.Component {
  render() {
    return (
      <tr id={`customer-${this.props.id}`}>
        <td className="firstName">{this.props.firstName}</td>
        <td className="lastName">{this.props.lastName}</td>
        <td className="listActions">
          <Button>Edit</Button>&nbsp;
          <Button>Delete</Button>
        </td>
      </tr>
    );
  }
}
