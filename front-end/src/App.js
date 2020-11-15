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
    this.state = {
      Token:""
    };
  }

  createNewItem=()=>{
  //  console.log('localStorage.setItem',localStorage.getItem("token"));
   if (!!localStorage.getItem("token")){
     this.setState({Token:true})
   }else{
    this.setState({Token:false})
   }
    
  }


  render() {
    
    
    return (
      <Router>
        
        <div className="App">
          <Header />
          <Route path="/home">
     
          {/* {?(<Redirect to ="/add"/> ):(<Redirect to ="/home"/>)} */}
         <Home/>
          </Route>
         <Link className="link" to="/add">
        <button className="btn" onClick={this.createNewItem}>Add item</button>

     </Link>
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
