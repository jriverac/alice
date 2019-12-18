import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { counter } from "./reducers/customers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
const props = require("./resources/customer.json");

var store = createStore(counter);

ReactDOM.render(<App {...props} />, document.getElementById("root"));
