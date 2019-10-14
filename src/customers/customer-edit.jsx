import React from "react";
import CustomerFields from "./customer-fields";

export default class EditCustomer extends React.Component {
  render() {
    return (
      <div>
        <h1 id="form-title">Form Title</h1>
        <form>
          <CustomerFields {...this.props.customer} />
        </form>
      </div>
    );
  }
}
