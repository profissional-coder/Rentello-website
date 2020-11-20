
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import About from './components/About'
import posts from './components/Post'
import Infone  from './components/InformationOne'
import inforationTow from './components/InformationTwo'



const App = () => {
 
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
        <Route path="/About">
          <Header />
          <About />
        </Route>
        
        <Route path="/add">
          <Header2 />
          <Additem />
        </Route>

        <Route path="/showpost">
          <Header2 />
          <Render />
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

        <Route path="/Contact">
          <Header2 />
          <Contact />
        </Route>
        <Route path='/AllPost'>
        <Header2 />
             <Infone />
        </Route>
        
      </div>
    </Router>
  );
};

export default App;




