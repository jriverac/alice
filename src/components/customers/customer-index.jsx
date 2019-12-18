import React from "react";
// import Redux from "redux";
// import AboutReducer from "./about-reducer";
// import AboutRouter from "../about/about-router";
// import { CreateTodoAction, IncreaseAge } from "./about-reducer-actions";
import "./customer-index.css";
import Table from "react-bootstrap/table";

import CustomerIndexBody from "./customer-index-body";
import CustomerIndexFoot from "./customer-index-foot";
import CustomerIndexHead from "./customer-index-head";
import Button from "react-bootstrap/Button";

export default class CustomerIndex extends React.Component {
  render() {
    const Customers = this.props;
    return (
      <div id="customer-index">
        <h1>Customers</h1>  
        <Table id="customer-index-table" striped bordered>
          <CustomerIndexHead />
          <CustomerIndexFoot {...Customers} />
          <CustomerIndexBody {...Customers} />
        </Table>
        <Button>New</Button>
      </div>
    );
  }
}
