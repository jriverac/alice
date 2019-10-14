import React from "react";
import { createStore, combineReducers } from "redux";
import { aboutReducer } from "./about/about-reducer";
import {customers} from "./customers/customers-reducer";

import Router from "./router";

const props = {
  stuff: "here"
};

export default combineReducers({
  aboutReducer,
  customers
})

const store = createStore(combineReducers, ['Use Redux'])

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router {...props} />
      </div>
    );
  }
}
