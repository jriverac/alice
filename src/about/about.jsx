import React from "react";
// import Redux from "redux";
// import AboutReducer from "./about-reducer";
import AboutRouter from "./about-router";
// import { CreateTodoAction, IncreaseAge } from "./about-reducer-actions";

export default class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "About"
    }
  }
  
  render() {
    return (
      <div>
        <h1 id='title'>{this.state.title}</h1>
        <p id='intro'>{this.props.blurb}</p>
        <AboutRouter />
        {/* <p>{store.dispatch()}</p> */}
        {/* <button onClick="new IncreaseAge()" /> */}
      </div>
    );
  }
}
