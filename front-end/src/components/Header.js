import React from "react";
// import "./App.css";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
const Header = (props) => {
  let logedIn = true;
  if (!localStorage.getItem("token")) {
    logedIn = true;
  } else {
    logedIn = false;
  }

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="main-nav">
            {logedIn ? (
              <>
                <li>
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/user/profile">
                    All Post
                  </Link>
                </li>
                {/* <li>
                  <Link className="link" to="/items">
                    Items
                  </Link>
                </li> */}
                <li>
                  <Link className="link" to="/Contact">
                    Contact us
                  </Link>
                </li>
                <div className="auth">
                  <li>
                    <Link className="link btn" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="link btn" to="/login">
                      Login
                    </Link>
                  </li>
                </div>
              </>
            ) : (
              <>
                <li>
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/user/profile">
                    All Post
                  </Link>
                </li>
                {/* <li>
                  <Link className="link" to="/items">
                    Items
                  </Link>
                </li> */}
                <li>
                  <Link className="link" to="/Contact">
                    Contact us
                  </Link>
                </li>
                <div className="auth">
                  <li>
                    <button className="link btn" to="/home" onClick={logout}>
                      logout
                    </button>
                  </li>
                  <li>
                    <Link className="link" to="/userprofile">
                      <img
                        className="user_icon"
                        src="https://img.icons8.com/bubbles/50/000000/user-male.png"
                      />
                    </Link>
                  </li>
                </div>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Header);
