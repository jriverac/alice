import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./app";
const props = require("./resources/customer.json");

ReactDOM.render(<App {...props} />, document.getElementById("root"));
