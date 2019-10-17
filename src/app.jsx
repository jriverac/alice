import React from "react";
import { createStore, combineReducers } from "redux";
// import { createStore } from "redux";
import { aboutReducer } from "./about/about-reducer";
import { customerReducer } from "./customers/customer-reducer";

import Router from "./router";

// export combineReducers({
//   about,
//   customers
// });
// debugger;
const store = createStore(combineReducers(aboutReducer, customerReducer));

// const store = createStore(about);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>{`${store}`}</p>
        <Router />
      </div>
    );
  }
}
