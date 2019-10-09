import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

const props = require("./resources/customer.json");

ReactDOM.render(<App {...props} />, document.getElementById("root"));
