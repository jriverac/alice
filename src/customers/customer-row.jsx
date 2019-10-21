import React from "react";
export default class CustomerRow extends React.Component {
  render() {
    return (
      <tr id={this.props.id}>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td className="listActions">
          <button>Edit</button>
        </td>
      </tr>
    );
  }
}
