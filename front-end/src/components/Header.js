import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Header = () => {
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
              <Link className="link" to="/Contact">
                Contact us
              </Link>
            </li>
            {"   "}
            <li>
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
            {"    "}
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
