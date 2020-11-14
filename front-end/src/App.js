import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/register">
        <Register/>
          </Route>
          <Route path="/login">
        <Login/>
          </Route>
        </div>
      </Router>
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
