import React from "react";

export default class CustomerIndexFoot extends React.Component {
  render() {
    const customers = this.props.customers;
    // debugger;
    return (
      <tfoot>
        <tr>
          <td>Size: {customers.length}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    );
  }
}
