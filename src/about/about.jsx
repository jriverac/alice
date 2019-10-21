import React from "react";
// import Redux from "redux";
// import AboutReducer from "./about-reducer";
import AboutRouter from "./about-router";
// import { CreateTodoAction, IncreaseAge } from "./about-reducer-actions";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <AboutRouter />
        {/* <p>{store.dispatch()}</p> */}
        {/* <button onClick="new IncreaseAge()" /> */}
      </div>
    );
  }
}
