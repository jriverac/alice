import React from "react";
import Router from "./router";
const props = {
  stuff: "here"
};
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router {...props} />
      </div>
    );
  }
}
