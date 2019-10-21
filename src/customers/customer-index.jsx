import React from "react";
// import Redux from "redux";
// import AboutReducer from "./about-reducer";
// import AboutRouter from "../about/about-router";
// import { CreateTodoAction, IncreaseAge } from "./about-reducer-actions";
import "./customer-index.css";

import CustomerIndexBody from "./customer-index-body";
import CustomerIndexFoot from "./customer-index-foot";
import CustomerIndexHead from "./customer-index-head";

export default class CustomerIndex extends React.Component {
  render() {
    const Customers = this.props;
    return (
      <div id="customer-index">
        <h1>Customers</h1>
        <table id="customer-index-table">
          <CustomerIndexHead />
          <CustomerIndexFoot {...Customers} />
          <CustomerIndexBody {...Customers} />
        </table>
      </div>
    );
  }
}
