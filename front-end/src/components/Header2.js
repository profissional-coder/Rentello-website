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

            {/* {'    '}
              <li>
                <Link className="link" to="">Category</Link>
              </li> */}

            {"   "}
            <li>
              <Link className="link" to="/items">
                Items
              </Link>
            </li>
            {"   "}
            <li>
              <Link className="link" to="/home">
              logout
              </Link>
            </li>
            {"    "}
            {
              <li>
                <img
                  className="user_icon"
                  src="https://img.icons8.com/bubbles/50/000000/user-male.png"
                />
              </li>
            }
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header2;
