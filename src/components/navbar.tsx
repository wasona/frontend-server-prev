import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

const isLoggedIn: boolean = false;

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <div>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            {isLoggedIn ? (
              <div>
                <span>{"userName"}</span>
                <button>Logout</button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
