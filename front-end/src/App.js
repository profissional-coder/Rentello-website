
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
import posts from './components/Post'
import Infone  from './components/InformationOne'
import inforationTow from './components/InformationTwo'



const App = () => {
  const [post, setPost] = useState([]);
  const [price, setprice] = useState(0)
  const [Category, setCategory] = useState('')
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')
  const [IMG, setIMG] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [Name, setName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState(0)
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
             <Infone/>
        </Route>
        
      </div>
    </Router>
  );
};

export default App;




