import React from "react";
import CustomerIndexRow from "./customer-index-row";
export default class CustomerIndexBody extends React.Component {
  render() {
    const Customers = this.props.customers;
    return (
      <tbody>
        {Customers.map(customer => (
          <CustomerIndexRow key={customer.id} {...customer} />
        ))}
      </tbody>
    );
  }
}
