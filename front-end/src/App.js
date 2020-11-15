import React, { Component } from "react";
import { Route, BrowserRouter as Router , Redirect,Link} from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Additem from "./components/Additem"
import Render from "./components/Render"
import Header2 from "./components/Header2"
// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }




  render() {
    
    
    return (
      <Router>
        
        <div className="App">
        <Route  exact path="/">
          <Header />
          </Route>
         
         
          <Route path="/home">
           <Header/>
         <Home/>
          </Route>
         
         
          <Route path="/add">
          <Header2/>
        <Additem/>
          </Route>

   
          <Route path="/showpost">
          <Header2/>
          <Render/>
          </Route>
         
          <Route path="/items"> 
          <Header2/>
         
          <p>Safely profit from all items you own</p>
          <Link className="link" to="/add">
<button>Add Item</button>
</Link>
          </Route>
         
          
          
          <Route path="/register">
          <Header />
        <Register/>
          </Route>


          <Route path="/login">
          <Header />
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
