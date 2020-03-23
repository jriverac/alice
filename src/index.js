import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import { createStore } from "redux";
import { customerReducer } from "./components/customers/customer-reducer";
import { CustomerActions } from "./components/customers/customer-actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
const props = require("./resources/customer.json");

var store = createStore(customerReducer);

  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>, 
    document.getElementById("root")
  );

