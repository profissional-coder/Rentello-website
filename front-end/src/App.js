import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register";

// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/
