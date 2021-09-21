import React from "react"

export default class UserIndex extends React.Component {
  state = { title:  "Users Here" };
  setTitle = () => {};
  [ title, setTitle ] = React.useState(false);
  
  render() {
    return (
      <div>
        <h1>{ this.title }</h1>
        <p>This is just a second test here.</p>
      </div>
    )
  }
}