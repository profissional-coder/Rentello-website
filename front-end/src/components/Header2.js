import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Header2 = () => {
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

            {'    '}
              <li>
                <Link className="link" to="/user/profile">All Post</Link>
              </li>

            {"   "}
            <li>
              <Link className="link" to="/items">
                Items
              </Link>
            </li>
            {"   "}
            <li>
              <Link className="link" to="/login">
              logout
              </Link>
            </li>
            {"    "}
            
              <li>
              <Link className="link" to="/userprofile">

                <img
                  className="user_icon"
                  src="https://img.icons8.com/bubbles/50/000000/user-male.png"
                />
                </Link>
              </li>
            
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header2;
