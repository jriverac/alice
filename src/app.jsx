import React from "react";
// import { createStore, comlbineReducers } from "redux";
// import { createStore } from "redux";
// import { aboutReducer } from "./about/about-reducer";
// import { customerReducer } from "./customers/customer-reducer";

import Router from "./router";

// export combineReducers({
//   about,
//   customers
// });
// debugger;
// const store = createStore(combineReducers(aboutReducer, customerReducer));

// const store = createStore(customerReducer);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 id="the-title">The App</h1>
        <Router />
      </div>
    );
  }
}
