import React from "react";
import CustomerFields from "./customer-fields";
import { isTerminatorless } from "@babel/types";

export default class Customers extends React.Component {
  render() {
    return (
      <div className="customersList">
        for(const [index, value] of customers.entries()){" "}
        {items.push(<CustomerRow {...value} />)}
      </div>
    );
  }
}
