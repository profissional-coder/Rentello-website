import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";
const Header = () => {
  const logedIn = false;

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="main-nav">
            <li>
              <Link className="link" to="/home">
                Home
              </Link>
            </li>
            {logedIn && (
              <>
                <li>
                  <Link className="link" to="/user/profile">
                    All Post
                  </Link>
                </li>

                {"   "}
                <li>
                  <Link className="link" to="/items">
                    Items
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link className="link" to="/Contact">
                Contact us
              </Link>
            </li>
            <div className="auth">
              {!logedIn ? (
                <>
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
                </>
              ) : (
                <>
                  <li>
                    <Link className="link btn" to="/home">
                      logout
                    </Link>
                  </li>

                  <li>
                    <Link className="link" to="/userprofile">
                      <img
                        className="user_icon"
                        src="https://img.icons8.com/bubbles/50/000000/user-male.png"
                      />
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
