import React from "react";
import CustomerRow from "./customer-row";
export default class CustomerIndexBody extends React.Component {
  render() {
    const Customers = this.props.customers;
    return (
      <tbody>
        {Customers.map(customer => (
          <CustomerRow key={customer.id} {...customer} />
        ))}
      </tbody>
    );
  }
}
