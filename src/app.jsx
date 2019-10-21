import React from "react";
// import { createStore, comlbineReducers } from "redux";
// import { createStore } from "redux";
// import { aboutReducer } from "./about/about-reducer";
// import { customerReducer } from "./customers/customer-reducer";

import Router from "./router";
import Container from "react-bootstrap/container";

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
      <Container fluid>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        />
        <h1 id="the-title">The App bootstrap</h1>
        <Router />
      </Container>
    );
  }
}
