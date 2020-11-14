import React, { Component } from "react";
import { Route, BrowserRouter as Router , Redirect,Link} from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Additem from "./components/Additem"
// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createNewItem=()=>{
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiii');
  }






  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/home">
          <Home/>
          <Link className="link" to="/add">
          <button className="btn" onClick={this.createNewItem}>Add item</button>
           </Link>
          </Route>

          <Route path="/add">
        <Additem/>
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
