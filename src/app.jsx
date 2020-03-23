import React from "react";
// import { createStore, comlbineReducers } from "redux";
import { createStore } from "redux";
// import { aboutReducer } from "./about/about-reducer";
// import { customerReducer } from "./customers/customers";
import { counter } from "./reducers/customers";

import Router from "./router";
import Container from "react-bootstrap/container";

// export combineReducers({
//   about,
//   customers
// });
// debugger;

// let store = createStore(counter);

export default class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="anonymous"
        />
        <h1 id="the-title">The App Bootstrap</h1>
        <Router />
      </Container>
    );
  }
}
