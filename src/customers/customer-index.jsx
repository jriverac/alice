import React from "react";
// import Redux from "redux";
// import AboutReducer from "./about-reducer";
// import AboutRouter from "../about/about-router";
// import { CreateTodoAction, IncreaseAge } from "./about-reducer-actions";

export default class CustomerIndex extends React.Component {
  render() {
    const Customers = this.props;
    return (
      <div id="customer-index">
        <h1>Customers</h1>
        <table id="customers-index-table">
          <CustomerIndexHead />
          <CustomerIndexFoot {...Customers} />

          <CustomerIndexBody {...Customers} />
        </table>
      </div>
    );
  }
}

class CustomerIndexHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
    );
  }
}

class CustomerIndexFoot extends React.Component {
  render() {
    const customers = this.props.customers;
    debugger;
    return (
      <tfoot>
        <tr>
          <td>Size: {customers.length}</td>
          <td></td>
        </tr>
      </tfoot>
    );
  }
}

class CustomerIndexBody extends React.Component {
  render() {
    const Customers = this.props.customers;
    return (
      <tbody>
        {Customers.map(customer => (
          <CustomerRow {...customer} />
        ))}
      </tbody>
    );
  }
}

class CustomerRow extends React.Component {
  render() {
    return (
      <tr id={this.props.id}>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>
          <button>Edit</button>
        </td>
      </tr>
    );
  }
}
