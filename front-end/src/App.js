
import React, { useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Additem from "./components/Additem";
import Render from "./components/Render";
import Header2 from "./components/Header2";
import Contact from "./components/Contact";
import Updateinfo from "./components/Updateinfo"
import Userprofile from './components/Userprofile';
import Renderall from "./components/Renderall"
import Rent from './components/Rent';


const App = () => {
  const [post, setPost] = useState([]);
  
  return (

    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
        </Route>

        <Route path="/home">
          <Header />
          <Home />
        </Route>

        <Route path="/add">
          <Header2 />
          <Additem data={post}/>
        </Route>

        <Route path="/showpost">
          <Header2 />
          <Render datashow={post}/>
        </Route>

        <Route path="/items">
          <Header2 />

          <p>Safely profit from all items you own</p>
          <Link className="link" to="/add">
            <button>Add Item</button>
          </Link>
        </Route>

        <Route path="/register">
          <Header />
          <Register />
        </Route>

        <Route path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact path="/user/profile" >
				<Renderall />
        </Route>

    
        
        {/* <Route  path="/rent">
         <Rent/>
        </Route> */}
        <Route  path='/rent'
render={props => <Rent {...props} />}/>


        <Route path="/Contact">
          <Header2 />
          <Contact />
        </Route>
        <Route path="/userprofile">
          <Header2 />
         <Userprofile/>
        </Route>
        <Route path="/update">
          <Header2 />
         <Updateinfo/>
        </Route>
      </div>
    </Router>
  );
};

export default App;




