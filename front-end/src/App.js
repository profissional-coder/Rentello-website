import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
// import "./App.css";
import "./css/_base.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Additem from "./components/Additem";
import Render from "./components/Render";
import Header2 from "./components/Header2";
import Contact from "./components/Contact";
import Updateinfo from "./components/Updateinfo";
import Userprofile from "./components/Userprofile";
import Renderall from "./components/Renderall";
import Rent from "./components/Rent";
import Profile from "./components/Profile";

const App = () => {
  const [post, setPost] = useState([]);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route path="/home">
          <Header />
          <Home />
        </Route>

        <Route path="/add">
          <Header />
          <Additem data={post} />
        </Route>

        <Route path="/showpost">
          <Header />
          <Render datashow={post} />
        </Route>

        <Route path="/items">
          <Header />

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

        <Route exact path="/user/profile">
          <Header />
          <Renderall />
        </Route>

        <Route
          path="/rent"
          render={(props) => (
            <>
              <Header />
              <Rent {...props} />
            </>
          )}
        />

        <Route path="/Contact">
          <Header />
          <Contact />
        </Route>
        <Route path="/userprofile">
          <Header />
          <Profile />
        </Route>
        <Route path="/update">
          <Header />
          <Updateinfo />
        </Route>
      </div>
    </Router>
  );
};

export default App;
